const express = require('express');
const app = express();
const models = require('./models');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let trackName = '';
let albumId = '';
let runtimeSeconds = '';

readline.question('Track name?\n', nameOfTrack => {
  readline.question('Album Id?\n', idOfAlbum => {
    readline.question('Duration of song in seconds?\n', lenOfSong => {
      trackName = nameOfTrack;
      albumId = idOfAlbum;
      runtimeSeconds = lenOfSong;

      models.track
        .create({
          track_name: trackName,
          track_time: runtimeSeconds,
          album_id: albumId
        })
        .then(function(track) {
          console.log(`Successfully created ${trackName}`);
        });

      readline.close();
    });
  });
});
