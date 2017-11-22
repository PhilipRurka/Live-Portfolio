'use strict';
/******************************/
/********** PACKAGES **********/
/******************************/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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