import { TOGGLE_AUTH } from "./types";

export const AuthReducer = (state ,action) => {
  const {type,payload} = action

  switch(type){
    case TOGGLE_AUTH:
      return !state;

    default:
      return state;
  }
}