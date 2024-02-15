import { Container, Row } from "react-bootstrap";
import "./App.css";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  return (
    <Container>
      <Row>
        <WeatherForecast />
      </Row>
    </Container>
  );
}

export default App;
