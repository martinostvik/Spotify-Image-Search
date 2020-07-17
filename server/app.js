const spotifyApi = require('./spotifyApi');
const clarifyApi = require('./clarifaiApi');
const express = require('express');
const multer  = require('multer')
const upload = multer()

const app = express()
const port = 4000



app.post('/artists', upload.single('file'), async function (req, res) {
  const image = req.file.buffer.toString('base64');
  const result = await clarifyApi.searchCeleb(image)
  if(result) {
    const topTracks = await spotifyApi.getTracks(result);
    res.write(JSON.stringify(topTracks));
  } else {
    res.write(JSON.stringify({name: 'none', tracks: false}))
  }
  res.end();
});

app.listen(port, () => console.log(`Backend API listening at http://localhost:${port}`))