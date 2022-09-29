const express = require('express');

const router = express.Router();
const { addPatient } = require('../controllers/patient');

// router.post('/', addCategory, (req, res) => {
//   res.send('Category Added');
// });

router.post('/register', addPatient, (req, res) => {
  res.redirect('/productMaster');
});
// router.get('/getProducts', getProducts, (req, res) => {
//   res.redirect('/productMaster');
// });

// router.post('/editProduct/:id', editProduct, (req, res) => {
//   res.redirect('/prodMaster');
// });
// router.get('/deleteProduct/:id', deleteProduct);
module.exports = router;
