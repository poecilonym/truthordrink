var foo = {};
var truths = [];
var dares = [];
var baa = $.getJSON("data.json") 

baa.done(function(data) {});

baa.then(function(data) {
    console.log(data.truth);
    for( let i = 0; i < data.truth.length; i++) {
        truths.push(data.truth[i]);
    }
    for( let i = 0; i < data.dare.length; i++) {
        dares.push(data.dare[i]);
    }
});
/*
var jsonPromise = $.getJSON("url")

jsonPromise.done(function(data) {
    // success
    // do stuff with data
});

$.getJSON("data.json", function(data){
console.log(data.truth);
truths = data.truth;
var dares = data.dare;
});
*/
console.log(truths);
console.log(dares);
var index = 0;
function truth() {
    index = Math.floor(Math.random()*3);
    console.log(index);
    document.getElementById("answer").innerHTML = truths[index];
}
function dare() {
    index = Math.floor(Math.random()*3);
    console.log(index);
    document.getElementById("answer").innerHTML = dares[index];
}
