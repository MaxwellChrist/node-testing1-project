const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
  test('[1] returns an object with the properties trimmed', () => {
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const inputCopy = { ...input }
    const actual = utils.trimProperties(input)
    expect(actual).not.toEqual(input)
    expect(input).toEqual(inputCopy)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
  test('[3] returns an object with the properties trimmed', () => {
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }]
    const actual = utils.findLargestInteger(input)
    expect(actual).toEqual(3)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3)
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toEqual(3)    
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    expect(counter.countDown()).toEqual(2)    
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    expect(counter.countDown()).toEqual(0)    
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons()
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toEqual("summer")
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    expect(seasons.next()).toEqual("fall")
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    expect(seasons.next()).toEqual("winter")
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toEqual("spring")
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toEqual("summer")
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toEqual("spring")
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(100)).toBe(100)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(600)
    expect(focus.tank).toBe(0)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600)
    expect(focus.tank).toBe(0)
    focus.refuel(1)
    expect(focus.tank).toBe(1)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.drive(600)
    expect(focus.tank).toBe(0)
    focus.refuel(100)
    expect(focus.tank).toBe(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    let result = await utils.isEvenNumberAsync(2)
    expect(result).toBe(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    let number = await utils.isEvenNumberAsync(1)
    expect(number).toBe(false)
  })
})