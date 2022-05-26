function trimProperties(obj) {
  const newObj = {}
  Object.entries(obj).forEach(([key,value]) => {
    newObj[key] = value.trim()
  })
  return newObj
}

function trimPropertiesMutation(obj) {
  Object.entries(obj).forEach(([key,value]) => {
    obj[key] = value.trim()
  })
  return obj
}

function findLargestInteger(integers) {
  let total = 0;
  integers.map(item => {
    Object.entries(item).forEach(([key,value]) => {
      if (value > total) {
        total = value
      }
    })
  })
  return total
}

class Counter {
  constructor(initialNumber) {
    this.initialNumber = initialNumber
  }
  countDown() {

    if (this.initialNumber === 0) {
      return this.initialNumber
    } else {
      return this.initialNumber--
    }
  }
}

class Seasons {
  constructor(current) {
    this.current = "spring"
    this.spring = "spring"
    this.summer = "summer"
    this.fall = "fall"
    this.winter = "winter"
  }
  next() {
    if (this.current === this.summer) {
      this.current = "fall"
      return this.current
    } else if (this.current === this.fall) {
      this.current = "winter"
      return this.current
    } else if (this.current === this.winter) {
      this.current = "spring"
      return this.current
    } else {
      this.current = "summer"
      return this.current
    }
  }
}

class Car {
  constructor(name, tankSize, mpg) {
    this.odometer = 0 
    this.tank = tankSize 
    this.name = name;
    this.mpg = mpg;
    this.Full = tankSize;
  }

  drive(distance) {
    let range = this.tank * this.mpg
    if(range >= distance) { 
      this.odometer += distance;
      this.tank -= distance / this.mpg
      return this.odometer
    }
    else {
      this.odometer += range
      this.tank = 0
      return this.odometer
    }
  }

  refuel(gallons) {
  if (this.tank + gallons > this.Full) {
    this.tank = this.Full
    return Car
  } else {
    this.tank += gallons}
    return Car
  }
}

async function isEvenNumberAsync(number) {
  if(number == null || typeof number !== "number"){
    return false
  } 
  if(number % 2 === 0) {
    return true 
  } else {
    return false
  }
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}