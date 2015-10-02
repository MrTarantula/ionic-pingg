angular.module('starter.services', ['ngResource'])

.factory('Show', ['$resource',
    function ($resource) {
        return $resource(
            'http://ryant.duckdns.org:4001/api/series/:id?apikey=fea7b96326e14081ba8b580bfea6d8d2'
        );
    }
])

.factory('Series', ['$resource',
    function ($resource) {
        return $resource(
            'http://ryant.duckdns.org:4001/api/series/?page=1&sortKey=title&sortDir=desc&apikey=fea7b96326e14081ba8b580bfea6d8d2'
        );
                        }
                       ])

.factory('Movies', ['$resource',
    function ($resource) {
        return $resource(
            'http://ryant.duckdns.org:4002/api/e11bc16628a04b1687dbc9c7330fd268/movie.list'
        );
                        }
                       ]);
