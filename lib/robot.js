let directions = ['north', 'east', 'south', 'west']
class Robot {
	constructor () {
    this.coordinates = [0, 0]
    this.bearing = 'north'
  }

  setCoordinates (x, y) {
    this.coordinates[0] = x
    this.coordinates[1] = y
  }

  setBearing (direction) {
    if (directions.includes(direction)) {
      this.bearing = direction
    } else {
      throw 'Invalid Robot Bearing'
    }
  }

  place (arg) {
    this.coordinates[0] = arg.x
    this.coordinates[1] = arg.y
    this.bearing = arg.direction
  }

  turnRight () {
    if (directions.indexOf(this.bearing) === 3) {
      this.bearing = directions[0]
    } else {
      this.bearing = directions[directions.indexOf(this.bearing) + 1]
    }
  }

  turnLeft () {
    if (directions.indexOf(this.bearing) === 0) {
      this.bearing = directions[3]
    } else {
      this.bearing = directions[directions.indexOf(this.bearing) - 1]
    }
  }

  advance () {
    if (this.bearing === 'north') {
      this.coordinates[1] += 1
    } else if (this.bearing === 'east') {
      this.coordinates[0] += 1
    } else if (this.bearing === 'south') {
      this.coordinates[1] -= 1
    } else {
      this.coordinates[0] -= 1
    }
  }

  translateInstructions (instructions) {
    let instructionList = instructions.split('')
    instructionList.forEach((command) => {
      if (command === 'L') {
        this.turnLeft()
      } else if (command === 'R') {
        this.turnRight()
      } else {
        this.advance()
      }
    })
  }
}
