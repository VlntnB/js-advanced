'use strict';
const users= [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 1, name: 'Вася'}
];
const map = new Map();
const userData = users.map(user =>{
return map.set(`id:${user.id}`, `name: ${user.name}`);
});
const del = userData.find(users => users.id === users.id);
map.delete(del);
const uniqueUsers = [...map];
console.log(uniqueUsers);