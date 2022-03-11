const { SoftPlay } = require('../src/soft-play-oop.js')

describe("Soft Play OOP", () => {  
  
  it("Initial state is empty", function() {
    let softPlay = new SoftPlay()
    expect(softPlay.occupancy()).toEqual({adults: 0, children: 0})
  })

  it("Single adult and child enter", function() {
    let softPlay = new SoftPlay()
    expect(softPlay.enter(1,1)).toBeTrue()
    expect(softPlay.occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Adult can leave when adults 2 and children 1", function() {
    let softPlay = new SoftPlay()
    softPlay.enter(2,1)
    expect(softPlay.leave(1,0)).toBeTrue()
    expect(softPlay.occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Adult cannot leave when adults 1 and children 1", function() {
    let softPlay = new SoftPlay()
    softPlay.enter(1,1)
    expect(softPlay.leave(1,0)).toBeFalse()
    expect(softPlay.occupancy()).toEqual({adults: 1, children: 1})
  })

  it("More children cannot leave than are in the soft play center", function() {
    let softPlay = new SoftPlay()
    expect(softPlay.enter(1,1)).toBeTrue()
    expect(softPlay.leave(1,2)).toBeFalse()
    expect(softPlay.occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Child cannot enter on own", function() {
    let softPlay = new SoftPlay()
    expect(softPlay.enter(0,1)).toBeFalse()
    expect(softPlay.occupancy()).toEqual({adults: 0, children: 0})
  })

  it("Child cannot leave on own", function() {
    let softPlay = new SoftPlay()
    softPlay.enter(1,1)
    expect(softPlay.leave(0,1)).toBeFalse()
    expect(softPlay.occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Adult can leave with children", function() {
    let softPlay = new SoftPlay()
    softPlay.enter(2,1)
    expect(softPlay.leave(2,1)).toBeTrue()
    expect(softPlay.occupancy()).toEqual({adults: 0, children: 0})
  })

  xit("Broken leave case: Enter: 1+2c, 1+1c. Leave 1+1c FAILS :(", function() {
    let softPlay = new SoftPlay()
    softPlay.enter(1,2)
    softPlay.enter(1,1)
    expect(softPlay.occupancy()).toEqual({adults: 2, children: 3})
    expect(softPlay.leave(1,1)).toBeTrue()
    expect(softPlay.occupancy()).toEqual({adults: 1, children: 2})
  })
})