var Task = function(data){
	this.name = data.name;
	this.priority = data.priority;
	this.user = data.user;
	this.completed = data.completed;
	this.completeddate = data.completeddate;
}

var TaskService = function() {
	return{
		completed: function (task){
			task.completed=true;
			console.log('completed task :' + task.name);
		},
		setCompleteDate: function(task){
			task.completeddate='02/06/2017';
			console.log('completed date :' + task.completeddate);	
		},
		notifyCompletion: function(task){
			console.log('Notifying ' + task.user + 'of the completion of the task ' + task.name);
		},
		save: function(task){
			console.log('Save the task ' + task.name);	
		}
	}
}();

var TaskServiceWrapper = function() {

	var completeAndNotify = function(task) {
		
		TaskService.completed(myTask);
		if (myTask.completed == true) {
			TaskService.setCompleteDate(myTask);
			TaskService.notifyCompletion(myTask);
			TaskService.save(myTask);
		}
	}
	return {
		completeandNotify: completeAndNotify
	}
}();

var myTask = new Task ({name:'My Task',
priority:1,
user:'admin',
completed:false
});



TaskServiceWrapper.completeandNotify(myTask);

console.log(myTask);