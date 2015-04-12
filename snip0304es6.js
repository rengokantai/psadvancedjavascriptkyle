/**
 * Created by Hernan Y.Ke on 4/11/15.
 */

// foo.js

var o={bar:"bar"};

export function bar(){
    return o.bar;
}



// another js file


import bar from "foo";          //partial stuff
bar(); //"bar"

module foo from "foo";      //import whole thing,this syntax might be rejected later
foo.bar();  // "bar"