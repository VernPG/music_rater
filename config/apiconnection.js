// .env in the config folder can be deleted once the folder has been deployed to Heroku
require("dotenv").config();
const PORT = process.env.PORT
const requestUrl = `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=rock&api_key=${process.env.APIKEY}&format=json&limit=1000`


function getRandomNumber(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

async function getSong() {
  const result = await fetch(requestUrl)
  const data = await result.json()

  console.log(data)

  const random = getRandomNumber(0, 999);
  // data.tracks.track because that's how the 3rd party api just works... I'm so sorry...
  const randomSong = data.tracks.track[random]
  return randomSong
}
//exports getSong function
module.exports = {getSong} 
// get this page to do something with the information...
