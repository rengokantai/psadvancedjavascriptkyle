/**
 * Created by Hernan Y.Ke on 4/11/15.
 */
//Classical modular pattern

var foo =(function(){

    var o={bar:"bar"};

    return{
        bar:function(){
            console.log(o.bar);
        }
    };
})();


foo.bar();