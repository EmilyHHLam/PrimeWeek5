function Animal(first, last, type) {
    this.firstName = first;
    this.lastName = last;
    this.type = type;
}

// here's an example Animal:
var giantCactus = new Animal( "Giant", "Cactus", "Dog" );

// PART 1
// create a new animal named "somethingFun" with a first name of "Something" a last name of "Fun" and a type of "Cat"
var somethingFun = new Animal ("Something", "Fun", "Cat");
// PART 2
// console log out somethingFun's first and last name
console.log("New Object's firstName is " + somethingFun.firstName);
console.log("New Object's lastName is " + somethingFun.lastName);
console.log("--------------------------------------------------");
// PART 3 (Hard Mode)
// add a method to somethingFun named "meow()" that console logs "moew" when called. ex: somethingFun.meow()
somethingFun.meow = function() {
  console.log("moew");
};
console.log("Method to the somethingFun: ");
somethingFun.meow();
console.log("--------------------------------------------------");
// add another method to somethingFun named "isHappy" that receives a boolean argument "happy"
// within this method, check if "happy" is true
// if so, console log "purrrrrr"
// if not, console log "crabby face"
somethingFun.isHappy = function(mood){
  if (mood === 'happy') {
    console.log("purrrr");
  }else {
    console.log("crabby face");
  }
};
console.log("Another method to somethingFun with a boolean argument: ");
somethingFun.isHappy('happy');
console.log("--------------------------------------------------");

// DO NOT TOUCH CODE BELOW
// for purpose of the test files only
module.exports = {
  somethingFun: somethingFun
};
