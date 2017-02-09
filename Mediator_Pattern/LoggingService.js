var loggingService =  function(){
	var message = 'logging';
	
	this.update = function(task) {
		console.log(message + ':' + task.user + ' for task ' + task.name );
	}
};

module.exports=loggingService;	