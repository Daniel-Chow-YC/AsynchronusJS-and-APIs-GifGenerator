import apiKey from './config.js';

const img = document.querySelector('img');

fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=kobe`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    })
    .catch(function() {
      alert("No Gif could be found");
    })
   


