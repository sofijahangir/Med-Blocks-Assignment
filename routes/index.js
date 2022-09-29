const express = require('express');

const router = express.Router();

const Patients = require('../models/patient');

router.get('/', async (req, res) => {
  try {
    const patients = await Patients.find({});
    res.render('index', { patients });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
