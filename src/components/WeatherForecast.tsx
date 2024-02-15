import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import sunny from "../images/sunny.png";
import partlyCloudy from "../images/partlycloudy.png";
import windy from "../images/windy.png";
import snowy from "../images/snowy.png";
import rainy from "../images/rainy.png";
import cloudy from "../images/cloudy.png";

interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  humidity: number;
  conditions: string;
  image: string;
}

const fakeWeatherData: WeatherData[] = [
  {
    city: "New York",
    country: "USA",
    temperature: 20,
    humidity: 65,
    conditions: "Partly Cloudy",
    image: partlyCloudy,
  },
  {
    city: "London",
    country: "UK",
    temperature: 15,
    humidity: 70,
    conditions: "Rainy",
    image: rainy,
  },
  {
    city: "Paris",
    country: "France",
    temperature: 18,
    humidity: 75,
    conditions: "Cloudy",
    image: cloudy,
  },
  {
    city: "Tokyo",
    country: "Japan",
    temperature: 25,
    humidity: 60,
    conditions: "Sunny",
    image: sunny,
  },
  {
    city: "Sydney",
    country: "Australia",
    temperature: 28,
    humidity: 55,
    conditions: "Clear",
    image: sunny,
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    temperature: 30,
    humidity: 50,
    conditions: "Partly Cloudy",
    image: partlyCloudy,
  },
  {
    city: "Moscow",
    country: "Russia",
    temperature: 10,
    humidity: 80,
    conditions: "Snowy",
    image: snowy,
  },
  {
    city: "Cairo",
    country: "Egypt",
    temperature: 30,
    humidity: 40,
    conditions: "Sunny",
    image: sunny,
  },
  {
    city: "Beijing",
    country: "China",
    temperature: 22,
    humidity: 50,
    conditions: "Windy",
    image: windy,
  },
  {
    city: "Rome",
    country: "Italy",
    temperature: 22,
    humidity: 70,
    conditions: "Partly Cloudy",
    image: partlyCloudy,
  },
];

function RandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function ShowCarousel(props: WeatherData[]) {
  return (
    <Carousel fade className="fade-in">
      {props.map((data) => {
        return (
          <Carousel.Item key={data.city}>
            <div style={{ backgroundColor: RandomColor(), height: "70vh" }}>
              <img
                src={data.image}
                alt={data.image.toString()}
                height="300vh"
                style={{ display: "block", margin: "0 auto" }}
              />
              <Carousel.Caption>
                <h1>{data.city}</h1>
                <h4>{data.country}</h4>
                <p>Temperature: {data.temperature}°C</p>
                <p>Humidity: {data.humidity}%</p>
                <p>Conditions: {data.conditions}</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

function ShowThrobber() {
  return (
    <div className="spinner-container">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

function WeatherForecast() {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);

  useEffect(() => {
    // Simulate async API call with setTimeout
    const fetchData = () => {
      setTimeout(() => {
        setWeatherData(fakeWeatherData);
        setLoading(false);
      }, 2000); // Simulating 2 second delay
    };

    fetchData();
  }, []); // Run once on component mount

  return loading ? ShowThrobber() : ShowCarousel(weatherData);
}

export default WeatherForecast;
