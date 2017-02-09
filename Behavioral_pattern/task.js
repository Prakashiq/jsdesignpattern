var Task = function(data){
	this.name = data.name;
	this.priorities = data.priorities;
	this.user = data.user;
	this.completed = data.completed;
	this.projects = data.projects;
};

Task.prototype.complete = function() {
	console.log('completed Task :'+ this.name);
	this.completed = true;
};


Task.prototype.save = function() {
	console.log('Save Task :'+ this.name);
	
};

module.exports=Task;