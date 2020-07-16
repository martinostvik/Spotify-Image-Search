const spotifyApi = require('./spotifyApi');
const clarifyApi = require('./clarifaiApi');
const express = require('express');
const multer  = require('multer')
const upload = multer()

const app = express()
const port = 4000



app.post('/artists', upload.single('file'), async function (req, res, next) {
  const image = req.file.buffer.toString('base64');
  const result = await clarifyApi.searchCeleb(image)
  if(result) {
    const topTracks = await spotifyApi.getTracks(result);
    res.write(JSON.stringify(topTracks));
  }
  res.end();
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))