import axios from 'axios';

const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;

const baseURL = 'https://fantasy-premier-league-fpl-api.p.rapidapi.com/api/';

const headers = {
  'X-RapidAPI-Key': `${API_KEY}`,
  'X-RapidAPI-Host': 'fantasy-premier-league-fpl-api.p.rapidapi.com'
};

export const getClassicLeagueStandings = (leagueCode) => {
  const url = `leagues-classic/${leagueCode}/standings/`;
  return axios.get(baseURL + url, { headers });
};

export const getManagerUsersBasicInformation = (managerId) => {
  const url = `entry/${managerId}/`;
  return axios.get(baseURL + url, { headers });
};
