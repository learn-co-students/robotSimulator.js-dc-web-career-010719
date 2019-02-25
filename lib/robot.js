class Robot {
	//your solution here
	constructor() {
		this.coordinates = [0, 0];
		this.bearing = 'north';
	}

	setCoordinates(x, y) {
		this.coordinates = [x, y];
	}

	setBearing(bearing) {
		if (!bearing.match(/(north|south|east|west)/i))
			throw "Invalid Robot Bearing";
		this.bearing = bearing;
	}

	place(obj) {
		this.setCoordinates(obj.x, obj.y)
		this.setBearing(obj.direction)
	}

	turnRight() {
		switch (this.bearing) {
			case 'north':
				this.setBearing('east')
				break;
			case 'south':
				this.setBearing('west')
				break;
			case 'east':
				this.setBearing('south')
				break;
			case 'west':
				this.setBearing('north')
				break;
			default:
				break;
		}
	}

	turnLeft() {
		switch (this.bearing) {
			case 'north':
				this.setBearing('west')
				break;
			case 'south':
				this.setBearing('east')
				break;
			case 'east':
				this.setBearing('north')
				break;
			case 'west':
				this.setBearing('south')
				break;
			default:
				break;
		}
	}

	advance() {
		switch (this.bearing) {
			case 'north':
				this.coordinates[1]++
				break;
			case 'south':
				this.coordinates[1]--
				break;
			case 'east':
				this.coordinates[0]++
				break;
			case 'west':
				this.coordinates[0]--
				break;
			default:
				break;
		}
	}

	translateInstructions(instructions) {
		instructions.split('').forEach(i => {
			switch (i) {
				case 'L':
					this.turnLeft();
					break;
				case 'R':
					this.turnRight();
					break;
				case 'A':
					this.advance();
					break;
				default:
					break;
			}
		})
	}
}
