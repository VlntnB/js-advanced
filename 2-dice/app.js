'use strict';
const dices = ['d4','d6','d8','d8','d10','d12','d16','d20'];
function random (dice){
    const min = 1;
    if (dices.includes(dice) === true){
        let max = Number(dice.substring(1));   
        return Math.floor(Math.random()*(max-min+1)+min); 
    }
     return false;  
    }
console.log(random('d16'));