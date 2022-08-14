// Your code here
class Car {
  constructor() {
    this.speed = 0;
  }
  drive(speed) {
    this.speed = speed;
    return speed;
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = Car;
} catch {
  module.exports = null;
}
