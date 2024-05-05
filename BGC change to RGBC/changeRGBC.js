let  first = document.getElementById('fInput');
let sec = document.getElementById('sInput');
let third = document.getElementById('thInput');

function findHex(){

let r = convert(first.value);
let g = convert(sec.value);
let b = convert(third.value);
let add = '#' +r+g+b;
let upper = add.toUpperCase();

document.getElementById('output').value=upper;
document.body.style.backgroundColor=upper;

function convert(rgb){
    let get = Number(rgb).toString(16);
    return get
}

document.getElementById('fInput').value="";
document.getElementById('sInput').value="";
document.getElementById('thInput').value="";


}