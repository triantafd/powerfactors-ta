/** @format */

// src/redux/reducers/characterReducer.js
import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} from "../actions/characterActions";
import { Action } from "redux";
import { RootState } from "../store";
import { ICharacterService } from "../../services/disneyService";

interface CharacterState {
  characters: ICharacterService["data"];
  info: ICharacterService["info"];
  loading: boolean;
  error: any;
}

const initialState: CharacterState = {
  characters: [],
  info: {
    count: 0,
    totalPages: 0,
    previousPage: null,
    nextPage: null,
  },
  loading: false,
  error: null,
};

type TCharacters_Request_Action_Type = Action<typeof FETCH_CHARACTERS_REQUEST>;
type TCharacters_Success_Action_Type = Action<typeof FETCH_CHARACTERS_SUCCESS>;
type TCharacters_Failure_Action_Type = Action<typeof FETCH_CHARACTERS_FAILURE>;

interface ICharactersRequestAction extends TCharacters_Request_Action_Type {}
interface ICharactersSuccessAction extends TCharacters_Success_Action_Type {
  payload: ICharacterService;
}
interface ICharactersFailureAction extends TCharacters_Failure_Action_Type {
  payload: string;
}

export type TAllCharacterActions =
  | ICharactersRequestAction
  | ICharactersSuccessAction
  | ICharactersFailureAction;

export const selectCharactersState = (rootState: RootState) =>
  rootState.characters;

const characterReducer = (
  state: CharacterState = initialState,
  action: TAllCharacterActions
) => {
  switch (action.type) {
    case FETCH_CHARACTERS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload.data,
        info: action.payload.info,
        error: null,
      };
    case FETCH_CHARACTERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default characterReducer;
