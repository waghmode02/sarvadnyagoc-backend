const mongoose = require('mongoose');
import dotenv from "dotenv"
dotenv.config({path:".env"});
const MONGODB_URI = process.env.URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

module.exports = mongoose;