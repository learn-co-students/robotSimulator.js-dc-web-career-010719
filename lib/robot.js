const directions = ['north', 'east', 'south', 'west']

class Robot {
	constructor(){
    this.coordinates = [0, 0]
    this.bearing = 'north'
  }
  
  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }
  
  setBearing(direction) {
    let directions = ['north', 'east', 'south', 'west']
    if (directions.includes(direction) ) {
      this.bearing = direction
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  }
  
  place(coord) {
    this.setCoordinates(coord.x, coord.y)
    this.setBearing(coord.direction)
  }
  
  turnRight(){
    let directions = ['north', 'east', 'south', 'west']
    if (this.bearing === 'west') {
      this.bearing = 'north'
    } else {
      this.bearing = directions[(directions.indexOf(this.bearing)) + 1]
    }
  }
  
  turnLeft() {
    let directions = ['north', 'east', 'south', 'west']
    if (this.bearing === 'north') {
      this.bearing = 'west'
    } else {
      this.bearing = directions[(directions.indexOf(this.bearing)) -1]
    }
  }
  
  advance() {
    switch (this.bearing) {
      case 'north':
        this.setCoordinates(this.coordinates[0], ++(this.coordinates[1]))
        break
      case 'south':
        this.setCoordinates(this.coordinates[0], --(this.coordinates[1]))
        break
      case 'east':
        this.setCoordinates(++this.coordinates[0], (this.coordinates[1]))
        break
      case 'west':
        this.setCoordinates(--this.coordinates[0], (this.coordinates[1]))
        break
    }
  }
  
  translateInstructions(inst){
    let instArray = inst.split('')
    for (let ins of instArray) {
      switch (ins) {
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
    }
  }
}
