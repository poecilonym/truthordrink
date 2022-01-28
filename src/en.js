let foo = {};
let truths = [];
let dares = [];
let baa = $.getJSON("en_data.json")

baa.done(data => { });

baa.then(data => {
    console.log(data.truth);
    for (let i = 0; i < data.truth.length; i++) {
        truths.push(data.truth[i]);
    }
    for (let i = 0; i < data.dare.length; i++) {
        dares.push(data.dare[i]);
    }
});

console.log(truths);
console.log(dares);
let index = 0;
const truth = () => {
    index = Math.floor(Math.random() * truths.length);
    console.log(index);
    document.getElementById("answer").innerHTML = truths[index];
}
const dare = () => {
    index = Math.floor(Math.random() * dares.length);
    console.log(index);
    document.getElementById("answer").innerHTML = dares[index];
}
