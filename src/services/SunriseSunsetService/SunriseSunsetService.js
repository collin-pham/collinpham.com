import axios from 'axios';
import moment from 'moment';

export class SunriseSunsetService {
  get = async (lat, lng) => {
    try {
      const data = (await axios.get(`https://api.sunrise-sunset.org/json?lat=${lat || 37.7509}&lng=${lng || -122.4153}&formatted=0`)).data;

      if (data.status !== 'OK') {
        throw new Error('Error fetching sunrise sunset data');
      }

      this.sunrise = moment(data.results.sunrise);
      this.solarNoon = moment(data.results.solar_noon);
      this.sunset = moment(data.results.sunset);
    } catch (err) {
      throw new Error(err);
    }
  }

  getSunrise = () => {
    return this.sunrise;
  }
  getSunset = () => {
    return this.sunset;
  }
  getSolarNoon = () => {
    return this.solarNoon;
  }
}
