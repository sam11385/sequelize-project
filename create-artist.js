const express = require('express');
const app = express();
const models = require('./models');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let artistName = '';

readline.question('Artist name?\n', nameOfArtist => {
  artistName = nameOfArtist;

  models.artist.create({ name: artistName }).then(function(artist) {
    console.log(`Successfully created ${artistName}`);
  });
  readline.close();
});
