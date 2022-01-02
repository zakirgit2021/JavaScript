const jasonObj = {
    name: 'hasan',
    age: 23,
    inActive: true
}

// convert the object to string to be at the local storage

const objSt = JSON.stringify(jasonObj)
//console.log(typeof objSt)

//localStorage.setItem('Student', objSt)
const stObj = JSON.parse(objSt)
console.log(typeof stObj)


