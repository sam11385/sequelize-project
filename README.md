# Steps for project:

- Create github repo
- npm init
- npm install express (our server)
- npm install sequelize (communicate with database)
- npm install pg pg-hstore

- run sequelize commands for db connection: "sequelize init"
- update sequelize config to point to your database
- create models for album, track, and artist tables with sequelize commands "sequelize model:generate --name album \
  --attributes album_name:string,album_year:string,artist_id:string"
- run "sequelize db:migrate" - migrations essentially run our sql commands

- so far:
  ...we have created our git repo project,
  ....installed necessary tools:
  ....NPM, express, sequelize
  ...created three models for our database

- create files: create-album.js, create-artist.js, create-track.js
