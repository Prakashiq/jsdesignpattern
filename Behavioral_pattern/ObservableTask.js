'use strict'
var Task = require('./task');
var ObserverList = require('./ObserverList');

var ObservableTask = function(data)
{
	Task.call(this, data);
	this.observer = new ObserverList();
};

ObservableTask.prototype.addObserver = function(observer) {
	this.observer.add(observer);
};

ObservableTask.prototype.notify = function(context) {
	var observerCount = this.observer.count();
	for(var i=0; i< observerCount; i++) {
		this.observer.get(i)(context);
	}
};

ObservableTask.prototype.save = function() {
		Task.prototype.save.call(this);

		this.notify(this);
};

ObservableTask.prototype.removeObserver = function (observer) {
	this.observer.removeAt(this.observer.indexOf(observer,0));
};

module.exports=ObservableTask;