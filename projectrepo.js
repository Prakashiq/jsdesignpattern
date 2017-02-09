
var prjrepo = (function() {
    var sum = 0;

     var get = function() {
          console.log('from Get function');
             sum = sum +1;
          return sum;
     };
    var save= function() {
            console.log('save function');
            sum = sum -1 ;
            return sum;
        };

    var update= function() {
            console.log('update function');
            sum = 0;
            return sum;
        };

    return {
        get:get,
        save:save,
        update:update
    }
}());

module.exports=prjrepo;
