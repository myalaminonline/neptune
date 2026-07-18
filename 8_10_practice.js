const price1 = 50;
const price2 = 100;

console.log("== :", price1 == price2);
console.log("=== :", price1 === price2);
console.log("!= :", price1 != price2);
console.log("!== :", price1 !== price2);
console.log("> :", price1 > price2);
console.log("< :", price1 < price2);
console.log(">= :", price1 >= price2);
console.log("<= :", price1 <= price2);

console.log("");
console.log('"5"==5 :', "5" == 5);
console.log('"5"===5 :', "5" === 5);
console.log('"5"!=5 :', "5" != 5);
console.log('"5"!==5 :', "5" !== 5);

console.log("");
const isRaining = true;

if (!isRaining) {
    console.log("take an umbrella");
} else {
    console.log("no umbrella needed");
}

console.log("");
const stock = 0;

if (!stock) {
    console.log("Out of Stock");
}

console.log("");
const number = -1;

if (number > 0) {
    console.log("positive");
}
else if (number < 0) {
    console.log("negative");
}
else {
    console.log("zero");
}

console.log("");
const year = 2026;

if (year % 4 == 0) {
    console.log("leap year");
}
else {
    console.log("not a leap year");
}

console.log("");
const speed = 80;

if (speed >= 80) {
    console.log("over speed");
}
else {
    console.log("normal speed");
}

console.log("");
const age = 18;
const hasTicket = true;

if (age >= 10 && hasTicket) {
    console.log("Entry allowed");
}
else {
    console.log("Entry not allowed");
}

console.log("");
const isWeekend = true;
const isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("No work today");
}
else {
    console.log("Work today");
}

console.log("");
const userName = "admin";
const password = "admin123";
const givenUserName = "admin";
const givenPassword = "admin123";

if (givenUserName === userName && givenPassword === password) {
    console.log("Login successful");
}
else {
    console.log("Login failed");
}

console.log("");
const marks = 80;

if (marks >= 80) {
    console.log("A+");
} else if (marks >= 70) {
    console.log("A");
} else if (marks >= 60) {
    console.log("A-");
} else if (marks >= 50) {
    console.log("B");
} else {
    console.log("Fail");
}

console.log("");
const BMI = 20;

if (BMI < 18.5) {
    console.log("Underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("Normal weight");
} else if (BMI >= 25 && BMI <= 29.9) {
    console.log("Overweight");
} else {
    console.log("Obese");
}


console.log("");
// calculate seasion
const month = 1;

if (month >= 3 && month <= 5) {
    console.log("Spring");
} else if (month >= 6 && month <= 8) {
    console.log("Summer");
} else if (month >= 9 && month <= 11) {
    console.log("Autumn");
} else {
    console.log("Winter");
}

console.log("");
// calculate voter
const yourAge = 18;
const hasID = true;

if (yourAge >= 18) {
    console.log("You are a voter");
    if (hasID) {
        console.log("You can vote");
    } else {
        console.log("You can't vote");
    }
} else {
    console.log("You are not a voter");
}

console.log("");
// calculate dashboard
const isLoggedIn = true;
const isAdmin = true;

if (isLoggedIn) {
    if (isAdmin) {
        console.log("Admin Dashboard");
    } else {
        console.log("User Dashboard");
    }
} else {
    console.log("Please Login");
}

console.log("");
// even odd with ternary operator
const giverNumber = 5;

giverNumber % 2 == 0 ? console.log(giverNumber, " is an even number.") : console.log(giverNumber, " is an odd number.");

console.log("");
// adult or minor
const givenAge = 18;

givenAge >= 18 ? console.log("Adult") : console.log("Minor");

console.log("");
// expensive or affordable
const price = 1000;

if (price > 1000) {
    console.log("Expensive");
} else {
    console.log("Affordable");
}

console.log("");
// access denied
const hasPermission = 0;

if (!hasPermission) {
    console.log("Access Denied");
}

console.log("");
// online or offline
const isOnline = false;

if (!isOnline) {
    console.log("User is offline");
}

console.log("");
// discount system
const cartTotal =1500;
const isMember=true;

if(cartTotal>1000){
    if(isMember){
        console.log("Cart Total: ", cartTotal);
        console.log("Discount 20%: ", cartTotal * 20 / 100);
        console.log("Payable Total: ", cartTotal - (cartTotal * 20 / 100));

    }else{
        console.log("Discount 10%");
    }
} else {
    console.log("No discount")
}

console.log("");
// login + role-check system with ternary
const myUserName = "admin";
const myPassword = "admin123";
const hasAdminPermission= false; 

myUserName === "admin" && myPassword === "admin123" ? (hasAdminPermission ? console.log("Admin Dashboard") : console.log("User Dashboard")) : console.log("Login Failed");


