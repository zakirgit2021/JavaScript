localStorage.setItem('name','hasan');
localStorage.setItem('bin','hasan');
//var  newName = localStorage.getItem('name')
localStorage.clear()

console.log(newName)
var  newName = localStorage.getItem('name')
//localStorage.setItem('bin','hasan');
localStorage.removeItem('bin')
newName = localStorage.getItem('bin')
console.log(newName)
