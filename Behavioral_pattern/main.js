'use strict'

var data = {name:'task One ',
			priorities:1,
			user:'aaa',
			completed:false,
			projects:'project'};

var notificationService = require('./NotificationService');
var loggingService= require('./LoggingService');
var auditingService= require('./AuditingService');
var ObservableTask = require('./ObservableTask');

var task = new ObservableTask(data);

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

task.addObserver(not.update);
task.addObserver(ls.update);
task.addObserver(audit.update);

task.save();

task.removeObserver(audit.update);
task.save();
//console.log(task);