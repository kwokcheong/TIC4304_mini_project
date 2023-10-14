const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const db = require('./models');

app.use(express.json());

// CORS middleware is used to configure your API to allow requests from other domains or to restrict access.
app.use(cors());

// UrlencodedParser is used to parse data coming from HTML form submissions
app.use(bodyParser.urlencoded({ extended: true }));



const apiRouter = require('./routes/ApiRouter');
app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.json({ data: 'Hello world' });
});

app.listen(3001, () => {
  console.log('Listening on port 3001');
});