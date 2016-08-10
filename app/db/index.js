var fs = require('fs');
var path = require('path');
var notesDir = path.join(__dirname, 'notes');

function findAll () {
  return fs
    .readdirSync(notesDir)
    .map(function (fileName) {
      return JSON.parse(fs.readFileSync(path.join(notesDir, fileName)));
    });
}

function finById (id) {
  var fileName = fs
    .readdirSync(notesDir)
    .filter(function (fileName) {
      return fileName === String(id + '.json');
    })[0];
  if(fileName) {
    var jsonNote = fs.readFileSync(path.join(notesDir, fileName));
    return JSON.parse(jsonNote);
  } else {
    return false;
  }
}

function create (note) {
  note.id = lastId() + 1;
  var jsonNote = JSON.stringify(note);
  fs.writeFileSync(path.join(notesDir, note.id + '.json'), jsonNote);
  return note;
}

function lastId () {
  return fs
    .readdirSync(notesDir)
    .map(function (fileName) {
      return Number(fileName.split('.')[0]);
    })
    .sort(function (a, b) {
      return b > a;
    })[0];
}

module.exports = {
  findAll: findAll,
  finById: finById,
  create: create
};
