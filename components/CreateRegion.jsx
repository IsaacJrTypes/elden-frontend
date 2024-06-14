import React, { useState } from 'react'
import { Text, View, TextInput, Pressable } from 'react-native'
import { useCreateRegion } from '../hooks/useCreateRegion';

export default function CreateRegion() {

  const [regionID, setRegionID] = useState(0)
  const [regionName, setRegionName] = useState('')
  const [tasks, setTasks] = useState('')

   const { mutate, isLoading, isError, isSuccess, data } = useCreateRegion();

  const handleSubmit = () => {
    console.log("pressed submit")
    
    const taskObjs = tasks.split(',').map((entry) => ({"description": entry}))

    const postPayload = {regionID: regionID, name: regionName,tasks:taskObjs}
    mutate(postPayload)
    setRegionID(regionID+1)
  }


  return (
    <>
      <Text className="text-lg text-center">Add Region</Text>
      <View>
        <View className="flex flex-row">
          <Text>Region Name</Text>
          <TextInput className="border-gray-400 border-solid border-2 w-80 my-3" onChangeText={(input)=> setRegionName(input)}/>
        </View>
        <View className="flex flex-row">
          <Text>Tasks (Seperate with commas)</Text>
          <TextInput className="border-gray-400 border-solid border-2 w-80 my-3" onChangeText={(input)=>setTasks(input)} />
        </View>
      </View>
      <Pressable className="border-solid border-2 border-sky-500">
        <Text className="text-center" onPress={() => handleSubmit()}>Create Quest</Text>
      </Pressable>
    </>
  )
}
