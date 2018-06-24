'use strict';
app.controller('homeController',
function($scope, $timeout) {
  /*******************************/
  /********** VARIABLES **********/
  /*******************************/
  let numberOfImages = 3;

  /*****************************************/
  /********** ROOTSCOPE VARIABLES **********/
  /*****************************************/


  /************************************/
  /*********** INIT FUNCTION **********/
  /************************************/
  for (let i = 0; i < numberOfImages; i++) {
    var image = image || [];
    image.push('/images/personal/photo-' + i + '.jpg');
  }

  $scope.imagesObject = image;

  imageIteration(); setInterval(imageIteration, 5000);


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
    if($scope.imagesObject.length <= numberOfImages) {
      numberOfImages = 0;
    }
    
    $timeout(function() {
      $scope.opacityOut = true;
    })
    $timeout(function() {
      $scope.currentImage = $scope.imagesObject[numberOfImages];
      $scope.opacityOut = false;
    }, 500)
  }

});
