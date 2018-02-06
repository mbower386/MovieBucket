app.service("movieService", function ($state, $http) {
  var _movieId = 0;
  var _currentMovie = null;
  var _movieList = [];
  var _results = false;

  var Movie = function (id, imdbId) {
    this.id = id;
    this.imdbId = imdbId;
  }

  // Get all movies
  this.getMovies = function () {
    return _movieList;
  }

  // Get one movie by imdbID
  this.getMovieById = function (id) {
    if (id == "" || id == undefined || id == null) {
      var movie = {
        id: "",
        imdbId: "",

      }
      return movie;
    }
    else {
      for (var i = 0; i < _movieList.length; i++) {
        if (_movieList[i].id == id) {
          return _movieList[i];
        }
      }
    }
  }

  // Views the user's movie
  this.viewMovie = function (movie) {
    $http.get(`http://www.omdbapi.com/?i=${movie}&plot=full&apikey=`)
      .then(function (response) {
        console.log(response);
        _currentMovie = response.data;
        console.log(_currentMovie);
        $state.go("movie");
      }, function (error) {

      })
  }


  // Views the movies in the list or search
  this.viewMovies = function (movies) {
    _movieList = movies;
    $state.go("movies");
  }

  this.displayMovie = function () {
    return _currentMovie;
  }
})