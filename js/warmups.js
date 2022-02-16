"use strict";



//14 February 2022
//Create a function called findAverage that finds the average of integers
//across an array

// function findAverage(array){
//     let total = 0;
//     array.forEach(function(item,index) {
//         total += item;
//     });
//     return total / (array.length);
// }
//
// console.log(findAverage([50, 75, 89, 109, 68]));

//16 February 2022
//Create an object that represents a person. Include Name/DOB/Occupation
//Log properties of that person

let person = {
    name: ['James', 'Robert', 'Woodward'],
    occupation: 'Fishmonger',
    birthDate: '04.25.1986'
}

person.name.forEach((name) => {
    console.log(name);
})

// let person2 = Object.create(person);
// person2.name = ['Ry','Sutton'];
// person2.occupation = 'Fab Father';
// person2.birthDate = '01.01.1992'
//
//
//
// let person3 = Object.create(person);
// person3.name = ['Method, Man'];
// person3.occupation = 'Legend';
// person3.birthDate = '03.02.1971';


let contactInfo = {
    phoneNumber: '555.555.5551',
    streetAddress: '9999 Last Street',
    city: 'New Orleans',
    state: 'Louisiana',
    postalCode: '70119',
    emailAddress: 'heyitsme@myemail.org'
}

 //person.contactInfo = contactInfo; // nests contactInfo into person object
//OR WE CAN DEFINE A PERSON THIS WAY
 function Person(name, occupation, birthDate, contactInfo) {
     this.name = name;
     this.occupation = occupation;
     this.birthDate = birthDate;
     this.contactInfo = contactInfo;
 }

//DEFINE CONTACT INFO THIS WAY
function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress) {
    this.phoneNumber = phoneNumber;
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.emailAddress = emailAddress;
}


 //AFTER DEFINING YOU COULD THEN USE new Person and new ContactInfo object constructor

let person4 = new Person(
    ['Funky', 'Monkey'],
    'Cat herder',
    '12.31.1989',
    new ContactInfo(
        '111.111.111',
        '123 Sesame St.',
        'Anchorage',
        'Alaska',
        '00001',
        'bigbird@tallbird.nz'));

console.log(person4);
console.log(person4.contactInfo.emailAddress);


//Todo: print out the formatted address of the contact info
// It should look like this-ish:
//          123 Anywhere Ln
//          Beverly Hills, CA 901210

// function formattedAddress(contactInfo) {
//     console.log(person.contactInfo.streetAddress);
//     console.log(person.contactInfo.city + ', ' + person.contactInfo.state + ' ' + person.contactInfo.postalCode);
// }
//
// formattedAddress(person.contactInfo);
//
// console.log(person);