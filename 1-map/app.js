'use strict';
const users= [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 1, name: 'Вася'}
];
const userId=users.map(user => user.id)
let setId = new Set(userId);
let idArr = Array.from(setId);
let uniqueUser=idArr.map(id => {
  return users.find(user => user.id === id)});      
console.log(uniqueUser);