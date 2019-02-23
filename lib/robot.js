
class Robot {
	//your solution here
  constructor() {
    this.coordinates = [0,0]
    this.bearing = 'north'
    this.validDir = ['north', 'east', 'south', 'west']
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(dir) {
    if (this.validDir.includes(dir)) {
    this.bearing = dir
    } else {
    throw new Error("Invalid Robot Bearing")
    }
  }

  place(hash) {
    this.setCoordinates(hash.x, hash.y)
    this.setBearing(hash.direction)
  }

  turnRight() {
    for (let i = 0; i < 4; i++) {
      if (this.bearing === this.validDir[i]) {
        return this.bearing === 'west' ? this.bearing = 'north' : this.bearing = this.validDir[i+1]
      }
    }
  }

  turnLeft() {
    for (let i = 0; i < 4; i++) {
      if (this.bearing === this.validDir[i]) {
        return this.bearing === 'north' ? this.bearing = 'west' : this.bearing = this.validDir[i-1]
      }
    }
  }

  turn(a) {
    a === 'L' ? this.turnLeft() : this.turnRight()
  }

  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1] += 1
        break;
      case 'east':
        this.coordinates[0] += 1
        break;
      case 'south':
        this.coordinates[1] -= 1
        break;
      case 'west':
        this.coordinates[0] -= 1
        break;
    }
  }

  translateInstructions(ins) {
    // debugger
    for (const i of ins.split('')) {
      i === 'A' ? this.advance() : this.turn(i)
    }
  }



}
