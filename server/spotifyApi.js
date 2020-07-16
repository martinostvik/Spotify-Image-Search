const axios = require("axios");
const qs = require('querystring');
require('dotenv').config()

const authUrl = 'https://accounts.spotify.com/api/token';
const client_id = process.env['SPOTIFY_CLIENT_ID'];
const client_secret = process.env['SPOTIFY_CLIENT_SECRET'];

const axOp = {
  headers: {
    'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

const reqBody = qs.stringify({ grant_type: 'client_credentials' });

const getUserToken = async () => {
  const res = await axios.post(authUrl, reqBody, axOp);
  return res.data.access_token;
}

const getArtistId = async (name, token) => {
  const query = name.replace(' ', '+')
  const artistUrl = `https://api.spotify.com/v1/search?query=${query}&offset=0&limit=20&type=artist`
  const options = { headers: { 'Authorization': 'Bearer ' + token } }
  const res = (await axios.get(artistUrl, options)).data.artists.items[0];
  return res ? {id: res.id, name: res.name} : {id: false};
}

const getUri = (tracks) => {
  let result = []
  tracks.forEach(track => {
    const embeded = track['external_urls'].spotify.replace('/track/', '/embed/track/')
    result.push(embeded)
  });
  return result;
}

const getArtistData = async (id, token) => {
  const artistUrl = `https://api.spotify.com/v1/artists/${id}/top-tracks?market=no`;
  const options = { headers: { 'Authorization': 'Bearer ' + token } }
  const res = await axios.get(artistUrl, options);
  return getUri(res.data.tracks);
}

const getTracks = async (name) => {
  const token = await getUserToken();
  const artist = await getArtistId(name, token);
  const tracks = artist.id ? await getArtistData(artist.id, token) : false;
  return { name: artist.name, tracks };
}

module.exports.getTracks = getTracks;
