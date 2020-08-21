import apiKey from './config.js';

const img = document.querySelector('img');

/* Using Promises */ 
// fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=kobe`, {mode: 'cors'})
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(response) {
//       img.src = response.data.images.original.url;
//     })
//     .catch(function() {
//       alert("No Gif could be found");
//     })


/* Using async and await */
async function getGifs() {
  try {
    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=kobe`, {mode: 'cors'});
    let gifData = await response.json()
    img.src = gifData.data.images.original.url;
  } catch(err) {
    alert("No Gif could be found");
  }
};


window.onload = getGifs();

