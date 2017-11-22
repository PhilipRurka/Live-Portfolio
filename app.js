'use strict';
/******************************/
/********** PACKAGES **********/
/******************************/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('express').Router();

/************************************/
/********** CONFIGURATIONS **********/
/************************************/
app.set('port', (process.env.PORT || 9000));

// Disabling for security purposes
app.disable('x-powered-by');

// Set & Use
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


/************************************/
/********** STATICS ROUTES **********/
/************************************/
app.use(express.static(__dirname + '/resources'));

/****************************/
/********** ROUTES **********/
/****************************/
// Render the index files when no resources path matches
router.get('/*', (req, res) => {
  res.sendFile('resources/index.html', {
    root: __dirname + '/../../../'
  });
});


/*****************************/
/********** EXPORTS **********/
/*****************************/
module.exports = router;


/**********************************/
/********** START SERVER **********/
/**********************************/
app.listen(app.get('port'), () => {
  console.log('Live Portfolio is running on port', app.get('port'));
  console.log('');
  console.log('--------------------------------');
  console.log('');
  console.log('╲╲╭━━━━╮╲╲');
  console.log('╭╮┃▆┈┈▆┃╭╮');
  console.log('┃╰┫▽▽▽▽┣╯┃');
  console.log('╰━┫△△△△┣━╯');
  console.log('╲╲┃┈┈┈┈┃╲╲');
  console.log('╲╲┃┈┏┓┈┃╲╲');
  console.log('▔▔╰━╯╰━╯▔▔');
  console.log('');
  console.log('_/﹋_                 ,___,');
  console.log('(҂`_´)                [O.o]');
  console.log('<,︻╦╤─ ҉ - - -       /)__)');
  console.log('_/﹋_)               -"--"-');
  console.log('');
  console.log('--------------------------------');
  console.log('');
});