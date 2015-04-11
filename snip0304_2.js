/**
 * Created by Hernan Y.Ke on 4/11/15.
 */
//modified module pattern

var foo =(function(){
    var publicAPI={
        bar:function(){
            publicAPI.baz();
        },
        baz:function(){
            console.log("baz");
        }
    };
    return publicAPI;
})();

foo.bar();