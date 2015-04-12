/**
 * Created by Hernan Y.Ke on 4/11/15.
 */
//modern module pattern using define

define("foo",function(){

    var o={bar:"bar"};

    return {
        bar:function(){
            console.log(o.bar);
        }
    };
});