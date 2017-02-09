
'use strict'
var Task = function(name)
{
	this.name=name;
	this.completed = false;
};

  Task.prototype.save = function(){
    console.log('saving Task ' + this.name);
  };
  
  Task.prototype.complete = function(){
    console.log( 'complete ' + this.name);
  };
  
Task.prototype.update = function(){
  console.log( 'update ' + this.name);

};

var task = new Task('Legacy');

task.save();
task.complete();

//Simple Decorator pattern : adding functionallity to the existing 
// object without changing the exisiting code 

urgentTask = new Task('urgent Task');

urgentTask.priority =2;
urgentTask.notify = function()
{
	console.log('notifying important ppl from ' + this.name);
}

urgentTask.save = function()
{
	this.notify();
	Task.prototype.save.call(this);
}

urgentTask.save();
//urgentTask.notify();
urgentTask.complete();
//module.exports=Task;


/// Other way 

var MostUrgentTasks = function(name) {
	Task.call(this,name);
	this.priority=1;
}

MostUrgentTasks.prototype = Object.create(Task.prototype);

MostUrgentTasks.prototype.raisealert = function()
{
	console.log('raisealert to important ppl from ' + this.name);
}


MostUrgentTasks.prototype.save = function()
{
	this.raisealert();
	Task.prototype.save.call(this);
}

var mut = new MostUrgentTasks('High priorityTask');
//console.log(MostUrgentTasks );
//console.log('----------------\n'+ mut );
mut.save();
mut.complete();