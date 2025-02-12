namespace Weather {
  export type current = {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: WeatherDetails[];
    wind_deg: number;
    wind_speed: number;
    city: string;
  };
  export type WeatherDetails = {
    description: string;
    icon: string;
    id: number;
    main: string;
  };

  export type daily = {
    city: string;
    curr_temp: number;
    curr_feels_like: number;
    visibility: number;
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    summary: string;
    temp: Temperature;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: WeatherDetails[];
    clouds: number;
    pop: number;
    snow: number;
    uvi: number;
    rain: number;
    hourly: Hourly;
  };

  export type Temperature = {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };

  export type FeelsLike = {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };

  export type Hourly = {
    now: number;
    time: string;
    weather: WeatherDetails[];
  };
}
