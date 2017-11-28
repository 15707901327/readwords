var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animalSchema = new Schema({
    name: String,
    type: String,
    tags: { type: [String], index: true } // field level
});

animalSchema.index({ name: 1, type: -1 });