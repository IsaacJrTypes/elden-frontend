import React,{useState,useEffect} from 'react';
import { Text, View } from 'react-native';
import {useRegions} from '../hooks/useRegions'
import Checkbox from 'expo-checkbox';

export default function Quest() {
    const { data, isLoading, isError } = useRegions()

    const [quests,setQuests] = useState([])
    useEffect(() => {
        if (data) {
            setQuests(data)
        }
    }, [data])
    if (isError) {
        return <Text>Error fetching data</Text>;
    }

  return (
    <View>
        <Text className="text-lg text-center">Quests</Text>
        {quests.length !== 0 ? 
            quests.map((entry) => {
                return (
                <View key={entry._id}>
                    <Text>regionID:{entry.regionID}</Text>
                    <Text>Region Name{entry.name}</Text>
                    {entry.tasks.map((item)=> {
                        return (
                        <View key={item._id}>
                            <Text>{item.description}</Text>
                            <Checkbox value={item.complete}/>
                        </View>)
                    })}
                </View>)
            })
            : 
            <Text>Add a Region to create quest log</Text>
        }
    </View>
  );
}


