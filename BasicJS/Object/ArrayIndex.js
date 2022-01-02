/* const myTodos = ['Buy Bread', 'Go to Gym', 'Record videos']
console.log (myTodos.indexOf('Buy Bread')) */

const newTodos = [ {
    title: 'Buy Bread',
    isDone: false,
},

{
    title: 'hasan',
    isDone: false,
},

{
    title : 'work',
    isDone: true,
}]

/* const index = newTodos.findIndex(function(todo,index){
    return todo.isDone === true
})
console.log(index) */

const find = function(todo,ind){
     const index = todo.findIndex(function (todo,index){
         return todo.title.toLowerCase() === ind.toLowerCase()
     })
    console.log(todo[0])
    return todo[index]
        
}

let printValue = find(newTodos,'Hasan')
console.log(printValue)

