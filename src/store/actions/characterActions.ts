/** @format */

// src/redux/actions/characterActions.js
import { ThunkAction } from "redux-thunk";
import { fetchDisneyCharacters } from "../../services/disneyService";
import { TAllCharacterActions } from "../reducers/characterReducer";
import { RootState } from "../store";
import { Dispatch } from "redux";

export const FETCH_CHARACTERS_REQUEST = "FETCH_CHARACTERS_REQUEST";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";

// Action creators
/* export const fetchCharacters =
  (): ThunkAction<void, RootState, undefined | null, TAllCharacterActions> =>
  async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_CHARACTERS_REQUEST });

    try {
      const characters = await fetchDisneyCharacters();
      dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: characters });
    } catch (error: any) {
      dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: error.message });
    }
  }; */

export const fetchCharacters =
  (
    currentPage: number,
    pageSize: number,
    searchQuery?: string,
    tvShowFilter?: string
  ): ThunkAction<void, RootState, undefined | null, TAllCharacterActions> =>
  async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_CHARACTERS_REQUEST });

    try {
      const characters = await fetchDisneyCharacters(
        currentPage,
        pageSize,
        searchQuery,
        tvShowFilter
      );
      dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: characters });
    } catch (error: any) {
      dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: error.message });
    }
  };
