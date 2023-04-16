function 反時計回り回転する () {
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function 前進する () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
}
bluetooth.onBluetoothConnected(function () {
	
})
bluetooth.onBluetoothDisconnected(function () {
	
})
input.onButtonPressed(Button.A, function () {
    時計回り回転する()
})
function 全停止する () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
input.onSound(DetectedSound.Loud, function () {
	
})
input.onButtonPressed(Button.B, function () {
    前進する()
})
function 後退する () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
}
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (lastValue != control.eventValue()) {
        lastValue = control.eventValue()
    }
})
function 時計回り回転する () {
    pins.digitalWritePin(DigitalPin.P15, 1)
}
let lastValue = 0
basic.showLeds(`
    . # # # .
    # # # # #
    # . . . #
    # # # # #
    . # # # .
    `)
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(1000)
})
