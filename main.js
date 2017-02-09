var Task = require('./task');

var repofactory = require('./repoFactory');

var taskp = repofactory.getRepo('task');
var Userr = repofactory.getRepo('user');

taskp.get();
Userr.save();

/// Repo.save();
// Repo.update(); 

var task1 = new Task('Constructor');
var task2 = new Task('modules');
var task3 = new Task('singleton');
var task4 = new Task('prototype');

task1.complete();
task2.update();
task3.save();
task4.save();
