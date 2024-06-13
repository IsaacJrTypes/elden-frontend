import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Text, View } from 'react-native';
import URL from '../envConfig'

export default function Quest() {
  
  const getAllRegions = async () => {
    try {
      const response = await fetch(`${URL}regions`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (err) {
      console.log('get all regions err:', err);
      throw err; 
    }
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['regions'],
    queryFn: getAllRegions,
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error fetching data</Text>;
  }

  return (
    <View>
      {data ? <Text>Data fetched: {JSON.stringify(data, null, 2)}</Text> : <Text>No data available</Text>}
    </View>
  );
}
