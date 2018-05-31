'use strict';
/******************************/
/********** PACKAGES **********/
/******************************/
const router = require('express').Router();


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
