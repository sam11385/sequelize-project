'use strict';
module.exports = (sequelize, DataTypes) => {
  const track = sequelize.define('track', {
    track_name: DataTypes.STRING,
    track_time: DataTypes.STRING,
    album_id: DataTypes.STRING
  }, {});
  track.associate = function(models) {
    // associations can be defined here
  };
  return track;
};