/* const num = [1,2,4,5,6,7]

for (let index = 0 ; index < num.length ; index++){
    console.log( num[index]);
} */

const myTodos = []

myTodos.push ('Buy Bread')
myTodos.push ('Create and website')
myTodos.push ('Deploy a Job')

myTodos.forEach(function(todo, index){
        console.log(`your task no. ${index+1} is ${todo}`);

})