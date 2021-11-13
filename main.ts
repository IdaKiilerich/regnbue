input.onGesture(Gesture.Shake, function () {
    anim_random(10)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("M'Lady")
    anim_rainbow(1)
})
input.onButtonPressed(Button.A, function () {
    anim_rainbow(25)
})
function hart_beat_step () {
    if (hart_state) {
        basic.showIcon(IconNames.SmallHeart)
        hart_state = 0
    } else {
        basic.showIcon(IconNames.Heart)
        hart_state = 1
    }
}
function anim_night_step () {
    if (animating == 0) {
        strip.setBrightness(100)
        strip_long_range.setPixelColor(night_pos_1, neopixel.colors(NeoPixelColors.Black))
        strip_long_range.setPixelColor(night_pos_2, neopixel.colors(NeoPixelColors.Black))
        if (night_pos_1 > 19) {
            for (let indeks = 0; indeks <= 9; indeks++) {
                strip_short_range.setPixelColor(indeks, neopixel.rgb(randint(0, 200), randint(0, 200), randint(0, 200)))
            }
            night_pos_1 = 0
        } else {
            night_pos_1 += 1
        }
        if (night_pos_2 < 0) {
            night_pos_2 = 19
        } else {
            night_pos_2 += -1
        }
        strip_long_range.setPixelColor(night_pos_1, neopixel.colors(NeoPixelColors.Red))
        strip_long_range.setPixelColor(night_pos_2, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
}
function anim_rainbow (loops2: number) {
    animating = 1
    strip.clear()
    strip.showRainbow(1, 360)
    for (let index = 0; index < loops2; index++) {
        for (let indeks = 0; indeks <= 29; indeks++) {
            strip.rotate(1)
            strip.show()
            basic.pause(100)
        }
    }
    strip.clear()
    animating = 0
}
function init_strip () {
    strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
    strip_short_range = strip.range(0, 10)
    strip_long_range = strip.range(10, 20)
    strip.setBrightness(128)
    basic.showIcon(IconNames.Skull)
    hart_state = 0
    animating = 0
    night_pos_1 = 0
    night_pos_2 = 0
}
input.onButtonPressed(Button.AB, function () {
    anim_random(25)
})
input.onButtonPressed(Button.B, function () {
    anim_hunt(25)
})
function anim_hunt (loops2: number) {
    animating = 1
    strip.clear()
    strip.setPixelColor(randint(0, 29), neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(randint(0, 29), neopixel.colors(NeoPixelColors.Red))
    for (let index = 0; index < loops2; index++) {
        for (let indeks2 = 0; indeks2 <= 29; indeks2++) {
            strip.rotate(1)
            strip.show()
            basic.pause(100)
        }
    }
    strip.clear()
    animating = 0
}
function anim_random (loops2: number) {
    animating = 1
    strip.clear()
    for (let index = 0; index < loops2; index++) {
        for (let index = 0; index < 30; index++) {
            strip.setPixelColor(randint(0, 29), neopixel.rgb(randint(0, 200), randint(0, 200), randint(0, 200)))
        }
        strip.show()
        basic.pause(100)
    }
    strip.clear()
    animating = 0
}
let strip_short_range: neopixel.Strip = null
let night_pos_2 = 0
let night_pos_1 = 0
let strip_long_range: neopixel.Strip = null
let strip: neopixel.Strip = null
let animating = 0
let hart_state = 0
init_strip()
basic.forever(function () {
    anim_night_step()
    basic.pause(25)
})
