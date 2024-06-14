import React, { useState } from 'react'

import { Text, View, TextInput, Pressable } from 'react-native'
import URL from '../envConfig'

export default function CreateRegion() {

  const [regionID, setRegionID] = useState(0)
  const [regionName, setRegionName] = useState('')
  const [tasks, setTasks] = useState('')

  console.log('regionID:',regionID)
  console.log('regionName:',regionName)
  console.log('tasks:',tasks)

  const handleSubmit = () => {
    console.log("pressed submit")
    
    const taskObjs = tasks.split(',').map((entry) => ({"description": entry}))

    const postPayload = {"regionID": regionID, "name": regionName,"tasks":taskObjs}
    console.log("postPayload:",postPayload)

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
          <Text>Tasks</Text>
          <TextInput className="border-gray-400 border-solid border-2 w-80 my-3" onChangeText={(input)=>setTasks(input)} />
        </View>
      </View>
      <Pressable className="border-solid border-2 border-sky-500">
        <Text className="text-center" onPress={() => handleSubmit()}>Create Quest</Text>
      </Pressable>
    </>
  )
}
