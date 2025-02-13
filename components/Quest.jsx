import React,{useState,useEffect} from 'react';
import { Pressable, Text, View } from 'react-native';
import {useRegions} from '../hooks/useRegions'
import {useDeleteRegion} from '../hooks/useDeleteRegion'
import {useUpdateRegion} from '../hooks/useUpdateRegion'
import Checkbox from 'expo-checkbox';

export default function Quest() {
    const { data, isLoading, isError } = useRegions()
    const { mutate:deleteRegion } = useDeleteRegion()
    const { mutate:updateRegion } = useUpdateRegion()

    const [quests,setQuests] = useState([])
    useEffect(() => {
        if (data) {
            setQuests(data)
        }
    }, [data])
    if (isError) {
        return <Text>Error fetching data</Text>;
    }

    const handleDelete = (regionID) => {
        console.log("Clicked delete")
        deleteRegion(regionID)
    }

    const handleToggleTask = (regionID, taskID) => {
    setQuests((prevQuests) =>
      prevQuests.map((region) =>
        region.regionID === regionID
          ? {
              ...region,
              tasks: region.tasks.map((task) =>
                task._id === taskID
                  ? { ...task, complete: !task.complete }
                  : task
              ),
            }
          : region
        ));
    };

    const handleSave = (regionID) => {
        const foundRegion = quests.find((region) => region.regionID === regionID)
        console.log('foundRegion',JSON.stringify(foundRegion.tasks))
        updateRegion({ regionID, tasks: foundRegion.tasks })
    }

    return (
        <View>
            <Text className="text-lg text-center">Quests</Text>
            {quests.length !== 0 ? 
                quests.map((entry) => {
                    return (
                    <View key={entry._id}>
                        <Pressable onPress={() => handleDelete(entry.regionID)}>
                            <Text className="text-center">Delete</Text>
                        </Pressable>
                        <Text>regionID:{entry.regionID}</Text>
                        <Text>Region Name{entry.name}</Text>
                        {entry.tasks.map((item)=> {
                            return (
                            <View key={item._id}>
                                <Text>{item.description}</Text>
                                <Checkbox value={item.complete}
                                onValueChange={() => handleToggleTask(entry.regionID, item._id)}
                                />
                            </View>)
                        })}
                        <Pressable>
                            <Text className="text-center my-2" onPress={() => handleSave(entry.regionID)}>Save</Text>
                        </Pressable>
                    </View>)
                })
                : 
                <Text>Add a Region to create quest log</Text>
            }
        </View>
    );
}


