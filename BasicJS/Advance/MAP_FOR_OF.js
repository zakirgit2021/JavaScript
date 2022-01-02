var hasan ={
    name: 'hasan',
    age : 32,
    active: true

}

var zakir ={
    name: 'zakir',
    age : 31,
    active: true

}
var bin ={
    name: 'bin',
    age : 31,
    active: true

}

let users = new Map()


users.set('hasa', hasan)
users.set('zaki', zakir)
users.set('bi', bin)

/* console.log(users)
console.log(typeof(users)) */
/* 
for (const [key,value] of users.entries()) {
    console.log(key + ' =' + value.age)
    
    console.log(key + ' = ' + JSON.stringify(value.age))
} */
/* console.log(users.values())
users.forEach((value,key) => console.log(key + ' = ' + value.name) ) */


var arr = [['one', 1],['two', 2],['three', 3]]

var nmap = new Map(arr)
for (let [key, value] of nmap) {
    console.log(key + " = " + value);
    }