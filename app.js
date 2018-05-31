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
app.use('/', express.static(__dirname + '/resources'));

app.get('/', function(req, res, next) {
  res.sendFile('index.html', {
    root: __dirname + '/resources'
  });
});

app.get('/projects', function(req, res, next) {
  res.sendFile('index.html', {
    root: __dirname + '/resources'
  });
});

app.get('*',function (req, res) {
  res.redirect('/');
});


/********************************/
/********** MIDDLEWARE **********/
/********************************/
// Middleware for all files
app.use(require(__dirname + '/app/server/middlewares/logger.js'));



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

