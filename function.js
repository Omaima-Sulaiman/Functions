
// /*
// 1
// Write a function named tellFortune that:
// takes 4 arguments: number of children, 
// partner's name, geographic location, job title.
// outputs your fortune to the screen like so: 
// "You will be a X in Y, and married to Z with N kids."
// */

// function tellFortune(a, b, c, d) {
//   return "you will be " + a + "in" + b + "and marred to " + c + "with" + d;
// }
// console.log(tellFortune(' debeloper ', " jordan ", ' soso ', " 10 "));
// /*
// 2
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// */
// function calculateDogAge(x) {

//   var age = x * 7;
//   return age;
// }
// console.log(calculateDogAge(1))


// /*
// 3
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// */
// function calculateSupply(a, c) {
//   var c = (100 - a) * 365;
//   return "will need " + c + " last you until the ripe old age of ";


// }
// calculateSupply(20);

// /*
// 4
// Write a function called greet that:
// takes 1 argument: name.
// and it will return hello + name
// */
// function name(n) {
//   return "hello " + n;
// }
// name("")
// /*
// 5
// what is the error:
// */
// function double(cat) {
//   return 2 * cat;
// }

// function double(x) {
//   return 2 * x;
// }

// function double(x) {

//   return 2 * x;
// }


// /*
// 6
// fix these functions
// */
// function double1(x) {
//   return 2 * x;
// }

// function double2(x) {
//   return 2 * x;
// }

// function double3(x) {
//   return 2 * x;
// }

// /*
// 7
// Write a function called cube that:
// accept 1 parameter and calculate the cube of it
// */
// function cube(x) {
//   return x ** 3;

// }
// cube()

// /*
// 8
// Write a function called multiply that:
// accept 2 parameters and calculate the multiply of these 2 numbers

// Ex: multiply(3,4)
// => 12

// */
// function multiply(a, b) {
//   return a * b;

// }
// multiply()
// /*
// 9
// Write a function called canIGetADrivingLicense that:
// accept 1 parameter represent the age
// and if the age greater than or equal to 20 return "yes you can"
// otherwise return "please come back after X years to get one"

// Ex: canIGetADrivingLicense(21)
// => "yes you can"

// Ex: canIGetADrivingLicense(17)
// => "please come back after 3 years to get one"

// */
// function canIGetADrivingLicense(age) {
//   if (age >= 20) {
//     return " yes you can"



//   }

//   return "please come back after" + (20 - age) + "years to get one"

// }


// /*
// 10
// Write a function called sameLength
// that accepts two strings as arguments,
// and returns true if those strings have the same length, and false otherwise.

// **hint: how we can know string length   Ex: : "tree".length   => 4

// Ex: sameLength("tree","clue")
// => true

// Ex: sameLength("tree","car")
// => false
// */

// function sameLength(a, b) {
//   if (a.length === b.length) {
//     return true;
//   }
//   return false;
// }

// /*
// 11
// Write a function called largerNubmer
// that accept two numbers as arguments,
// and return the first larger numbers

// Ex: largerNubmer(5,6)
// => 6

// Ex: largerNubmer(5,3)
// => 5
// */

// function largerNubmer(c, d) {
//   if (c > d) {
//     return c;
//   }
//   return d;
// }
// /*
// 12
// Write a function called smallerNubmer
// that accept three numbers as arguments,
// and return the first smaller number

// Ex: smallerNubmer(8,6,7)
// => 6

// Ex: smallerNubmer(5,99,34)
// => 5
// */

// function smallerNubmer(a, b, c) {
//   if (a < b && a < c) {
//     return a;

//   } else {
//     if (b < a && b < c) {
//       return b;
//     }
//   }
//   return c;
// }


// 13
// Write a function called shorterString
// that accept five string as an arguments,
// and return the first shorter string

// Ex: shorterString("air","school","car","by","github")
// => by

// function shorterString(a, b, c, d, e) {
//   if (a.length < b.length && a.length < c.length && a.length < d.length && a.length < e.length) {
//     return a;
//   }

//   if (b.length < a.length && b.length < c.length && b.length < d.length && b.length < e.length) {
//     return b;
//   }

//   if (c.length < a.length && c.length < b.length && c.length < d.length && c.length < e.length) {
//     return c;
//   }

//   if (d.length < a.length && d.length < b.length && d.length < d.length && d.length < e.length) {
//     return d;
//   }

//   if (e.length < a.length && e.length < b.length && e.length < d.length && e.length < e.length) {
//     return e;
//   }


// }
// shorterString();
// /*
// 14
// Write a function called longerString
// that accept four string as an arguments,
// and return the first longer string
// Ex: shorterString("air","school","car","github")
// => school
// */


// function longerString(a, b, c, d) {

//   if (a.length > b.length && a.length > c.length && a.length > d.length) {
//     return a;
//   }



//   if (b.length > a.length && b.length > c.length && b.length > d.length) {
//     return b;
//   }



//   if (c.length > b.length && c.length > a.length && c.length > d.length) {
//     return c;
//   }



//   if (d.length > b.length && d.length > c.length && d.length > a.length) {
//     return d;
//   }

// }
// longerString()


// /*
// 15
// Write a function called isEven
// that accept 1 argument as a number,
// and return true if this number is even
// and false if this number is odd
// Ex: isEven(1)
// => false
// Ex: isEven(2)
// => true
// */


// function isEven(x) {
//   if (x % 2 === 0) {
//     return "this number is even";
//   }
//   return "this number is odd"
// }



// /*
// 16
// Write a function called isOdd
// that accept 1 argument as a number,
// and return true if this number is Odd
// and false if this number is Even
// Ex: isOdd(4)
// => false
// Ex: isOdd(5)
// => true
// */
// function isOdd(x) {
//   if (x % 2 !==0) {
//     return "this number is odd";
//   }
//   return "this number is enen"
// }



// /*
// 17
// Write a function called positive
// that accept 1 argument as a number,
// and return the positive version of the number passed
// Ex: positive(4)
// => 4
// Ex: positive(-5)
// => 5
// */
// function positive (x) {
// if (x > 0 ) {
//   return x + " is positive "
// }
// return x * -1

// }


// /*
// 18
// Write a function called fullName
// that accept two parameters, firstName and lastName,
// and returns the firstName and lastName concatenated
// together with a space in between.
// Ex: fullName("Mohammad","Jouza")
// => "Mohammad Jouza"
// Ex: fullName("Alex", "Mercer")
// => "Alex Mercer"
// */
// function fullName (f,l) {

//   return f + " " + l;
// }

// /*
// 19
// Write a function called average
// that takes five numbers as inputs
// and returns the average of those numbers.
// Ex: average(1,2,3,4,5)
// => 3
// Ex: average(5,7,9,3,5)
// => 5.8
// */
// function average (a,b,c,d) {
// var sum = a+b+c+d;
// return sum / 5;


// }


// /*
// 20
// Write a function called randomNumber
// that didnt takes any parameter
// and returns a random number between 0-1
// ** hint: you can seacrh using MDN
// Ex: randomNumber()
// => 0.2278
// Ex: randomNumber()
// => 0.475
// */

// function randomNumber () {
//   return Math.random();
// }

// /*
// 21
// Write a function called randomBetweenNumbers
// that takes 2 parameters
// and returns a random number between them
// ** hint: you can seacrh using MDN
// Ex: randomBetweenNumbers(1,8)
// => 7.5412
// Ex: randomBetweenNumbers(3,100)
// => 23
// */
// function randomBetweenNumbers(a,b){
//   return Math.floor(Math.random() * Math.floor(a));
// }
// randomBetweenNumbers();


// /*
// 22
// Write a function called scoreInUniversty
// that takes 1 parameters
// and returns the alpabet in the unevirsty
// A => 95-100
// B => 85-94
// C => 70-84
// D=> 50-69
// F=> 0-49
// Ex: scoreInUniversty(96)
// => "A"
// Ex: scoreInUniversty(3)
// => "F"
// Ex: scoreInUniversty(71)
// => "C"
// */
function repeatstring (x ,b){
  if ( b.length ===0 ){
    return " " ;

  }
  return x + repeat(x , (b.length - 1) )
}
repeatstring()

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
*/


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
Ex: resetCounter()
=> 3 and the counter reset now
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: resetCounter()
=> 2 and the counter reset now
Ex: counter()
=> 1
*/


/*
25
// this question is in progress wait
Write a function called guessMe
that will take an argument (number)
if the number not between 0 and 5 [0,1,2,3,4]
it will return "Please insert a number between 0 and 5"
if it is between 0 and 5, and guessed the correct number 0-5 [0,1,2,3,4]
will return "you guess me correctly"
if it is between 0 and 5, and not the same number randomly 0-5 [0,1,2,3,4]
will return "you didnt guess me I was 3"
Ex: guessMe(0)
=> "you didnt guess me I was 3"
Ex: guessMe(10)
=>"Please insert a number between 0 and 5"
Ex: guessMe(-5)
=> "Please insert a number between 0 and 5"
Ex: guessMe(3)
=> "you guess me correctly"
*/


/*
26
// this question is in progress wait
Write a function called guessMe
that will take an argument (number)
if the number not between 0 and 5 [0,1,2,3,4]
it will return "Please insert a number between 0 and 5"
if it is between 0 and 5, and guessed the correct number 0-5 [0,1,2,3,4]
will return "you guess me correctly"
if it is between 0 and 5, and not the same number randomly 0-5 [0,1,2,3,4]
will return "you didnt guess me I was 3"
Ex: guessMe(0)
=> "you didnt guess me I was 3"
Ex: guessMe(10)
=>"Please insert a number between 0 and 5"
Ex: guessMe(-5)
=> "Please insert a number between 0 and 5"
Ex: guessMe(3)
=> "you guess me correctly"
*/


/*
*/


/*
*/


/*
*/


/*
*/




/////////// Advanced part