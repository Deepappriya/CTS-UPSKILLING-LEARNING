// Ex:1 Javascript Basics & Setup
console.log("Welcome to the Community Portal");

window.onload = function(){

    alert("Community Portal Loaded Successfully");
};

// Ex:2 Syntax,Data Types and Operators
const eventName = "Music Festival";

const eventDate = "15-06-2026";

let availableSeats = 50;

console.log(
`Event : ${eventName}
Date : ${eventDate}
Seats : ${availableSeats}`
);

availableSeats--;

console.log(
"Seats Remaining : " + availableSeats
);

//Ex: 3 Contionals, Loops and Error Handling
const events = [

{
    name:"Music Festival",
    seats:20
},

{
    name:"Sports Meet",
    seats:0
}

];

events.forEach(function(event){

    if(event.seats > 0){

        console.log(
        event.name + " Available"
        );
    }

    else{

        console.log(
        event.name + " Full"
        );
    }

});

try{

    let seats = 0;

    if(seats <= 0){

        throw new Error(
        "Registration Closed"
        );
    }

}
catch(error){

    console.log(error.message);
}

// Ex:4 Functions, Scope, Closures and Higher Order Functions
function addEvent(eventName){

    console.log(
    eventName + " Added Successfully"
    );
}

function registerUser(userName){

    console.log(
    userName + " Registered"
    );
}

function filterEventsByCategory(
events,
callback
){

    return callback(events);
}

function registrationTracker(){

    let count = 0;

    return function(){

        count++;

        return count;
    };
}

let tracker = registrationTracker();

console.log(tracker());

console.log(tracker());

//Ex: 5 Objects and Prototypes
function Event(
name,
date,
seats
){

    this.name = name;

    this.date = date;

    this.seats = seats;
}

Event.prototype.checkAvailability =
function(){

    return this.seats > 0;
};

let event1 =
new Event(
"Music Festival",
"15-06-2026",
50
);

console.log(
event1.checkAvailability()
);

Object.entries(event1)
.forEach(([key,value]) => {

    console.log(key,value);

});

//Ex: 6 Arrays and Methods
let event = [];

event.push(
"Music Festival"
);

event.push(
"Workshop"
);

event.push(
"Music Night"
);

let musicEvents =
event.filter(ev =>
ev.includes("Music")
);

console.log(musicEvents);

let cards =
event.map(ev =>
`Event Card : ${ev}`
);

console.log(cards);

//Ex: 7 DOM Manipulation
let container =
document.querySelector(
"#eventContainer"
);

let card =
document.createElement("div");

card.innerHTML =
"Music Festival";

container.appendChild(card);


// Ex: 8 Event Handling
function registerEvent(){

    alert(
    "Registration Successful"
    );
}

function filterEvent(){

    console.log(
    "Category Changed"
    );
}

function searchEvent(){

    console.log(
    "Searching Event"
    );
}

// Ex: 9 Async JS,Promises and Async/Await
//Promise
fetch(
"https://jsonplaceholder.typicode.com/posts"
)

.then(response =>
response.json()
)

.then(data =>
console.log(data)
)

.catch(error =>
console.log(error)
);

//Async/Await
fetch(
"https://jsonplaceholder.typicode.com/posts"
)

.then(response =>
response.json()
)

.then(data =>
console.log(data)
)

.catch(error =>
console.log(error)
);

//Ex: 10 Modern Javascript Features
const eventDetails = {

    name:"Music Festival",

    date:"15-06-2026",

    seats:50
};

const {
name,
date,
seats
} = eventDetails;

console.log(
name,
date,
seats
);

function addEvent(
eventName = "Workshop"
){

    console.log(eventName);
}

let eve =
["Music","Sports"];

let copiedEvents =
[...eve];

console.log(copiedEvents);

//Ex:11 Working with Forms
document
.getElementById(
"registerForm"
).addEventListener(
"submit",

function(event){

event.preventDefault();

let form =
event.target;

let name =
form.elements["name"].value;

let email =
form.elements["email"].value;

if(
name === "" ||
email === ""
){

document
.getElementById("error")
.innerHTML =
"Please fill all fields";
}

}
);

//Ex:12 AJAX & Fetch API
let user = {

    name:"Deepa",

    email:"deepa@gmail.com"
};

setTimeout(() => {

fetch(
"https://jsonplaceholder.typicode.com/posts",

{
method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:
JSON.stringify(user)

}

)

.then(response =>
response.json()
)

.then(data => {

console.log(
"Registration Successful"
);

})

.catch(error => {

console.log(
"Registration Failed"
);

});

},2000);

//Ex: 13 Debugging and Testing
function registerUser(){

    console.log(
    "Registration Started"
    );

    let eventName =
    "Music Festival";

    console.log(eventName);

    debugger;

    console.log(
    "Registration Completed"
    );
}

