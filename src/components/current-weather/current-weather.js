import "./current-weather.css"

const CurrentWeather = ({ data }) => {
  console.log(data);
    return (
        <div className="currentWeather">
          <div className="left">
              <div className="city">{data.city}</div>
              <div className="date"></div>
              <div className="temperture">{Math.round(data.main.temp)}°F</div>
              <div class="description">
                <img
                alt="weather"
                className="currentWeather-image-small"
                src={`icons/${data.weather[0].icon}.png`}
                />
                <span>{data.weather[0].description}</span>
              </div>
              <div className="wind">Wind: {data.wind.speed} m/s</div>
            <div className="humidity">Humidity: {data.main.humidity}%</div>
          </div>
          <div class="right">
            <img
              alt="weather"
              className="currentWeather-image-large"
              src={`icons/${data.weather[0].icon}.png`}
            />
          </div>
        </div>
      );
}

export default CurrentWeather;