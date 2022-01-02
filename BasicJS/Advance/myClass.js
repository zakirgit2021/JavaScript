class  first {
  constructor(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
  }

  MiddleName(midName){
    const sepName=  midName.split(" ")
    return sepName[1];
  }

}


class Teacher extends first{

}

const zakir= new Teacher('hasan', 32, 'ny');

//console.log(zakir)

midName=  new Teacher();
console.log (midName.MiddleName('Hasan Bin Zakir'))

