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
    _00(0, 0)
    _00(0, 4)
    _00(4, 0)
    _00(4, 4)
})
function _00 (num: number, num2: number) {
    for (let I = 0; I <= 2; I++) {
        for (let j = 0; j <= I; j++) {
            led.plot(num - Math.abs(j), num2 - Math.abs(I))
            led.plot(num - Math.abs(I), num2 - Math.abs(j))
        }
        basic.pause(100)
    }
    basic.clearScreen()
}
input.onGesture(Gesture.LogoDown, function () {
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
