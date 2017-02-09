
var usrrepo = (function() {
    var sum = 0;

     var get = function() {
          console.log('user Get function');
             sum = sum +1;
          return sum;
     };
    var save= function() {
            console.log('user save function');
            sum = sum -1 ;
            return sum;
        };

    var update= function() {
            console.log('user update function');
            sum = 0;
            return sum;
        };

    return {
        get:get,
        save:save,
        update:update
    }
}());

module.exports=usrrepo;
