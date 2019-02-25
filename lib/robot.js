let RobotID = 0
let store = {robots: []}
let directions = ["north", "east", "south", "west"]

class Robot {
  constructor(coordinates=[0,0], bearing="north"){
    this.coordinates = coordinates
    this.bearing = bearing
    this.id = ++RobotID
    store.robots.push(this)
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(direction) {
    if (directions.includes(direction)) {
      this.bearing = direction
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(placement) {
    this.setCoordinates(placement.x, placement.y)
    this.setBearing(placement.direction)
  }

  shiftDirections(east){
    let shifted = directions.slice()
    if(east)
      shifted.unshift(shifted.pop())
    else
      shifted.push(shifted.shift())
    return shifted
  }

  turnRight() {
    this.bearing = this.shiftDirections(false)[directions.indexOf(this.bearing)]
  }

  turnLeft() {
    this.bearing = this.shiftDirections(true)[directions.indexOf(this.bearing)]
  }

  advance() {
    let x = this.coordinates[0]
    let y = this.coordinates[1]

    switch (this.bearing) {
      case "north":
        this.coordinates = [x, y+1]
        break
      case "east":
        this.coordinates = [x+1, y]
        break
      case "south":
        this.coordinates = [x, y-1]
        break
      case "west":
        this.coordinates = [x-1, y]
        break
    }
  }

  translateInstructions(instructions) {
    instructions.split('').forEach(function(instruction) {
      switch (instruction) {
        case 'L':
          this.turnLeft()
          break
        case 'R':
          this.turnRight()
          break
        case 'A':
          this.advance()
          break
      }
    }.bind(this))
  }

}
