
function getComputerChoice(){

    let number = Math.random() * 15;

    if(number >= 5){
        return 'paper';
    }
    else if(number >= 6 && number <= 10){
        return 'scissors'
    }
    else{
        return 'rock';
    }
}

function playRound(player, computer){

    if(player.toLowerCase === 'rock' && computer.toLowerCase === 'paper'){
        return console.log('Computer wins!');
    }
    else if(player.toLowerCase === 'scissors' && computer.toLowerCase === 'rock'){
        return console.log('Computer wins!');
    }
    else if(player.toLowerCase === 'paper' && computer.toLowerCase === 'scissors'){
        return console.log('Computer wins!');
    }
    else if(player.toLowerCase === 'paper' && computer.toLowerCase === 'rock'){
        return console.log('Player wins!')
    }
    else if(player.toLowerCase === 'rock' && computer.toLowerCase === 'scissors'){
        return console.log('Player wins!');
    }
    else{
        return console.log('Player wins!');
    }

}

const player = prompt('Enter choice:');

const computer = getComputerChoice();

console.log(player, computer);

function game(){

    for(i = 0; i < 4; i++){
        playRound();
    }

}