angular.module('starter.controllers', [])

.controller('ShowsCtrl', ShowsCtrl)
    .controller('MoviesCtrl', MoviesCtrl)
    .controller('ShowCtrl', ShowCtrl);


ShowsCtrl.$inject = ['$scope', 'Series'];

/* @ngInject */
function ShowsCtrl($scope, Series) {
    var vm = this;
    $scope.shows = Series.query();
};

ShowCtrl.inject = ['$scope', '$stateParams', 'Show'];

function ShowCtrl($scope, $stateParams, Show) {
    var vm = this;
    $scope.show = Show.get({
        id: $stateParams.id
    });
};

MoviesCtrl.$inject = ['$scope', 'Movies'];

/* @ngInject */
function MoviesCtrl($scope, Movies) {
    var vm = this;
    $scope.movies = Movies.query();
};
