// src/services/tripService.js
import axios from 'axios';

// Free mock API endpoints
const MOCK_API_URL = 'https://mockapi.io/api/v1/trips';
const COUNTRIES_API = 'https://restcountries.com/v3.1/all';
const WEATHER_API = 'https://api.open-meteo.com/v1/forecast';
const CURRENCY_API = 'https://api.exchangerate-api.com/v4/latest/USD';

export default {
  // Get mock trip data
  async getTrips() {
    try {
      // In a real app, you would use your actual API
      // For demo purposes, we'll use mock data if the API fails
      const response = await axios.get(MOCK_API_URL);
      return response.data;
    } catch (error) {
      console.log('Using mock data instead of API');
      return this.getMockTrips();
    }
  },

  // Mock trip data
  getMockTrips() {
    return [
      {
        id: '1',
        destination: 'Paris, France',
        startDate: '2023-12-15',
        endDate: '2023-12-22',
        travelers: 2,
        status: 'active',
        budget: 1500,
        activities: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise']
      },
      {
        id: '2',
        destination: 'Tokyo, Japan',
        startDate: '2024-01-10',
        endDate: '2024-01-20',
        travelers: 1,
        status: 'upcoming',
        budget: 2000,
        activities: ['Shibuya Crossing', 'Tsukiji Market', 'Meiji Shrine']
      }
    ];
  },

  // Get country info (free API)
  async getCountryInfo(countryName) {
    try {
      const response = await axios.get(`${COUNTRIES_API}?name=${countryName}`);
      return response.data[0];
    } catch (error) {
      console.error('Error fetching country info:', error);
      return null;
    }
  },

  // Get weather forecast (free API)
  async getWeatherForecast(latitude, longitude) {
    try {
      const response = await axios.get(
        `${WEATHER_API}?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching weather:', error);
      return null;
    }
  },

  // Get currency rates (free API)
  async getCurrencyRates() {
    try {
      const response = await axios.get(CURRENCY_API);
      return response.data;
    } catch (error) {
      console.error('Error fetching currency rates:', error);
      return null;
    }
  }
};