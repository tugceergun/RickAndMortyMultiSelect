/* eslint-disable prettier/prettier */
export interface Character { //details of the character
    id: number;
    name: string;
    image: string;
    episode: string[];
    status: string;
    species: string;
}

export interface CharacterResponse {  //api response structure
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];  //list of characters
} 