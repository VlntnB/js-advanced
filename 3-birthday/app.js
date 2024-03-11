'use strict';
const birthday = '2017-01-02';
const birthdayDate = new Date(birthday);
const now = new Date();
function validation(){
    const birthdayYear=birthdayDate.getFullYear();
    const nowYear=now.getFullYear();
    if (!birthdayYear){
        return false;
    }
    if ((Number(nowYear)-Number(birthdayYear)) < 14){
        return false;
    }return true;
}
console.log(validation(birthdayDate))
