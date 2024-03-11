'use strict';
function random (dice){
    const diceAll = [
	{ name: 'd4', min: 1, max:4},
	{ name: 'd6', min: 1, max:6},
	{ name: 'd8', min: 1, max:8},
    { name: 'd10', min: 1, max:10},
    { name: 'd12', min: 1, max:12},
    { name: 'd16', min: 1, max:16},
    { name: 'd20', min: 1, max:20},
	];	
     const diceName = diceAll.map(diceAll => {
        return diceAll.name;
    });
    const diceMin = diceAll.map(diceAll => {
        return diceAll.min;
    });
  const diceMax = diceAll.map(diceAll => {
        return diceAll.max;
    }); 
    for (var i = 0; i < diceMin.length; i++){ 
    if (diceMin[i] === dice){
        return diceMin[i];}
    for (var j = 0; j < diceMax.length; j++){     
    if (diceMax[j] === dice){
     return diceMax[j];}
    for (var i = 0; i < diceName.length; i++){     
    if (diceName[i] === dice){
     return Math.floor(Math.random()*(diceMax[i]-diceMin[i]+1)+diceMin[i]);
    }
}
}
}
}
console.log(random('d20'));
