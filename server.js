const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const patientRouter = require('./routes/patient');
const indexRouter = require('./routes/index');

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Database
mongoose.connect('mongodb://mongo_db:27017/medblocks', {
  useNewUrlParser: true,
});
mongoose.connection
  .once('open', function () {
    console.log('Database connected Successfully');
  })
  .on('error', function (err) {
    console.log('Error', err);
  });

// Set view engine
app.set('view engine', 'ejs');

app.use(express.static('views'));

// app.get('/', (req, res) => {
//   // res.send('Hello World!');
//   res.render('index');
// });
app.use('/', indexRouter);
app.use('/', patientRouter);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
