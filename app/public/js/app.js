var app = angular.module("notesApp", []);

app.directive("note", ['$http', function($http) {
    return {
        restrict: 'E',
        templateUrl: '../views/note.html',
        controller: function($http) {
            thisCtrl = this;

            $http.get('/notes').then(function(response) {
                thisCtrl.notes = response.data.notes;
            });
        },
        controllerAs: 'NoteCtrl'
    };
}]);
