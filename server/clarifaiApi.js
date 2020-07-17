const Clarifai = require('clarifai');

require('dotenv').config();

const app = new Clarifai.App({
 apiKey: process.env['CLARIFY_API_KEY']
});

async function searchCeleb(picture){
  let result;
  try {
    result = (await app.models.predict("e466caa0619f444ab97497640cefc4dc", picture)).outputs[0].data.regions[0].data.concepts[0];
  } catch(e) {
    return false;
  }
  return result.value > 0.3 ? result.name : false;
}

module.exports.searchCeleb = searchCeleb;
