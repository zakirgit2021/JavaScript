/* let sayHello = function( firstname, lastname){

    console.log( `Happy to have you  ${firstname} ${lastname}`);
}
sayHello('hasan', 'bin') */

let adder_new = function(num1, num2){
    adder = num1+num2;
    return adder
}
/* let result = adder_new(3,5)
console.log(result); */

let my_multiplier = function(num1,num2){
    return num1*num2
}

let guestUser = function( name ='default', courseCount = 0){
    return 'Hello '+ name+ ' the courseCount is: '+ courseCount 
}

console.log(guestUser('hasan',1))