
function seleccionarCoder(listaDeCoders, position) {
    let elegida = listaDeCoders.splice(position,1)[0];
    
    return elegida;
}



$(document).ready(function () {

    let coderArray = ["Alexia", "Alisa", "Ana C.", "Anna G.", "Candy", "Carmen", "Desirée", "Faby", "Gabrielle", "Gràcia", "Helen", "Joana", "Judith", "Kristina", "Laura C.", "Laura M.", "Marisa", "Rosa", "Sandra", "Sara", "Sonia", "Tamara", "Valentina", "Yuliya"];
    let namesAlreadyPicked = [];
    let buttonToChooseCoders = $('.buttonToChooseCoders');
    let restartButton = $('.restartButton');
    let winnerSection = $('.winnerSection');
    let availableCoders = $('.availableCoders');

    function showCoders() {
        availableCoders.html(coderArray.map(coder => `<div>${coder}</div>`));
        restartButton.hide();
        
    }
    

    showCoders();

    function chooseCoder() {
        let position = Math.floor(Math.random() * coderArray.length);
        let winner = seleccionarCoder( coderArray, position);
        winnerSection.html(winner);  
        namesAlreadyPicked.push(winner);
        
        showCoders();
        if (coderArray.length === 0) {
            restartButton.show();
            buttonToChooseCoders.hide();
            winnerSection.empty();
        } 
    }
  
    function restart() {
        coderArray = namesAlreadyPicked.sort();
        namesAlreadyPicked = [];
        showCoders();
        buttonToChooseCoders.show();
    }

    buttonToChooseCoders.on("click", chooseCoder);
    restartButton.on("click", restart);

    $('#resetButton').on('click', function () {
        location.reload();
    })
 
})



function generateTeams() {
    document.getElementById("teams").innerHTML = "";
    let players = document.getElementById("players").value
    players = players.split(/(\r\n|\r|\n)/)
    players = players.filter(player => /[a-z]/i.test(player))
    const numTeams = Math.min(Number(document.getElementById("num-teams").value), players.length);
    for (i = 0; i < numTeams; i++) {
        const team = document.createElement("p")
        team.innerHTML = `Grupo ${i + 1}: `
        teams.appendChild(team)
    }
    let curTeam = 0;
    while (players.length > 0) {
        rndIndex = Math.floor(Math.random() * players.length)
        const player = players.splice(rndIndex, 1);
        const newTeam = document.getElementById("teams").getElementsByTagName("p")[curTeam];
        let playerText = document.createTextNode(` ${player},`);
        if (players.length < numTeams) {
            playerText = document.createTextNode(` ${player}`)
        }
        newTeam.appendChild(playerText);
        if (curTeam < numTeams - 1) {
            curTeam++
        } else {
            curTeam = 0;
        }
    }
}


$(document).ready(function() {
    $("button").click(function() {
        window.location.href='Bienvenida_Navidad.html'; 
        
    });
    
    
});
    
    
    
    
    



