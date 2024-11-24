
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useCharacterStore } from '../store/useCharacterStore';
import { Character, CharacterResponse } from '../types/character';

export const MultiSelect = () => {
  const [query, setQuery] = useState('');  //state of search text
  const { selectedCharacters, addCharacter, removeCharacter } = useCharacterStore();  //get functions from store. (destructuring)

  const { data, isLoading, error } = useQuery({  //manage query state
    queryKey: ['characters', query],  //get characters that match with query
    queryFn: async () => {  
      if (!query) return null;
      const response = await axios.get<CharacterResponse>(  //API request
        `https://rickandmortyapi.com/api/character/?name=${query}`
      );
      return response.data;
    },
    enabled: query.length > 0,  //enabled if query not empty
  });

  const highlightText = (text: string) => {  //highligt query word
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));  //text split according to the query
    return (
      <Text>
        {parts.map((part, i) =>
          part.toLowerCase() === query.toLowerCase() ? ( 
            <Text key={i} className="font-bold">  
              {part}  
            </Text>
          ) : (
            part  //other parts writes normal
          )
        )}
      </Text>
    );
  };

  const renderItem = ({ item }: { item: Character }) => {
    const isSelected = selectedCharacters.some((char) => char.id === item.id);  //check if there is an element matching item.id in selectedCharacters array

    return (
      <TouchableOpacity
        onPress={() => (isSelected ? removeCharacter(item.id) : addCharacter(item))}  //if character is selected touch and remove from selected list, if not add to list
        className="flex-row items-center p-2 border-b border-gray-200">
        <Image source={{ uri: item.image }} className="w-12 h-12 rounded-full" />
        <View className="flex-1 ml-3">
          {highlightText(item.name)} 
          <Text className="text-sm text-gray-600">{`${item.episode.length} episodes`}</Text>
        </View>
        {isSelected && (
          <Text className="text-indigo-600 font-semibold">Selected</Text>  //if isSelected writes selected
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1">
      <View className="flex-row flex-wrap p-2 border border-gray-300 rounded-lg">
        {selectedCharacters.map((char) => (  //return each character
          <View
            key={char.id}
            className="bg-indigo-100 rounded-full px-3 py-1 m-1 flex-row items-center">
            <Text className="text-indigo-800">{char.name}</Text>
            <TouchableOpacity
              onPress={() => removeCharacter(char.id)}  //remove character when you touch the button
              className="ml-2">
              <Text className="text-indigo-800">×</Text>
            </TouchableOpacity>
          </View>
        ))}
        <TextInput
          value={query}   // text written by user is assined to query
          onChangeText={setQuery}   //update query when changed
          placeholder="Search characters..."
          className="flex-1 min-w-[150px] p-2"
        />
      </View>

      {isLoading && (
        <View className="p-4">
          <ActivityIndicator color="#4F46E5" />
        </View>
      )}

      {error && (
        <View className="p-4">
          <Text className="text-red-500">Error loading characters</Text>
        </View>
      )}

      {data && (  //if data exist render FlatList
        <FlatList
          data={data.results}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          className="mt-2"
        />
      )}
    </View>
  );
}; 