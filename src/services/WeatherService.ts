import axios, { AxiosResponse } from "axios";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<any>> {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eedc57c341c432985cc575ad2ddf3d7f`);
  }
}