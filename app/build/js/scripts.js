var app=angular.module("notesApp",[]);app.controller("MainController",["$http","$scope",function(a,b){b.getNotes=function(){a.get("/notes").then(function(a){b.notes=a.data.notes})},b.openNewNoteForm=function(){b.openForm=!0},b.closeNewNoteForm=function(){b.openForm=!1},b.discard=function(){b.closeNewNoteForm()},b.submit=function(){var c={note:{title:b.noteTitle,text:b.noteText,date:new Date}};a.post("/note",c).then(function(a){b.getNotes(),b.closeNewNoteForm()})},b.openForm=!1,b.getNotes()}]);