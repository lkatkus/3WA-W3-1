// console.log("Connected");
//
// console.log("");
// console.log("============");
//
// var a = prompt("Number?", "Default value");
// console.log("var a = " + a);
// console.log(typeof a);
//
// // a = Number(a);
//
// a = a + 10; /* prompt returns a STRING! */
// console.log(a);
//
// console.log("");
// console.log("============");
//
// var m = 10;
// console.log(typeof m);
//
// var n = null;
// console.log(typeof n); /* var null returns object. Why? Because... */
//
// console.log("");
// console.log("============");
//
// function mumu(){
//     var x = prompt("mumu?");
//     if(x === "mumu"){
//         console.log("mumu!");
//     }else{
//         console.log("not mumu");
//         mumu();
//     }
// }
//
// console.log("");
// console.log("============");
//
// var s = parseInt(a);
// console.log(s);
// console.log("S is " + typeof s);
//
// var y = prompt("enter number");
//
// while(isNaN(y))
//
// do{
//     x = x + y;
//     y++;
//     console.log(x);
// }
// while(y < 10);
//
//
// // function promptNumber(){
// //     y = prompt("enter number");
// //     promptCheck(y);
// // }
// //
// //
// // function promptCheck(){
// //     do{
// //         x = x + y;
// //         y++;
// //         console.log(x);
// //     }
// //     while(y < 10);
// // }

// var n = 0;
// var m = 0;
// var suma = 0;

//
// console.log("=========");
//
// do{
//     var n1 = prompt("enter number");
//     console.log("prompt " + n1);
//     m1 = parseInt(n1);
// }
// while(isNaN(m1));
//
// do{
//     var n2 = prompt("enter number");
//     console.log("prompt " + n2);
//     m2 = parseInt(n2);
// }
// while(isNaN(m2));
//
// do{
//     var n3 = prompt("enter number");
//     console.log("prompt " + n3);
//     m3 = parseInt(n3);
// }
// while(isNaN(m3));
//
// do{
//     var n4 = prompt("enter number");
//     console.log("prompt " + n4);
//     m4 = parseInt(n4);
// }
// while(isNaN(m4));
//
// suma = m1 + m2 + m3 + m4;
// console.log("suma " + suma);
//

// console.log("=========");
//
// var g;
//
// function calculateSum(z){
//     var n = 0;
//     var suma = 0;
//
//     for(var i = 0; i < z; i++){
//         do{
//             var n = prompt("enter number");
//             console.log("prompt " + n);
//             n = parseInt(n);
//         }
//         while(isNaN(n));
//         suma += n;
//     }
//     g = suma;
//     return g;
// }


function numberInput(msg, defVal){
    do{
        var s = prompt(msg, defVal);
        s = parseInt(s);
    }
    while(isNaN(s));
    return s;
}

// var s1 = numberInput("ivesk 1 skaiciu", 0);
// var s2 = numberInput("ivesk 2 skaiciu", 5);
// var s3 = numberInput("ivesk 3 skaiciu", 5);
// var s4 = numberInput("ivesk 4 skaiciu", 5);

var f = numberInput; /* function name withouth () - link to the function */
// console.log(typeof f);
// var s1 = f("LALAL",5);
// var s2 = f("BUBU",6);

var m1 = {
    gamintojas:"Mazda",
    spalva:"pilka",
    metai:2005, modelis:"3",
    variklis:{
        kuras:"benzinas",
        turis:1.6
    }
};

var m2 = {
    gamintojas:"Zigulys",
    spalva:"zalia",
    metai:1979,
    modelis:"21011"
};
//
// var str = "stringas";
// var str2 = "kitas";
// for(var i = 0; i < str.length; i++){
//     if(i == 0){
//         console.log(str[i] + " PIRMA RAIDE");
//     }else if(i == (str.length-1)){
//         console.log(str[i] + " PASKUTINE RAIDE");
//     }else{
// //         console.log(str[i]);
// //     }
// // }
//
// var m = ["pirmas", "antras", "trecias", 5, true, "bandymas"];
// var i = 0;
//
// do{
//     console.log(m[i]);
//     i++;
// }
// while(i < m.length)
//
// console.log("=========")
//
// for(var i = 0; i < m.length; i++){
//     console.log(m[i]);
// }

// var n = 0;
// var arr = [];
// var suma = 0;
//
// do{
//     var maxNum = prompt("How many numbers?");
//     maxNum = parseInt(maxNum);
// }
// while(isNaN(maxNum));
//
// if(maxNum==1){
//     console.log("Enter " + maxNum + " number");
// }else{
//     console.log("Enter " + maxNum + " numbers");
// }
//
// for(var i = 0; i <= maxNum-1; i++){
//     do{
//         var n = prompt("Enter number " + (i+1));
//         n = parseInt(n);
//     }
//     while(isNaN(n));
//     console.log("Number " + (i+1) + " is " + n);
//     arr.push(n)
// }
//
// for(var i = 0; i < arr.length; i++){
//     suma += arr[i];
// }
//
// console.log("Sum is " + suma);

console.log("=========");

/* a separate isNaN checking function */
// function numberInput(msg){
//     do{
//         var s = prompt(msg);
//         s = parseInt(s);
//     }
//     while (isNaN(s));
//     return s;
// }
//
// var n = numberInput("Kiek skaiciu?");
//
// var arr = [];
// for(var i = 0; i < n; i++){
//     arr.push(numberInput("ivesk " + (i + 1)));
// }
//
// var sum = 0;
// for(var i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
//
// console.log("sum is " + sum);
//
// // console.log("=========");
//
// function printParam(){
//     for(var i = 0; i < arguments.length; i ++){
//         console.log("ELEMENT " + arguments[i] + " IS A " + (typeof arguments[i]));
//     }
// }
//
// var m = [1,2,3];
// var n = "string";
// console.log(typeof m);
// console.log(Array.isArray(m)); /* Array.isArray checks if the provided object is an array */
//
// console.log("=========");
//
// var car1 = {
//     gamintojas: "Mazda",
//     spalva: "Pilka",
//     metai: 2005,
//     modelis: "3",
//     durys: "5",
//     variklis: "dyzelis"
// }
//
// for(var key in car1){
//     console.log(car1[key]);
// }

var userChoice;
var compChoice;

var userScore = 0;
var compScore = 0;

function RPS(){

    do{
        userChoice = prompt("Enter rock, paper or scissors");
        random();
        if(userChoice == "rock" && compChoice == "paper"){
            console.log("You chose: " + userChoice);
            console.log("Computer chose: " + compChoice);
            console.log("COMPUTER WINS");
            console.log("");
            compScore++;
        }else if(userChoice == "rock" && compChoice == "scissors"){
            console.log("You chose: " + userChoice);
            console.log("Computer chose: " + compChoice);
            console.log("YOU WIN");
            console.log("");
            userScore++;
        }else if(userChoice == "paper" && compChoice == "rock"){
            console.log("You chose: " + userChoice);
            console.log("Computer chose: " + compChoice);
            console.log("YOU WIN");
            console.log("");
            userScore++;
        }else if(userChoice == "paper" && compChoice == "scissors"){
            console.log("You chose: " + userChoice);
            console.log("Computer chose: " + compChoice);
            console.log("COMPUTER WINS");
            console.log("");
            compScore++;
        }else if(userChoice == "scissors" && compChoice == "paper"){
            console.log("You chose: " + userChoice);
            console.log("Computer chose: " + compChoice);
            console.log("YOU WIN");
            console.log("");
            userScore++;
        }else if(userChoice == "scissors" && compChoice == "rock"){
            console.log("You chose: " + userChoice);
            console.log("Computer chose: " + compChoice);
            console.log("COMPUTER WINS");
            console.log("");
            compScore++;
        }else if(userChoice == compChoice){
            console.log("You chose: " + userChoice);
            console.log("Computer chose: " + compChoice);
            console.log("DRAW");
            console.log("");
        }else if(!userChoice){
            userChoice = "quit";
        }else{
            alert("Enter rock, paper or scissors!");
        }
    }
    while(userChoice != "quit")
    console.log("User score:" + userScore, "Computer score:" + compScore);
    if(userScore>compScore){
        console.log("YOU HAVE WON!");
    }else{
        console.log("COMPUTER HAS WON");
    }
    console.log("BYE BYE");
}

function random(){
    a = Math.floor(Math.random() * 3);
    if(a == 1){
        compChoice = "rock";
    } else if(a == 2){
        compChoice = "paper";
    } else{
        compChoice = "scissors";
    }
}

RPS();


// do{
//     var uc;
//     do{
//         uc = prompt("R/P/S");
//     }
//     while(uc !="R" && uc !="P" && uc != "S")
// }
// while(uc);
