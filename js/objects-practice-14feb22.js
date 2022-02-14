"use strict";

//Objects are a data structure (a way of structuring data)

//Creating an object
let car = {};
console.log(typeof car);

//set a property for an object
//Property is a key object pair
// car.make is creating a property with a value of 'Ford'
car.make = 'Ford';
console.log(car);
car.model = 'Mustang'
console.log(car);

//Can pull a specific property with property.value (car.model)
console.log(car.model); //outputs Mustang


//can create an object with properties from scratch
let cohort = {
    name: 'Fortran',
    startDate: '01/31/2022',
    endDate: '07/31/2022'
}

//Accessing Properties
console.log(cohort.name); //outputs Fortran

//Find keys (keys are the properties of the object)
console.log(Object.keys(car)); //outputs properties
car.year = '1994';
console.log(Object.keys(car)); //outputs properties + new property 'year'

//IN keyword (Does this property exist in this object? Yes or no and then
//do something
if (!('numOfWheels' in car)) {
    car.numOfWheels = 4;
}
console.log(car);

//Nested Values
let elixirCohort = {
    name: 'Elixir',
    startYear: '2021',
    students: ['Hector','David','Brandon','Brice','Colton','Daniel'],
    hasGraduated: false
}
console.log(elixirCohort.students); //accesses the students property of elixirCohort

console.log(elixirCohort.startYear);
console.log(elixirCohort.hasGraduated);

//Objects within Objects
elixirCohort.students = [
    {
        name: 'Ry',
        age: 27
    },
    {
        name: 'Casey',
        age: 27
    },
    {
        name: 'Docrob',
        age: 40
    }
]

console.log(elixirCohort.students[0].name);
//LOGS    elixirCohort/student property/index of elixirCohort/name property

//Assigning functionality(behaviors) to an object
car.honk = function() {
    console.log('Heauxnk heauxnk');
}

car.honk();

//Could place the this.students... where the object is defined
elixirCohort.printAllStudentNames = function() {
    this.students.forEach(function(student){
        console.log(student.name);
    })
}

elixirCohort.printAllStudentNames();