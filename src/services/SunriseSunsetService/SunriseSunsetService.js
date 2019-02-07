import axios from 'axios';
import moment from 'moment';

export class SunriseSunsetService {
  get = async (day = 0, lat = 37.7509, lng = -122.4153) => {
    try {
      const date = moment().add(day,'days').format('YYYY-MM-DD');
      const data = (await axios.get(this.makeRequestString(lat, lng, date))).data;

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
  makeRequestString = (lat, lng, date) => {
    return `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0&date=${date}`
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
