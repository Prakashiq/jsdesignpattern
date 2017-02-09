'use strict'

var Task = function(data){
	this.flyweight = FlyweightFactory.get(data.projects, data.priorities, data.users, 
		data.completed );
	this.name = data.name;
	// this.priorities = data.priorities;
	// this.user = data.user;
	// this.completed = data.completed;
	// this.projects = data.projects;

}
function Flyweight(projects, priorities, users, completed )
{
	this.priorities = priorities;
	this.user = users;
	this.completed = completed;
	this.projects = projects;
}

var FlyweightFactory = function() {

	var flyweights = {};

	var get = function(projects, priorities, users, completed ) {
		if (!flyweights[projects + priorities + users + completed])
		{
			flyweights[projects + priorities + users + completed] = new 
			Flyweight(projects, priorities, users, completed);
		}
		return(flyweights[projects + priorities + users + completed]);
	};
	
	var getCount = function() {
		var count=0;
		for (var f in flyweights) count++;
		return count;
	};

	return {
		get: get,
		getCount: getCount
	};

}();

function TaskCollection() {
	var tasks = {};
	var count = 0;
	var add = function(data) {
		tasks[data.name] = new Task(data);
		count++;
	};

	var get = function(name) {
		return tasks[name];
	};

	var getCount = function() {
		return count;
	};

	return {
		add: add,
		get:get,
		getCount: getCount
	};
}

var tasks = new TaskCollection();

var projects = ['none','courses', 'training', 'project'];
var priorities = [1,2,3,4,5,6,7];
var users =['aaa','bbb','ccc','ddd','eee','fff','gggg','hhh'];
var completed = [true,false];

var initialMemory = process.memoryUsage().heapUsed;


for (var i=0; i<900000; i++) {
	tasks.add({
			name: 'task' + i,
			priorities: priorities[Math.floor((Math.random() * 7))],
			projects: projects[Math.floor((Math.random() * 4))],
			users: users[Math.floor((Math.random() * 8))],
			completed: completed[Math.floor((Math.random() * 2))]
	});
};

var afterMemory = process.memoryUsage().heapUsed;

console.log('used memory :' + afterMemory + " - " + initialMemory ) ;

console.log('used memory :' + ((afterMemory - initialMemory ) / 1000000));
//console.log('task count : ' + tasks.getCount() );
console.log('flyweight count : ' + FlyweightFactory.getCount() );