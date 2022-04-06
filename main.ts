input.onButtonPressed(Button.A, function () {
    clicks += 1
})
input.onButtonPressed(Button.B, function () {
    clicks_2 += 1
})
basic.showLeds(`
    . . . . .
    . # . . .
    # . # . .
    # # # # .
    # . # . .
    `)
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . . . # .
    . . # . #
    . # # # #
    . . # . #
    `)
basic.pause(1000)
basic.clearScreen()
basic.pause(100)
basic.showString("3 2 1 click!")
let clicks = 0
let clicks_2 = 0
basic.pause(5000)
basic.showNumber(3)
basic.pause(1000)
basic.showNumber(2)
basic.pause(1000)
basic.showNumber(1)
basic.pause(1000)
basic.showString("A")
basic.showNumber(clicks)
basic.pause(2000)
basic.showString("B")
basic.showNumber(clicks_2)
basic.pause(2000)
basic.forever(function () {
	
})
