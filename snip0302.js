/**
 * Created by Hernan Y.Ke on 4/11/15.
 */
for(var i=1;i<5;i++){
    (function(i) {
        setTimeout(function () {
            console.log("i " + i);
        }, i * 1000);
    })(i);
}
