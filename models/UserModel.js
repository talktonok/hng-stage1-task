const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
  {
    slackUsername: { type: String},
    backend: { type: Boolean},
    age: { type: Number},
    bio: { type: String}

    //{ "slackUsername": String, "backend": Boolean, "age": Integer, "bio": String }
  }
);

const company = mongoose.model('User', userSchema);
module.exports = company;
