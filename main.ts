enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    entry = "" + entry + "A"
})
input.onButtonPressed(Button.B, function () {
    entry = "" + entry + "B"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (entry == password) {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . # # # .
                . . # . .
                . # . # .
                `)
            basic.showLeds(`
                . . . # .
                . . # . .
                . # # # .
                . . # . .
                . # . # .
                `)
        }
        basic.clearScreen()
        servos.P0.setAngle(0)
        basic.pause(5000)
        servos.P0.setAngle(90)
        while (pins.digitalReadPin(DigitalPin.P1) == 0) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(500)
        }
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            servos.P0.setAngle(90)
            basic.pause(5000)
            servos.P0.setAngle(0)
        } else {
            basic.pause(5000)
            servos.P0.setAngle(0)
        }
    } else {
        entry = ""
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
        basic.clearScreen()
    }
})
let entry = ""
let password = ""
servos.P0.setAngle(90)
basic.showString("pass")
password = "BABA"
entry = ""
basic.forever(function () {
	
})
