// Rover Object Goes Here. I made it start at 4,4 to prevent going off the grid in first movement.
var rover = {
direction: "N",
x: 0,
y: 0,
travelLog: []
};
// ======================

// ======================
function turnLeft(rover){
  // I included the information about calling the function directly into each turn. Same with turnRight.
  switch (rover.direction) {
    case "N":
     rover.direction="W"
     return "Turning left... Turn Completed! Rover is now facing west"
    case "W":
     rover.direction="S"
     return "Turning left... Turn Completed! Rover is now facing south"
    case "S":
     rover.direction="E"
     return "Turning left... Turn Completed! Rover is now facing east"
    case "E":
     rover.direction="N"
     return "Turning left... Turn Completed! Rover is now facing north"
	}
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
     rover.direction="E"
     return "Turning right... Turn Completed! Rover is now facing east"
    case "E":
     rover.direction="S"
     return "Turning right... Turn Completed! Rover is now facing south"
    case "S":
     rover.direction="W"
     return "Turning right... Turn Completed! Rover is now facing west"
    case "W":
     rover.direction="N"
     return "Turning right... Turn Completed! Rover is now facing north"
	}
}


function moveForward(rover){
// moveForward and moveBackward functions were harder than expected if not using switch loops.
// I have spent more time than I will admit trying to make the grid restrictions work with the switch statements, but StackOverflow didn't help here.
  if (rover.direction == "W" && rover.x > 0) {
    rover.x -= 1;
    console.log("One step forward as indicated");
  } else if (rover.direction == "E" && rover.x < 9) {
    rover.x += 1;
    console.log("One step forward as indicated");
  } else if (rover.direction == "N" && rover.y > 0) {
    rover.y -= 1;
    console.log("One step forward as indicated");
  } else if (rover.direction == "S" && rover.y < 9) {
    rover.y += 1;
    console.log("One step forward as indicated");
  } else {
    console.log("That terrain is dangerous, you have to remain inside the grid approved by NASA");
  }
// I kept the console.log here even when pushing the information to travelLog just for when moveForward is used on its own.
console.log(rover.x + ", " + rover.y);
rover.travelLog.push("[" + rover.x + ", " + rover.y + "]")
}

function moveBackward(rover){
  if (rover.direction == "E" && rover.x > 0) {
    rover.x--;
    console.log("One step back as indicated");
  } else if (rover.direction == "W" && rover.x < 9) {
    rover.x++;
    console.log("One step back as indicated");
  } else if (rover.direction == "S" && rover.y > 0) {
    rover.y--;
    console.log("One step back as indicated");
  } else if (rover.direction == "N" && rover.y < 9) {
    rover.y++;
    console.log("One step back as indicated");
  } else {
    console.log("That terrain is dangerous, you have to remain inside the grid approved by NASA");
  }
console.log(rover.x + ", " + rover.y);
rover.travelLog.push("[" + rover.x + ", " + rover.y +"]")
}


function userCommand(str) {
  // I wanted to use a for..of loop for this, but I was doing something wrong and I couldnt make it work properly. I used the typical for loop as I think it was easier (but probably longer)
 for (i = 0; i < str.length; i++) {
    if (str[i] === "f") {
      moveForward(rover);
    } else if (str[i] === "b") {
      moveBackward(rover);
    } else if (str[i] === "l") {
      turnLeft(rover);
    } else if (str[i] === "r") {
      turnRight(rover);
    }
  }
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== "f" && str[i] !== "b" && str[i] !== "l" && str[i] !== "r") {
      console.log(str[i] +" is not a valid command. Use f (forward), b (backward), l (left) or r (right).");
    }
  }
  console.log("Registrated movement:" + rover.travelLog);
}