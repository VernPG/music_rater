// .env in the config folder can be deleted once the folder has been deployed to Heroku
require("dotenv").config();
const APIKEY = process.env.APIKEY;

const requestRockUrl = `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=rock&api_key=${APIKEY}&format=json&limit=1000`
const request90sUrl = `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=90s&api_key=${APIKEY}&format=json&limit=1000`
const requestDiscoUrl = `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=${APIKEY}&format=json&limit=1000`

function getRandomNumber(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

async function getRockSong() {
  const result = await fetch(requestRockUrl)
  const data = await result.json()

  console.log(data)

  const random = getRandomNumber(0, 999);
  const randomSong = data.tracks.track[random]
  console.log(randomSong)
  return randomSong;
}

async function get90sSong() {
  const result = await fetch(request90sUrl)
  const data = await result.json()

  console.log(data)

  const random = getRandomNumber(0, 999);
  const randomSong = data.tracks.track[random]
  return randomSong
}

async function getDiscoSong() {
  const result = await fetch(requestDiscoUrl)
  const data = await result.json()

  console.log(data)

  const random = getRandomNumber(0, 999);
  const randomSong = data.tracks.track[random]
  return randomSong;
}

//exports getSong function
module.exports = {getRockSong, get90sSong, getDiscoSong} 
// get this page to do something with the information...
getRockSong()