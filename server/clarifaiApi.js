const Clarifai = require('clarifai');

require('dotenv').config();

const app = new Clarifai.App({
 apiKey: process.env['CLARIFY_API_KEY']
});

async function searchCeleb(picture){
  let result;
  try {
    result = (await app.models.predict("e466caa0619f444ab97497640cefc4dc", picture)).outputs[0].data.regions[0].data.concepts[0];
    console.log(result.name);
  } catch(e) {
    result = e;
    console.log('This is response', e.response);
  }
  return result.value > 0.7 ? result.name : result.name;
}

module.exports.searchCeleb = searchCeleb;
