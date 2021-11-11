$(document).ready(function() {

    // $(document).on('click', 'input:checkbox', getCheckedBox, );

    // getCheckedBox();

    // function getCheckedBox() {

    //     let checkedBox = $.map($('input:checkbox:checked'),
    //         function(val, i) {
    //             t
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

        $("#start").click(function() {
            let winner = student[Math.floor(Math.random() * student.length)];
            console.log(winner)
<<<<<<< HEAD
            for (i=0; i&lt;Total; i++) {
                student = Math.floor(Math.random()*(listado.length));
                seleccion = participante[aleatorio];
                trace(seleccion);
                listado.splice(aleatorio, 1);
                }
=======
>>>>>>> e3fb30fdece528aec95786907fb2b73a96b33cc3
        })

        $("#reset").click(function() {

        })

    }





});