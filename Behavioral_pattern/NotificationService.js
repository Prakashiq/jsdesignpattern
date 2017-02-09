var notificationService =  function(task){
	var message = 'Notify';
	
	this.update = function(task) {
		console.log(message + ':' + task.user + ' for task ' + task.name );
	}
};
module.exports=notificationService;	