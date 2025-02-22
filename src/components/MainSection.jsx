import { useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getHipHopSongsAction, getPopSongsAction, getRockSongsAction } from "../redux/actions";
import AlbumCard from "./AlbumCard";

const MainSection = () => {
  const isLoadingRock = useSelector((state) => state.rockSongs.isLoading);
  const isLoadingPop = useSelector((state) => state.popSongs.isLoading);
  const isLoadingHiphop = useSelector((state) => state.hiphopSongs.isLoading);
  const isLoadingSongs = useSelector((state) => state.querySongs.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockSongsAction("queen"));
    dispatch(getPopSongsAction("katyperry"));
    dispatch(getHipHopSongsAction("eminem"));
  }, [dispatch]);

  const rockSongs = useSelector((state) => state.rockSongs.content);
  const popSongs = useSelector((state) => state.popSongs.content);
  const hiphopSongs = useSelector((state) => state.hiphopSongs.content);
  const querySongs = useSelector((state) => state.querySongs.content);

  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      {isLoadingSongs && querySongs.length === 0 ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Row>
          <Col className="col-10">
            <div id="rock">
              <h2>Search Results</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
                {querySongs.slice(0, 4).map((songData) => (
                  <AlbumCard key={songData.id} data={songData} />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      )}
      <Row>
        <Col className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              {isLoadingRock ? (
                <Spinner animation="border" variant="primary" />
              ) : rockSongs.length > 0 ? (
                rockSongs.slice(0, 4).map((songData) => <AlbumCard key={songData.id} data={songData} />)
              ) : (
                <p>No Rock Songs Found</p>
              )}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
              {isLoadingPop ? (
                <Spinner animation="border" variant="primary" />
              ) : popSongs.length > 0 ? (
                popSongs.slice(0, 4).map((songData) => <AlbumCard key={songData.id} data={songData} />)
              ) : (
                <p>No Pop Songs Found</p>
              )}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
              {isLoadingHiphop ? (
                <Spinner animation="border" variant="primary" />
              ) : hiphopSongs.length > 0 ? (
                hiphopSongs.slice(0, 4).map((songData) => <AlbumCard key={songData.album.id} data={songData} />)
              ) : (
                <p>No HipHop Songs Found</p>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </main>
  );
};
export default MainSection;
