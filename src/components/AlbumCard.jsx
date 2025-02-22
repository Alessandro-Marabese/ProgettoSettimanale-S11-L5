import { useDispatch, useSelector } from "react-redux";
import { addToFavouritesAction, removeFromFavourites, selectSongAction } from "../redux/actions";
import { Button } from "react-bootstrap";

const AlbumCard = (song) => {
  if (!song) {
    return null;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const favourites = useSelector((state) => state.favourites.content);
  const isSongInFavourites = favourites.some((singleSong) => singleSong.id === song.data.id);

  return (
    <div className="col">
      <img
        src={song.data.album.cover_medium}
        alt="track"
        className="img-fluid"
        onClick={() => {
          dispatch(selectSongAction(song));
        }}
      />
      <div>
        <p>
          Track: {song.data.title}
          <br />
          Artist: {song.data.artist.name}
        </p>
        {isSongInFavourites ? (
          <Button
            onClick={() => {
              dispatch(removeFromFavourites(song.data));
            }}
            className="d-block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
            </svg>
          </Button>
        ) : (
          <Button
            className="d-block"
            onClick={() => {
              dispatch(addToFavouritesAction(song.data));
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </Button>
        )}
      </div>
    </div>
  );
};
export default AlbumCard;
