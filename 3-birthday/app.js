'use strict';
const birthday = '2011-03-12';
const birthdayDate = new Date(birthday);
const birthdaySec=birthdayDate.getTime();
const now = new Date();
const nowSec = now.getTime();
function validation(){
const difSec = 441806400000; /*14 лет в ms*/
    if (!birthdayDate){
        return false;
    }
    if ((nowSec-birthdaySec) < difSec){
        return false;
    }return true;
}
console.log(validation(birthdayDate));
