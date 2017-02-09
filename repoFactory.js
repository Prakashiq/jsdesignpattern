var repoFactory = function() {
	

	this.getRepo = function (repoType) {
			var taskrepo;
		if(repoType === 'task') {
			 taskrepo = require('./taskrepo');
		}
		if(repoType === 'user') {
			 taskrepo= require('./userrepo');
		}
		if(repoType === 'prj') {
			 taskrepo= require('./projectrepo');
		}
		return taskrepo;
	};	
};

module.exports = new repoFactory;