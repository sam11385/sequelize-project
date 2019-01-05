'use strict';
module.exports = (sequelize, DataTypes) => {
  const album = sequelize.define('album', {
    album_name: DataTypes.STRING,
    album_year: DataTypes.STRING,
    artist_id: DataTypes.STRING
  }, {});
  album.associate = function(models) {
    // associations can be defined here
  };
  return album;
};