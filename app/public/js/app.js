var app = angular.module("notesApp", []);

app.controller("NotesController", function($http) {

    thisCtrl = this;

    $http.get('/notes').then(function(response) {
        thisCtrl.notes = response.data.notes;
    });
});
