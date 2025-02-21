import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rockSongsReducer from "../reducers/rockSongsReducer";
import popSongsReducer from "../reducers/popSongsReducer";
import hiphopSongsReducer from "../reducers/hiphopSongsReducer";
import getSongsReducer from "../reducers/getSongsByQuery";
import selectedSongReducer from "../reducers/selectedSongReducer";
import favouriteReducer from "../reducers/favouriteReducer";

const rootReducer = combineReducers({
  rockSongs: rockSongsReducer,
  popSongs: popSongsReducer,
  hiphopSongs: hiphopSongsReducer,
  querySongs: getSongsReducer,
  selectedSong: selectedSongReducer,
  favourites: favouriteReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
