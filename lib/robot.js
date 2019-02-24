class Robot {
	constructor() {
		this.coordinates = [0, 0]
		this.bearing = 'north'
		this.validDirection = ['north', 'south', 'east', 'west']
	}

	setCoordinates(x, y) {
		this.coordinates = [x, y]
	}

	setBearing(direction) {
		if(this.validDirection.includes(direction)){
			this.bearing = direction
		} else {
			throw new Error("Invalid Robot Bearing")
		}
	}

	place(orientation) {
		this.setCoordinates(orientation.x, orientation.y)
		this.setBearing(orientation.direction)
	}

	turnRight() {
		switch(this.bearing) {
			case 'north':
				this.setBearing('east')
				break
			case 'south':
				this.setBearing('west')
				break
			case 'east':
				this.setBearing('south')
				break
			case 'west':
				this.setBearing('north')
				break
		}
	}

	turnLeft() {
		switch(this.bearing) {
			case 'north':
				this.setBearing('west')
				break
			case 'east':
				this.setBearing('north')
				break
			case 'south':
				this.setBearing('east')
				break
			case 'west':
				this.setBearing('south')
				break
		}
	}

	advance() {
		switch(this.bearing) {
			case 'north':
				this.coordinates[1]++ 
				break
			case 'east':
				this.coordinates[0]++
				break
			case 'south':
				this.coordinates[1]--
				break
			case 'west':
				this.coordinates[0]--
				break
		}
	}

	translateInstructions(instruction) {
		instruction.split('').forEach(i => {
			switch(i) {
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
		})
	}
}

