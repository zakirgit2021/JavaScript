/* let helloWorld = function(name){
    return `Your name is ${name}`
}
console.log(helloWorld('hasan'))
 */

/* const HelloWorld= (name) => `Hey there ${name} !`

console.log(HelloWorld('Hasan')) */

const arr= [{
    title: 'A',
    done: true,
},

{
    title:'B' ,
    done: true,
},

{
    title: 'C',
    done: true,
},
{
    title: 'D',
    done: false,
},
{
    title: 'E',
    done: false,
},
{
    title: 'F',
    done: false,
}]

const returnValue = arr.filter( (todo) => todo.done === false )

const printValue = returnValue.forEach(element => 
    console.log (element.title)
    
);