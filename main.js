$(document).ready(function() {

    $(document).on('click', 'input:checkbox', getCheckedBox, );

    getCheckedBox();

    function getCheckedBox() {

        let checkedBox = $.map($('input:checkbox:checked'),
            function(val, i) {
                t
                return val.value;
            });
        console.clear();
        console.log(checkedBox);

        $(".selectall").click(function() {
            $(".participante").prop("checked", $(this).prop("checked"));
        });

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
            for (i=0; i&lt;Total; i++) {
                aleatorio = Math.floor(Math.random()*(listado.length));
                seleccion = listado[aleatorio];
                trace(seleccion);
                listado.splice(aleatorio, 1);
                }
        })

        $("#reset").click(function() {

        })

    }





});