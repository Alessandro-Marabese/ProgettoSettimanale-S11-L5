import { GET_ROCK_SONGS, IS_LOADING_OFF, IS_LOADING_ON } from "../actions";

const initialState = {
  content: [],
  isLoading: false,
};
const rockSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCK_SONGS:
      return {
        ...state,
        content: action.payload,
      };
    case IS_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case IS_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default rockSongsReducer;
