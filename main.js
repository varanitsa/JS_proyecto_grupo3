<<<<<<< HEAD

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

let number = 0;
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("resto").innerHTML=arr.map((item, i)=>`<li id="${i}">${item}</li>`);

});

const randomNumber = () =>{
if(resto.length>0){
number = Math.floor(Math.random()*resto.length);

document.getElementById("winner").innerHTML=resto[number];
resto.splice(number, 1);
document.getElementById("total").innerHTML=resto.map((item, i)=>`<li>${item}</li>`);
}else{
document.getElementById("winner").innerHTML="no hay";
}
}

const resetEver = () =>{
resto = [...arr];
document.getElementById("winner").innerHTML="";
document.getElementById("total").innerHTML=resto.map((item, i)=>`<li>${item}</li>`);

}
=======


    // $(document).on('click', 'input:checkbox', getCheckedBox, );

    // getCheckedBox();

    // function getCheckedBox() {

    //     let checkedBox = $.map($('input:checkbox:checked'),
    //         function(val, i) {
    //             
    //             return val.value;
    //         });
    //     console.clear();
    //     console.log(checkedBox);

    //     $(".selectall").click(function() {
    //         $(".participante").prop("checked", $(this).prop("checked"));
    //     });

        let student = [
            "Anna Girona",
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
            "Kristina"
        ];
        $(document).ready(function() {
        
            $('#start').click(function() {
              let winner = student[Math.floor(Math.random()*student.length)]
            console.log(winner)
        })
>>>>>>> 12590c6 (nothing only testing)
