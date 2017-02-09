'use strict'
var Task = require('./task');

var data = {name:'task One ',
			priorities:1,
			user:'Prakash',
			completed:false,
			projects:'project'};

var notificationService = require('./NotificationService');
var loggingService= require('./LoggingService');
var auditingService= require('./AuditingService');


//reliving module pattern
var mediator = (function(){
	var channels = {};
	var subscribe = function(channel, context, func){
		if(!mediator.channels[channel]) {
			mediator.channels[channel] = [];
		}
		mediator.channels[channel].push({
			context: context,
			func: func
		});
	};

	var publish = function(channel){
	
		if(!this.channels[channel]) {

			console.log('Nothing to publish');
			return false;
		}


		var args = Array.prototype.slice.call(arguments,1);

		for(var i=0; i< mediator.channels[channel].length; i++)
		{
			var sub = mediator.channels[channel][i];
			sub.func.apply(sub.context, args);
		}
	};

	return{
		channels : {},
		subscribe:subscribe,
		publish:publish
	};
}());

var task = new Task(data);

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

mediator.subscribe('complete', not, not.update);
mediator.subscribe('complete', ls, ls.update);
mediator.subscribe('complete', audit, audit.update);

task.complete = function() {
	mediator.publish('complete',this);
	Task.prototype.complete.call(this);
}

task.complete();
//console.log(task);