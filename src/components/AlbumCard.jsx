import { useDispatch, useSelector } from "react-redux";
import { addToFavouritesAction } from "../redux/actions";
import { Button } from "react-bootstrap";
import { selectSongAction } from "../redux/actions";

const AlbumCard = (song) => {
  if (!song) {
    return null;
  }
  const dispatch = useDispatch();

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
      <div className="d-flex align-items-center">
        <p>
          Track: "{song.data.title}"<br />
          Artist: {song.data.artist.name}
        </p>
      </div>
    </div>
  );
};
export default AlbumCard;
