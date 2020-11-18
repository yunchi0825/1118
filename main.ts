radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    showled(0, 0)
    showled(4, 0)
    showled(0, 4)
    showled(4, 4)
})
function showled (x: number, y: number) {
    for (let I = 0; I <= 2; I++) {
        for (let j = 0; j <= I; j++) {
            led.plot(j, I)
            led.plot(I, j)
        }
        basic.pause(100)
    }
    basic.clearScreen()
}
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
let j = 0
radio.setGroup(5)
basic.forever(function () {
    for (let I = 0; I <= 2; I++) {
        j = 1
        for (let index = 0; index < 2; index++) {
            led.plot(2 + j * I, 2)
            led.plot(2, 2 + j * I)
            j = j * -1
        }
        basic.pause(100)
    }
    basic.clearScreen()
})
