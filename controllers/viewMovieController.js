app.controller("viewMovieController", function ($scope, $state, $stateParams, movieService, userService, $http) {
  $scope.currentUser = userService.returnUser();
  $scope.currentMovie = movieService.displayMovie();
  console.log($scope.currentMovie);
})