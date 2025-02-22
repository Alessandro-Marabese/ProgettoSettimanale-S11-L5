export const GET_ROCK_SONGS = "GET_ROCK_SONGS";
export const GET_POP_SONGS = "GET_POP_SONGS";
export const GET_HIPHOP_SONGS = "GET_HIPHOP_SONGS";
export const IS_LOADING_ON = "IS_LOADING_ON";
export const IS_LOADING_OFF = "IS_LOADING_OFF";
export const GET_SONGS_BY_QUERY = "GET_SONGS_BY_QUERY";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const SELECT_SONG = "SELECT_SONG";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const addToFavouritesAction = (fav) => ({ type: ADD_TO_FAVOURITES, payload: fav });
export const removeFromFavourites = (fav) => ({ type: REMOVE_FROM_FAVOURITES, payload: fav.id });
export const selectSongAction = (song) => ({ type: SELECT_SONG, payload: song });

export const getRockSongsAction = (artistName) => {
  return async (dispatch) => {
    dispatch({ type: IS_LOADING_ON });
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        let { data } = await response.json();
        dispatch({ type: GET_ROCK_SONGS, payload: data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (error) {
      console.log("error", error);
      alert(error);
    } finally {
      dispatch({ type: IS_LOADING_OFF });
    }
  };
};
export const getPopSongsAction = (artistName) => {
  return async (dispatch) => {
    dispatch({ type: IS_LOADING_ON });
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        let { data } = await response.json();
        dispatch({ type: GET_POP_SONGS, payload: data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (error) {
      console.log("error", error);
      alert(error);
    } finally {
      dispatch({ type: IS_LOADING_OFF });
    }
  };
};

export const getHipHopSongsAction = (artistName) => {
  return async (dispatch) => {
    dispatch({ type: IS_LOADING_ON });
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        let { data } = await response.json();
        dispatch({ type: GET_HIPHOP_SONGS, payload: data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (error) {
      console.log("error", error);
      alert(error);
    } finally {
      dispatch({ type: IS_LOADING_OFF });
    }
  };
};
export const getSongsByQueryAction = (query) => {
  return async (dispatch) => {
    dispatch({ type: IS_LOADING_ON });
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query);
      if (response.ok) {
        let { data } = await response.json();
        dispatch({ type: GET_SONGS_BY_QUERY, payload: data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (error) {
      console.log("error", error);
      alert(error);
    } finally {
      dispatch({ type: IS_LOADING_OFF });
    }
  };
};
