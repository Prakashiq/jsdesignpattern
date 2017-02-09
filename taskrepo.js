var repo = (function() {
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
        console.log('from Task Repo!!');  
    return {
        get:get,
        save:save,
        update:update
    }



	// return {
	// 	get:function() {
	// 		 console.log('from Get function');
 //             sum = sum +1;
	// 		 return sum;
	// 	},
 //        save:function() {
 //            console.log('save function');
 //            sum = sum -1 ;
 //            return sum;
 //        },
 //        update:function() {
 //            console.log('update function');
 //            sum = 0;
 //            return sum;
 //        }
	// }


}());

module.exports=repo;


// var modularpattern = (function() {
//     // your module code goes here
//     var sum = 0 ;

//     return {
//         add:function() {
//             sum = sum + 1;
//             return sum;
//         },
//         reset:function() {
//             return sum = 0;    
//         }  
//     }   
// }());

// module.exports=modularpattern;