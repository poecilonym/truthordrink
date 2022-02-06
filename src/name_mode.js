let names = [];
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
let list = urlParams.get('wow');
console.log(list);
list = $.parseJSON(list);
console.log(list);

const naming = urlParams.get('naming');

if(naming == "true") {
    console.log("naming mode");
    let buttonelement = document.getElementById("truth");
}
else {
    document.getElementById("addnames").innerHTML = " ";
}

const rand_name = () => {
    document.getElementById("name").innerHTML = names[Math.floor(Math.random() * names.length)];
    truth_or_dare = Math.floor(Math.random() * 2);
    if (truth_or_dare == 0) {
        document.getElementById("req_name").innerHTML = "Truth:"
        truth();
    }
    else {
        document.getElementById("req_name").innerHTML = "Dare:"
        dare();
    }
}
