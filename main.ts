function 反時計回り回転する () {
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function 前進する () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
}
bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        # . . . #
        # # . # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        . # # # .
        `)
})
input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
function 全停止する () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.UntilDone)
})
function 後退する () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
}
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (lastValue != control.eventValue()) {
        lastValue = control.eventValue()
        if (control.eventValue() == 1) {
            前進する()
        } else if (control.eventValue() == 3) {
            後退する()
        } else if (control.eventValue() == 13) {
            反時計回り回転する()
        } else if (control.eventValue() == 15) {
            時計回り回転する()
        } else {
            全停止する()
        }
    }
})
function 時計回り回転する () {
    pins.digitalWritePin(DigitalPin.P15, 1)
}
let 赤外線左 = 0
let 赤外線右 = 0
let lastValue = 0
lastValue = 0
bluetooth.startLEDService()
bluetooth.startButtonService()
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . # . .
    . . . . .
    `)
basic.forever(function () {
    赤外線右 = pins.digitalReadPin(DigitalPin.P1)
    赤外線左 = pins.digitalReadPin(DigitalPin.P2)
    if (赤外線右 == 1 || 赤外線左 == 1) {
        後退する()
    }
})
