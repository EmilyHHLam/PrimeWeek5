console.log('File loaded!');

// Call the function defined below to actually do something!
convertRooms();

function convertRooms() {
  // Each array of data is in the order of: [total seats needed, rollingChairs, cubes, color of seats]
  var roomsArray = [[20, 10, 10, 'red'], [24, 10, 14, 'blue'], [23, 8, 11, 'black'], [18, 5, 13, 'blue']];

  console.log(roomsArray);
  // Convert each room array into a Room object
  // Write code here, remember to log the new object you create at the end of
  // each iteration.

  for (var i =0; i<roomsArray.length; i++){

     roomObj = new Room(roomsArray[i]);
     //create objects of above 4 arrays
     console.log(roomObj);
   }

 return roomObj;

}
console.log("--------------------------------------------------");

/**
 * Represents a classroom at Prime
 * @constructor
 * @param {Array} roomArray - an array of data representing a single room
 *  @property {Number} capacity - number of seats in this room
 *  @property {Array} rollingChairs - an array of rolling chair objects
 *  @property {Array} cubes - an array of cube objects
 *  @property {Array} color - color of rollingChairs
**/
function Room(roomArray) {
  // Write constructor logic here to convert the array into a Room object
  // You will need to also create RollingChair and Cube objects!
  this.capacity = roomArray[0];
  this.rollingChairs = roomArray[1];
  this.cubes = roomArray[2];
  this.color = roomArray[3];
}

/**
 * Represents a Rolling Chair seat
 * @constructor
 * @param {String} type - type of seat this is
 * @param {String} color - color of the seat fabric
**/
function RollingChair(type, color) {
  // Write constructor logic here to create a single rolling chair object
  this.type = type;
  this.color = color;

}
var rollingChairObj = new RollingChair('boss fabric','blue');
console.log("Rolling chair object is: ");
console.log(rollingChairObj);
console.log("--------------------------------------------------");
/**
 * Represents a Cube seat
 * @constructor
 * @param {String} length - length of each side
 * @property {Function} volume - method that calculates the volume of the cube
**/
function Cube(length) {
  // Write constructor logic here to create a single cube seat object
  this.length = length;
  this.setVolume = function(){
    return Math.pow(this.length,3);
  };
}

var cubeObj = new Cube(4);
console.log('The single cube seat object is ');
console.log(cubeObj);
cubeObj.setVolume();
console.log('and its volume is ');
console.log(cubeObj.setVolume());



//-- DON'T TOUCH CODE BELOW --
module.exports = {
  Room: Room,
  convertRooms: convertRooms,
  RollingChair: RollingChair,
  Cube: Cube
};
