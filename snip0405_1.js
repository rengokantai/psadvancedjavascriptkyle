/**
 * Created by Hernan Y.Ke on 4/12/15.
 */


function Foo(who){
    this.me =who;
}

Foo.prototype.identify =function(){
    return "I am " +this.me;
};


function Bat(who){
    Foo.call(this.who);
}


Bar.prorotype=Object.create(Foo.prototype);


Bar.prototype.speak =function(){
    alert("Hello ," +this.identify()+".");
};


var b1= new Bar("b1");
var b2=new Bar("b2");

b1.speak();
b2.speak();