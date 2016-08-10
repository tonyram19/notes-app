var app = angular.module("notesApp", []);

app.controller("NotesController", function($scope, $http) {
    $http.get("https://ramireztony.herokuapp.com/notes").then(function(response) {
        $scope.notes = response.data;
        console.log(response.data);
    });
});
