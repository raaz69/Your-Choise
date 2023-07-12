const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
  "Item Name": String,
  "Item Color": String,
  "Item Brand": String,
  "Item Description": String,
  "Item Image": String,
});


module.exports = mongoose.model('Item', ItemSchema);