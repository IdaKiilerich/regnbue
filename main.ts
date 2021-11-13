input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("M'Lady")
})
input.onButtonPressed(Button.A, function () {
    strip.clear()
    strip.showRainbow(1, 360)
    Loops = 8
    ranges = 0
    retning = 1
    while (true) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Red))
    Loops = 4
    ranges = 0
    retning = 1
    while (true) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # . . # .
            # # # . .
            # . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    }
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_1_DOWN, function () {
    Loops = 8
    ranges = 1
    range_2.showRainbow(1, 360)
    range.showRainbow(1, 360)
})
let retning = 0
let Loops = 0
let range: neopixel.Strip = null
let range_2: neopixel.Strip = null
let strip: neopixel.Strip = null
let ranges = 0
ranges = 0
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
range_2 = strip.range(15, 15)
range = strip.range(0, 15)
basic.showIcon(IconNames.Skull)
basic.forever(function () {
    if (Loops > 0) {
        if (ranges == 1) {
            for (let indeks = 0; indeks <= 8; indeks++) {
                range.rotate(retning)
                range_2.rotate(0 - retning)
                strip.show()
                basic.pause(100)
            }
        } else {
            for (let indeks = 0; indeks <= 29; indeks++) {
                strip.rotate(retning)
                strip.show()
                basic.pause(100)
            }
        }
        Loops = Loops - 1
    } else {
        strip.clear()
        strip.show()
    }
})
