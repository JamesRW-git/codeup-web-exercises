
// get the thing
let navContent = document.getElementById("navContent");

// log the thing to make sure you got the thing
// console.log(navContent);

console.log(navContent.children);

// create an element
let nameElement = document.createElement("p");

// get the data and set it to the text of the new element
nameElement.innerText = getGitHubInfo().name;
nameElement.style["color"] = 'white';
console.log(nameElement)

// TODO: Add nameElement to the DOM - specifically in between the GitHub Logo and the ul on the navbar

let ul = document.querySelector('#listy');
let newLi = document.createElement('li');
newLi.classList.add('col-3' , 'mx-0');
newLi.appendChild(nameElement);
ul.prepend(newLi);


// nameElement.classList.add('col-2');
// nameElement.classList.add('align-self-end');
// navContent.insertBefore(nameElement, navContent.children[1]);

let contentDiv = document.querySelector('div.container-fluid.container-md.row.mx-md-auto.mt-4')
console.log(contentDiv);

let details = document.createElement('p');
details.innerText = getGitHubInfo().details;

contentDiv.replaceChildren(details);

// PRETEND THIS IS AN API CALL ACROSS THE INTERWEBS
function getGitHubInfo(){
    return {
        name: "vegetasrevenge",
        details: 'LOOK AT ALL THE DETAILS!!!'
    };
}

