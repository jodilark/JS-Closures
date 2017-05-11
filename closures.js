/******************************************************************************\
	#PROBLEM-01
\******************************************************************************/

function outer() {
  var name = 'Tyler';
  return function() {
    return 'The original name was ' + name;
  }
}

/****** INSTRUCTIONS PROBLEM 1 ******/
/* Above you're given a function that returns another function which has a
closure over the name variable. Invoke outer saving the return value into
another variable called 'inner'. */

// Code Here
var inner = outer()

//Once you do that, invoke inner.

//Code Here
inner()










/******************************************************************************\
	#PROBLEM-02
\******************************************************************************/


function callFriend(name) {
  function dial(number) {
    return 'Calling ' + name + ' at ' + number
  }
  return dial
}

/****** INSTRUCTIONS PROBLEM 2 ******/
/* Above you're given a callFriend function that returns the dial function.
Create a callJake function that when invoked with '435-555-9248' returns 'Calling Jake at 435-555-9248'
in your console. */

  //Code Here



var callJake = callFriend("Jake")

callJake("435-555-9248")




/******************************************************************************\
	#PROBLEM-03
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 3 ******/
/* Write a function called makeCounter that makes the following code work
properly. */

//Code Here
function makeCounter(){
  var current = 0  
  function plusOne(){
    return current += 1
  }
  return plusOne
}

//Uncomment this once you make your function
  var count = makeCounter();
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4










/******************************************************************************\
	#PROBLEM-04
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 4 ******/
/* Inside the function called counterFactory return two functions that implement
up/down counter. The first function is called inc, this function is responsible
for incrementing the value once. The second function is called dec, this
function is responsible for decrementing the value by one. You will need to use
the module pattern to achieve this. 
Information on the module pattern available here: 
http://stackoverflow.com/questions/17776940/javascript-module-pattern-with-example?answertab=votes#tab-top
*/

function counterFactory(value) {
  return {
    inc:function(){
      return value += 1
    },
    dec:function(){
      return value -= 1
    }
  }
}


var counter = counterFactory(10);
counter.inc() // 11
counter.inc() // 12
counter.inc() // 13
counter.dec() // 12










/******************************************************************************\
	#PROBLEM-05
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 5 ******/
/* Inside the motivation function create another function called message that
will return 'You're doing awesome, keep it up firstname lastname.' */

function motivation(firstname, lastname) {

  var welcomeText = 'You\'re doing awesome, keep it up';

 function message() {
    var str = `${welcomeText} ${firstname} ${lastname}.`
    return str
  }
  return message();

}

motivation('Billy', 'Bob'); // 'You're doing awesome keep it up Billy Bob.










/******************************************************************************\
	#PROBLEM-06
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 6 ******/
/* Inside the module's return object create a publicMethod function that
invokes privateMethod. Invoke this by calling module.publicMethod(); outside
the module scope */

var module = (function() {
  var person = {
    name: "phillip",
    age: 29,
    location: "Utah"
  };

  function privateMethod(){
    return "Hi, I'm " + person.name + ", age " + person.age + " from " + person.location;
  }

  // Anything that is being returned is made public and can be invoked from
  // outside our lexical scope
  return {
    // Code here.
    publicMethod: function(){
      return privateMethod()
    }

  };

})();



/******************************************************************************\
 #PROBLEM-07
 \******************************************************************************/
/****** INSTRUCTIONS PROBLEM 7 ******/
/* Here we are given three arrays: an array of friends, an array of second-level
friends (friends of friends), and an array of all users. These arrays may share
users. Write a function that takes in our existing friends and returns
a function that will tell us if a given user is not already a friend. */
var friends = ["Tom", "Dick", "Harry"];
var secondLevelFriends = ["Anne", "Harry", "Quinton"];
var allUsers = ["Tom", "Dick", "Harry", "Anne", "Quinton", "Katie", "Mary"];

function findPotentialFriends(existingFriends) {
  // existingFriends is the one aruguement that findPotentialFriends takes. existingFriends is passed in through "findPotentialFriends(friends)" below
  return function (friends) {
    // since invoking findPotentialFriends returns the annonymous function (friends), we needed to give it a new function name that we could invoke directly... the reason for this is because the return function needs the existingFriends arguement but the existingFriends arguement can't be passed after a return.
    return existingFriends.indexOf(friends) === -1
    // this return states that if the test array value (determined by indexOf the friend being passed in when invoking the isNotAFriend function) has the same value as one of our current friends. If the test array value has an index it exists and won't return a -1. This will result in a false.
  }
}
var isNotAFriend = findPotentialFriends( friends );
  // to invoke the inner function, we must make findPotentialFriends with its arguement of "friends" a variable so we can invoke it with its own arguements which works because the inner function is an alias.
isNotAFriend(allUsers[0]); // false
  //allUsers[0] represents the "friends" variable in the inner function.
  // isNotAFriend is a function so that means it can take arguements. In the first invocation, the arguement given is the allUser array index value is zero. This should run the isNotAFriend function and see if "Tom"(allUsers[0]) is a potential friend. since Tom is already a friend, he cannot be a potential friend.
isNotAFriend(secondLevelFriends[2]); // true
  // in this invocation, "Quinton" (secondLevelFriends[2]) can be a potential friends because "Quinton" is not currently our friend.






//Backup of 7
/******************************************************************************\
 #PROBLEM-07
 \******************************************************************************/
/****** INSTRUCTIONS PROBLEM 7 ******/
/* Here we are given three arrays: an array of friends, an array of second-level
friends (friends of friends), and an array of all users. These arrays may share
users. Write a function that takes in our existing friends and returns
a function that will tell us if a given user is not already a friend. */
// var friends = ["Tom", "Dick", "Harry"];
// var secondLevelFriends = ["Anne", "Harry", "Quinton"];
// var allUsers = ["Tom", "Dick", "Harry", "Anne", "Quinton", "Katie", "Mary"];

// function findPotentialFriends(existingFriends) {

// }

// var isNotAFriend = findPotentialFriends( friends );
// // isNotAFriend(allUsers[0]); // false
// // isNotAFriend(secondLevelFriends[2]); // true








/******************************************************************************\
 #PROBLEM-07 -- BLACK DIAMOND
 \******************************************************************************/
/* Using your findPotentialFriends function from above and the Array.filter
method, find all potential second level friends as well as potential friends
from allUsers. */

function noHarry (){
secondLevelFriends.splice(1,1)
return secondLevelFriends
}

var potentialSecondLevelFriends = noHarry();

var allPotentialFriends = allUsers.filter(function(e) {
  return friends.indexOf(e) === -1
})



/******************************************************************************\
	#PROBLEM-08
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 8 ******/
/* Here we have a for loop that will iterate as long as i is less than or equal
to 5. What we need to do is console.log(i) so that it logs like so:
 0 second after call - log 0
 1 seconds after call - log 1
 2 seconds after call - log 2
 3 seconds after call - log 3
 4 seconds after call - log 4
 5 seconds after call - log 5
 However, because each call to console.log occurs after the loop has finished,
 the value of i has changed before the console.log executes. We'll need to use
 a closure to preserve a reference to i at the time of execution.

 Fix the code below to log the desired output.
 */

function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(function(i) { //will pass i into the next function
      return function() { // adding a return function will allow it to maintain a snapshot for context
    	console.log(i)
    }
	}(i), i * 1000)// ()forces an imediate invokation of the prior function
  }
}
timeOutCounter();
