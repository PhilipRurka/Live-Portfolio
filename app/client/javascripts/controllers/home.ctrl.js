'use strict';
app.controller('homeController',
function($scope, $timeout) {
  /*******************************/
  /********** VARIABLES **********/
  /*******************************/
  let imagesObject = [];
  let numberOfImages = 3;

  /*****************************************/
  /********** ROOTSCOPE VARIABLES **********/
  /*****************************************/


  /************************************/
  /*********** INIT FUNCTION **********/
  /************************************/
  for (let i = 0; i < numberOfImages; i++) {
    imagesObject.push('/images/personal/photo-' + i + '.jpg');
  }

  imageIteration();
  setInterval(imageIteration, 5000);


  /*******************************/
  /*********** WATCHERS **********/
  /*******************************/


  /*************************************/
  /********** SCOPE FUNCTIONS **********/
  /*************************************/


  /*******************************/
  /********** FUNCTIONS **********/
  /*******************************/
  function imageIteration() {
    numberOfImages ++;
    if(imagesObject.length <= numberOfImages) {
      numberOfImages = 0;
    }
    
    $timeout(function() {
      $scope.opacityOut = true;
    })
    $timeout(function() {
      $scope.currentImage = imagesObject[numberOfImages];
      $scope.opacityOut = false;
    }, 500)
  }


});
