var app = angular.module("movieBucket", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/")

  $stateProvider
    // Home
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html"
    })

    // User
    .state("login", { //INDEX
      url: "/login",
      templateUrl: "./views/login.html",
      controller: "userController"
    })
    .state("userCreate", { // CREATE
      url: "/signup",
      templateUrl: "./views/users-form.html",
      controller: "userController"
    })
    .state("user", { // SHOW
      url: "/users/:id",
      templateUrl: "./views/user.html",
      controller: "userController"
    })
    
    // Movies
    .state("movies", { //INDEX
      url: "/movies",
      templateUrl: "./views/movies.html",
      controller: "movieController"
    })
    .state("movieCreate", { // CREATE
      url: "/movies/new",
      templateUrl: "./views/movies-form.html",
      controller: "movieController"
    })
    .state("movie", { // SHOW
      url: "/movie",
      templateUrl: "./views/movie.html",
      controller: "viewMovieController"
    })

    // Search
    .state("search", {
      url: "/search",
      templateUrl: "./views/search.html",
      controller: "movieController"
    })
}) 