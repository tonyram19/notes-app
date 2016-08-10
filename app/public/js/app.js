var app = angular.module("notesApp", []);

app.directive("notes", ['$http', function($http) {
    return {
        restrict: 'E',
        templateUrl: '../views/notes.html',
        controller: function($http) {
            thisCtrl = this;

            $http.get('/notes').then(function(response) {
                thisCtrl.notes = response.data.notes;
            });


        },
        controllerAs: 'notes'
    };
}]);

app.directive("newNoteForm", ['$http', function($http) {
    return {
        restrict: 'E',
        templateUrl: '../views/new-note-form.html',
        controller: function($scope) {
            this.submit = function() {
                this.formClosed = true;

                this.newNote = {
                "note":
                    {
                        "title": $scope.noteTitle,
                        "text": $scope.noteText,
                        "date": new Date()
                    }
                };

                this.closeForm = function() {
                    this.formClosed = true;
                };

                var thisCtrl = this;
                /*$http.post("/note", this.newNote).success(function(response) {
                    thisCtrl.closeForm();
                });
*/
                var request = new XMLHttpRequest();

                request.onreadystatechange = function() {
                  if (request.readyState == 4 && request.status == 200) {
                    thisCtrl.closeForm();
                    console.log(thisCtrl.formClosed);
                  }
                };
request.open("POST", "/note", true);
request.setRequestHeader("Content-type", "application/json");

                request.send(JSON.stringify(this.newNote));

            };
        },
        controllerAs: 'newNoteForm'
    };
}]);

app.directive("newNoteButton", function() {
    return {
        restrict: 'E',
        templateUrl: '../views/new-note-button.html',
        controller: function() {
            this.openForm = false;

            this.openNewNoteForm = function() {
                this.openForm = true;
            };

            this.closeNewNoteForm = function() {
                this.openForm = false;
            };
        },
        controllerAs: 'newNoteButton'
    };
});
