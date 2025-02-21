import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import MainSection from "./components/MainSection";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar />
          <MainSection />
        </Row>
      </Container>
      <Player />
    </>
  );
}

export default App;
