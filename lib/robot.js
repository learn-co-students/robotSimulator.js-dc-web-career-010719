class Robot {

  constructor() {
    this.coordinates = [0,0]
    this.bearing = 'north'
    this.validDirections = ['north', 'south', 'east', 'west']
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(direction) {
    if (this.validDirections.includes(direction)) {
      this.bearing = direction
    } else {
      throw new Error("Invalid Robot Bearing")
    }
  }

  place(placement) {
    this.setCoordinates(placement.x, placement.y)
    this.setBearing(placement.direction)
  }

  turnRight() {
    switch (this.bearing) {
      case "north":
        this.setBearing("east");
        break;
      case "south":
        this.setBearing("west");
        break;
      case "east":
        this.setBearing("south");
        break;
      case "west":
        this.setBearing("north");
        break;
      default:
        break;
    }
  }

  turnLeft() {
    switch (this.bearing) {
      case "north":
        this.setBearing("west");
        break;
      case "south":
        this.setBearing("east");
        break;
      case "east":
        this.setBearing("north");
        break;
      case "west":
        this.setBearing("south");
        break;
      default:
        break;
    }
  }

  advance() {
    if (this.bearing === 'north') {
      this.coordinates[1] += 1
    } else if (this.bearing === 'south') {
      this.coordinates[1] -= 1
    } else if (this.bearing === 'west') {
      this.coordinates[0] -= 1
    } else {
      this.coordinates[0] += 1
    }
  }

  translateInstructions(instructions) {
    instructions.split("").forEach(function(instruction) {
      if (instruction === 'L') {
        this.turnLeft()
      } else if (instruction === 'R') {
        this.turnRight()
      } else if (instruction === 'A') {
        this.advance()
      }
    }.bind(this))
  }

}
