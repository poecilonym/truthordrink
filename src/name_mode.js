//let names = [];
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);



let list = urlParams.get('names');
console.log(list);
list = $.parseJSON(list);
console.log(list);

const naming = urlParams.get('naming');

const check_url = () => {
    console.log("checking url ...");
    const check_queryString = window.location.search;
    const check_urlParams = new URLSearchParams(check_queryString);

    let link = "name_mode.html?naming=";
    let send_new = false;
    let check_names = check_urlParams.get('names');
    let check_naming = check_urlParams.get('naming');
    console.log(check_naming);
    if(check_naming == "" || check_naming == null) {
        send_new = true;
        link = link.concat("true");
        console.log("fuck naming");
    }
    else {
        link = link.concat(check_naming);
    }
    link = link.concat("&names=");

    if (check_names == "" || check_names == null) {
        send_new = true;
        link = link.concat("[]");
        console.log("fuck names");
    }
    else {
        link = link.concat(check_names);
    }

    if(send_new) {        
        window.location.href = link;
    }
}

const spec_name = () => {
    if(naming == "true") {
        console.log("naming mode");
        let buttonelement = document.getElementById("button_output");
        buttonelement.remove();
    }
    else {
        document.getElementById("addnames").remove();
    }
}

let name = "";
let idx = -1;
let lastindex = -2;

const rand_name = () => {
    lastindex = idx;
    while(true) {
       idx = Math.floor(Math.random() * list.length);
        if(idx != lastindex || list.length <= 1) {
            break;
        }
    }

    
    name = list[idx];
    document.getElementById("name").innerHTML = name; 
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

const add_name = () => {
    let inpt_name = document.getElementById("name").value;
    if(inpt_name=="") {
        document.getElementById("err").innerHTML = "Please enter a name with at least one letter";
    }
    list.push(inpt_name);

    let link = "name_mode.html";
    link = link.concat("?", "naming", "=", "true", "&names=[\"", list[0], "\"");
    for(let i = 1; i < list.length; i++) {
        link = link.concat(",\"", list[i], "\"");
    }
    link = link.concat("]");
    console.log(link);
    window.location.href = link;
}
    
const start_game =() => {
    if(list.length == 0) {
        document.getElementById("err").innerHTML = "Please enter at least one name";
        return;
    }
    let link = "name_mode.html";
    link = link.concat("?", "naming", "=", "false", "&names=[\"", list[0], "\"");
    for(let i = 1; i < list.length; i++) {
        link = link.concat(",\"", list[i], "\"");
    }
    link = link.concat("]");
    console.log(link);
    window.location.href = link;
    //window.location.replace(link);
}
