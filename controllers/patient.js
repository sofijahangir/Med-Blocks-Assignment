const Patient = require('../models/patient');

const addPatient = async (req, res) => {
  const { firstName, lastName, gender, phone, dob } = req.body;

  // convert 2020-12-12 to Date
  const dateOfBirth = new Date(dob);

  // console.log(req.body);
  // console.log(dateOfBirth);
  // First name is required
  if (!firstName) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a first name',
    });
  }
  if (!gender) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a gender',
    });
  }
  // if phone number is provided then it must be a number of 10 digits
  if (phone && phone.length !== 10) {
    return res.status(400).json({
      success: false,
      error: 'Phone number must be 10 digits',
    });
  }

  // console.log('Hello Oroduct');

  const patient = new Patient({
    firstName,
    lastName,
    gender,
    phone,
    dateOfBirth,
  });

  try {
    await patient.save();
    res.status(201).redirect('/');
  } catch (error) {
    res.status(400).send(error);
  }
};

const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find({});
    // remove time from dob and send only date
    patients.forEach((patient) => {
      patient.dateOfBirth = patient.dateOfBirth.toISOString().split('T')[0];
    });
    res.status(200).json(patients);

    // res.render('productMaster', { productList: products });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { addPatient, getPatients };
