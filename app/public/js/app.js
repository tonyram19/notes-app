var app = angular.module("notesApp", []);

app.controller("MainController", ['$http', '$scope', function($http, $scope) {

    $scope.getNotes = function() {
        $http.get('/notes').then(function(response) {
            $scope.notes = response.data.notes;
        });
    };

    $scope.openNewNoteForm = function() {
        $scope.openForm = true;
    };

    $scope.closeNewNoteForm = function() {
        $scope.openForm = false;
    };

    $scope.submit = function() {

        var newNote = {
        "note":
            {
                "title": $scope.noteTitle,
                "text": $scope.noteText,
                "date": new Date()
            }
        };

        $http.post("/note", newNote).then(function(response) {
            $scope.getNotes();
            $scope.closeNewNoteForm();
            $scope.newNoteForm.$SetPristine();
        });

    };

    $scope.openForm = false;
    $scope.getNotes();

}]);
