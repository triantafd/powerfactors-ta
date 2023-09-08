/** @format */

import axios from "axios";

const BASE_URL = "https://api.disneyapi.dev/character";

// Define the types for character data
export interface ICharacter {
  _id: string;
  name: string;
  tvShows: string[];
  videoGames: string[];
  allies: string[];
  enemies: string[];
  imageUrl?: string;
}

export interface ICharacterInfo {
  count: number;
  totalPages: number;
  previousPage: string | null;
  nextPage: string | null;
}

export interface ICharacterService {
  data: ICharacter[];
  info: ICharacterInfo;
}

export const fetchDisneyCharacters = async (
  currentPage: number,
  pageSize: number,
  searchQuery?: string,
  tvShowFilter?: string
): Promise<ICharacterService> => {
  let url = `${BASE_URL}?page=${currentPage}&pageSize=${pageSize}`;

  if (searchQuery) {
    url += `&name=${searchQuery}`;
  }

  if (tvShowFilter) {
    url += `&tvShows=${tvShowFilter}`;
  }

  try {
    const response = await axios.get<ICharacterService>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
