import apiKey from './config.js';

const img = document.querySelector('img');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=foDeMsQyPkE4t1hd1XcfUutg14uRHLoo&s=kobe', {mode: 'cors'})
    .then(function(response) {
      console.log(response.json());
    });



