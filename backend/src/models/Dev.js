 const mongoose = require('mongoose');
 const PointSchema = require('./utils/PointSchema');

 const devSchema = mongoose.Schema({
    name: String,
    github_username: String,
    boi: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
 }); //devSchema é uma entidade 

 module.exports = mongoose.model('Dev', devSchema);