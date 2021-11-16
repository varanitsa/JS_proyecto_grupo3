
const arr = ["Anna Girona",
    "Sonia",
    "Desiree",
    "Alisa",
    "Alexia",
    "Ana Casas",
    "Candy",
    "Yuliya",
    "Carmen",
    "Faby",
    "Gabrielle",
    "Gracia",
    "Helen",
    "Joana",
    "Judith",
    "Laura Campos",
    "Laura Conteras",
    "Marisa",
    "Rosa",
    "Sandra",
    "Sara",
    "Tamara",
    "Valentina",
    "Kristina"];
      
 

function restoArray() {
let resto = ["Anna Girona",
    "Sonia",
    "Desiree",
    "Alisa",
    "Alexia",
    "Ana Casas",
    "Candy",
    "Yuliya",
    "Carmen",
    "Faby",
    "Gabrielle",
    "Gracia",
    "Helen",
    "Joana",
    "Judith",
    "Laura Campos",
    "Laura Conteras",
    "Marisa",
    "Rosa",
    "Sandra",
    "Sara",
    "Tamara",
    "Valentina",
    "Kristina"];
    
    resto.sort();
    document.getElementById("resto").innerHTML = resto.join(" ");
    restoArray();
}


let number = 0;
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("resto").innerHTML = arr.map((item, i) => restoArray());

});

const randomNumber = () => {
    if (resto.length > 0) {
        number = Math.floor(Math.random() * resto.length);

        document.getElementById("winner").innerHTML = resto[number];
        resto.splice(number, 1);
        document.getElementById("total").innerHTML = resto.map((item, i) => restoArray());
    } else {
        resto = [...arr];
    }
}

const resetEver = () =>{
resto = [...arr];
document.getElementById("winner").innerHTML="";
document.getElementById("total").innerHTML=resto.map((item, i)=>`<li>${item}</li>`);

}


  
