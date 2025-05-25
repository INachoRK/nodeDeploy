const mongoose = require('mongoose');

const URI ='mongodb+srv://Nacho:Ug2lOBJvCFR0zmn7@2873441.eesayv0.mongodb.net/'

mongoose.connect(URI);

module.exports = mongoose;