import React from 'react';
import { Text, View } from 'react-native';
import {useRegions} from '../hooks/useRegions'

export default function Quest() {
  
 const { data, isLoading, isError } = useRegions()

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error fetching data</Text>;
  }
  if(data) {console.log(JSON.stringify(data,null,2))}

  return (
    <View>
      {data ? <Text>Data fetched: {JSON.stringify(data, null, 2)}</Text> : <Text>No data available</Text>}
    </View>
  );
}


