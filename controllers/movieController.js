app.controller("movieController", function ($scope, $state, $stateParams, movieService, userService, $http) {
  // Get all movies
  $scope.movies = movieService.getMovies();
  $scope.movieCard = false;
  $scope.resultError = false;
  var pageNumber = 1;
  $scope.pageNumbers = false;
  $scope.numPages = 0;
  $scope.currentUser = userService.returnUser();
  $scope.users = userService.getUsers();

  // Next page of movie results
  $scope.nextMovies = function () {

    if (pageNumber < $scope.numPages) {
      $scope.showMovies(++pageNumber);
      console.log(pageNumber);
    }
  }

  // Previous page of movie results
  $scope.previousMovies = function () {
    if (pageNumber > 1) {
      $scope.showMovies(--pageNumber);
      console.log(pageNumber);
    }
  }

  // Queries the API for movie search results
  $scope.showMovies = function (pNumber) {

    console.log($scope.searchTitle);
    pageNumber = pNumber;
    console.log(pageNumber);
    $http.get(`http://www.omdbapi.com/?s=${$scope.searchTitle}&y=${$scope.searchYear}&type=movie&page=${pageNumber}&apikey=3c55883c`)
      .then(function (response) {
        console.log(response);

        $scope.movieResults = response.data.Search;
        $scope.numPages = Math.ceil(response.data.totalResults / 10);
        console.log($scope.movieResults);
        $scope.pageNumbers = true;

      }, function (error) {

        console.log(error);
        console.log("Movie Not Found!");
        $scope.movieCard = false;
        $scope.resultError = true;
        $scope.pageNumbers = false;

      })
  }

  // Views a user's movie
  $scope.viewMovie = function (movie) {
    console.log(movie);
    movieService.viewMovie(movie);
  }



  // Views all the movies in either a search or user's profile
  $scope.viewMovies = function () {
    console.log($scope.movies);
    movieService.viewMovies($scope.movies);
  }

  // Add a movie to the user's movie list
  $scope.addMovie = function (movie) {
    console.log("adding movie");
    console.log($scope.currentUser);
    console.log(movie);
    userService.addMovieToUser(movie);
  }
})