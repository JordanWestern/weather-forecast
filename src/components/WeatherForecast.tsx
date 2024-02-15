import { Carousel } from "react-bootstrap";
import lake from "../images/lake.jpg";

function WeatherForecast() {
  const weatherForecasts = ["1", "2", "3", "4"];

  return (
    <Carousel fade>
      {weatherForecasts.map((forecast) => {
        return (
          <Carousel.Item>
            <img className="d-block w-100" src={lake} alt="First slide" />
            <Carousel.Caption>
              <h3>Forecast title {forecast}</h3>
              <p>Forecast description {forecast}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default WeatherForecast;
