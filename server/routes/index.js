
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home'});
});

/* GET About Us page. */
router.get('/activesurvey', function(req, res, next) {
  res.render('activesurvey', { title: 'ActiveSurvey'});
});

/* GET Projects page. */
router.get('/createsurvey', function(req, res, next) {
  res.render('createsurvey', { title: 'CreateSurvey'});
});


let indexController = require('../controllers/index');


module.exports = router;
