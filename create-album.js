const express = require('express');
const app = express();
const models = require('./models');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let albumName = '';
let albumYear = '';
let artistId = '';

readline.question('Album name?\n', nameOfAlbum => {
  readline.question('Album year?\n', yearOfAlbum => {
    readline.question('Artist ID?\n', idOfArtist => {
      albumName = nameOfAlbum;
      albumYear = yearOfAlbum;
      artistId = idOfArtist;

      models.album
        .create({
          artist_id: artistId,
          album_name: albumName,
          album_year: albumYear
        })
        .then(function(album) {
          console.log(`Successfully created ${albumName}`);
        });

      readline.close();
    });
  });
});
