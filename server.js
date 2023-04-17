const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) throw err;
  console.log("connected");
  // Add your MongoDB-related code here
  // ...
  // Don't forget to close the MongoDB client when done
  // client.close();
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  console.log(`Listening To The Port http://localhost:${PORT}`);
});
