var auditingService =  function(){
	var message = 'auditing';
	
	this.update = function(task) {
		console.log(message + ':' + task.user + ' for task ' + task.name );
	}
};
module.exports=auditingService;	