// variable declaration
function getTotal (){

const ADFEE = 50.00;
const TICPR = 250.00;
let quati = document.getElementById("quty").value;
let subto = quati * TICPR;
let total = subto * ADFEE;

//display answer

document.getElementById("suTotal").value=subto.toFixed(0);

document.getElementById("tota").value=total.toFixed(0);

}