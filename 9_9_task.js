// Task 1 — Print "Hello" Five Times
// Write a for loop that prints "Hello" 5 times.

for(let i=0; i<5; i++){
    console.log("Hello");
}
console.log("");

// Task 2 — Print Numbers 1 to 10 
// Write a for loop that prints numbers from 1 to 10.

for(let i=1; i<=10; i++){
    console.log(i);
}
console.log("");

// Task 3 — Countdown with While Loop 
// Write a while loop that prints numbers from 10 down to 1.

let i=10;
while(i>0){
    console.log(i);
    i--;
}
console.log("");

//Task 4 — Repeat a Message 
// Using a while loop, print "Loop চলছে" exactly 7 times.

let j=0;
while(j<7){
    console.log("Loop চলছে");
    j++;
}
console.log("");

// Task 5 — Even Numbers 
// Write a for loop that prints all even numbers between 1 and 30.

for(let i=1; i<=30; i++){
    if(i%2==0){
        console.log(i);
    }
}
console.log("");

// Task 6 — Sum of Numbers 
// Write a for loop that calculates the sum of numbers from 1 to 20 and prints the result.

let sum=0;
for(let i=1; i<=20; i++){
    sum+=i;
}
console.log(sum);
console.log("");

// Task 7 — Multiplication Table 
// Ask the user for a number (or set a variable), then print its multiplication table from 1 to 10 using a for loop. Example: if the number is 7 → 7 x 1 = 7, 7 x 2 = 14, ... 7 x 10 = 70.

let number = 7;
for(let i=1; i<=10; i++){
    console.log(number, "x", i, "=", number*i);
}
console.log("");

// ask 8 — Count Down from 20 
// Write a for loop that counts down from 20 to 1.

for(let i=20; i>0; i--){
    console.log(i);
}
console.log("");

// Task 9 — Sum of Even Numbers
// Write a for loop that calculates the sum of all even numbers from 2 to 50.

let evenSum=0;
for(let i=2; i<=50; i++){
    if(i%2==0){
        evenSum+=i;
    }
}
console.log(evenSum);
console.log("");

// Task 10 — Using Break 
// Write a for loop from 1 to 50 that stops completely (break) as soon as it reaches a number greater than 30.

for(let i=1; i<=50; i++){
    if(i>30){
        break;
    }
    console.log(i);
}
console.log("");

// Task 11 — Using Continue 
// Write a for loop from 1 to 20 that skips (continue) any number divisible by 4.

for(let i=1; i<=20; i++){
    if(i%4==0){
        continue;
    }
    console.log(i);
}
console.log("");

// Task 12 — Do While Loop — Optional 
// Write a do while loop that prints numbers from 1 to 5. Then modify the condition so it is false from the start (for example, i > 10) and observe that the loop still runs once.

let k=1;
do{
    console.log(k);
    k++;
}while(k<=5);
console.log("");

k=1;
do{
    console.log(k);
    k++;
}while(k>10);
console.log("");

// Task 13 — Comparing Loop Types
// Write the same task — printing numbers 1 to 5 — three times: once using for, once using while, and once using do while. Compare how the code structure differs for each.

for(let i=1; i<=5; i++){
    console.log(i);
}
console.log("");

let m=1;
while(m<=5){
    console.log(m);
    m++;
}
console.log("");

let n=1;
do{
    console.log(n);
    n++;
}while(n<=5);
console.log("");

// Write a program that:
// Loops from 1 to 100.
// Skips (continue) any number divisible by 5.
// Stops (break) completely once it reaches a number greater than 40.
// Prints every number that passes both checks.

for(let i=1; i<=100; i++){
    if(i%5==0){
        continue;
    }
    if(i>40){
        break;
    }
    console.log(i);
}
console.log("");