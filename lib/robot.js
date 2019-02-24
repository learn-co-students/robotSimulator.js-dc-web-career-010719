let bearings = ['north','east','south','west']

class Robot {
  //your solution here
  constructor() {
    this.coordinates = [0,0]
    this.bearing = 'north'
  }

  setCoordinates(a,b) {
    this.coordinates = [a,b]
  }
  setBearing(bearing) {
    if (bearings.includes(bearing)){
      this.bearing = bearing}
      else {throw new Error (`Invalid Robot Bearing`)}
    }
    place(object) {
      this.setCoordinates(object.x,object.y)
      this.setBearing(object.direction)
    }
    turnRight() {
      this.setBearing(bearings[((bearings.findIndex(i => i === this.bearing)+1)%4)])
    }
    turnLeft() {
      for (let i = 0; i < 3; i++) {this.turnRight()}
    }
    advance() {
      if (this.bearing == 'north') {this.setCoordinates(this.coordinates[0],this.coordinates[1]+1)}
      else if (this.bearing == 'east') {this.setCoordinates(this.coordinates[0]+1,this.coordinates[1])}
      else if (this.bearing == 'south') {this.setCoordinates(this.coordinates[0],this.coordinates[1]-1)}
      else if (this.bearing == 'west') {this.setCoordinates(this.coordinates[0]-1,this.coordinates[1])}
    }
    translateInstructions(instructions) {
      instructions.split("").forEach((i)=>{
        if (i == 'L') {this.turnLeft()}
        if (i == 'R') {this.turnRight()}
        if (i == 'A') {this.advance()}
      }
    )
  }
}
