/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { create } from 'zustand';
import { Character } from '../types/character';




interface CharacterStore {  //structure of data and functions in the store
    selectedCharacters: Character[];
    addCharacter: (character: Character) => void; //object of type Character
    removeCharacter: (id: number) => void;
    clearCharacters: () => void;
}

export const useCharacterStore = create<CharacterStore>((set) => ({  // create Zustand store
    selectedCharacters: [],  //empty list at the beggining
    addCharacter: (character) =>
        set((state) => ({
            selectedCharacters: [...state.selectedCharacters, character],  //add character to the list
        })),
    removeCharacter: (id) =>
        set((state) => ({
            selectedCharacters: state.selectedCharacters.filter((char) => char.id !== id),  //remove character with given id 
        })),
    clearCharacters: () => set({ selectedCharacters: [] }),  //clear array
})); 