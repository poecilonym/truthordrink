let foo = {};
let kingscups = [];
let baa = $.getJSON(filename)

baa.done(data => { });

baa.then(data => {
    console.log(data.kingscup);
    for (let i = 0; i < data.kingscup.length; i++) {
        kingscups.push(data.kingscup[i]);
    }
});

console.log(kingscups);

let index = 0;
const kingscup = () => {
    index = Math.floor(Math.random() * kingscups.length);
    console.log(index);
    document.getElementById("answer").innerHTML = kingscups[index];
}

