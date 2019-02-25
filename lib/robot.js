class Robot {
	//your solution here
  constructor(){
    this.coordinates = [0,0]
    this.bearing = "north"
  }
  setCoordinates(x,y){
    this.coordinates = [x,y]
  }
  setBearing(bearing){
    if ((bearing === "north") || (bearing === "south") || (bearing === "east")
    || (bearing === "west")){
      this.bearing = bearing
    }else{
      throw "Invalid Robot Bearing"
    }
  }
  place(data){
    this.setCoordinates(data.x,data.y)
    this.setBearing(data.direction)
  }
  turnRight(){
    if (this.bearing === "north") {
      this.setBearing("east")

    }else if (this.bearing === "east") {
      this.setBearing("south")

    }else if (this.bearing === "west") {
      this.setBearing("north")

    }else if (this.bearing === "south") {
      this.setBearing("west")

    }

  }
    turnLeft(){
      if (this.bearing === "north") {
        this.setBearing("west")

      }else if (this.bearing === "east") {
        this.setBearing("north")

      }else if (this.bearing === "west") {
        this.setBearing("south")

      }else if (this.bearing === "south") {
        this.setBearing("east")

      }

  }
  advance(){
    let x = this.coordinates[0]
    let y = this.coordinates[1]
    if (this.bearing === "north") {
      this.setCoordinates(x,y+1)

    }else if (this.bearing === "east") {
      this.setCoordinates(x+1,y)

    }else if (this.bearing === "west") {
      this.setCoordinates(x-1,y)

    }else if (this.bearing === "south") {
      this.setCoordinates(x,y-1)

    }

}
translateInstructions(instruc){
  for(let chr of instruc){
    if(chr === "R"){
      this.turnRight()
    }else if (chr === "L") {
      this.turnLeft()
    }else if (chr === "A") {
      this.advance()
    }
  }



}

}
