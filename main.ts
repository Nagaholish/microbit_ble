function 反時計回り回転する () {
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function 前進する () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
}
bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        # # # # #
        # # . # #
        . . . . .
        `)
})
function 全停止する () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function 後退する () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
}
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (lastValue != control.eventValue()) {
        lastValue = control.eventValue()
        if (control.eventValue() == 1) {
            basic.showString("A")
            前進する()
        } else if (control.eventValue() == 3) {
            basic.showString("B")
            後退する()
        } else if (control.eventValue() == 5) {
            basic.showString("C")
        } else if (control.eventValue() == 7) {
            basic.showString("D")
        } else if (control.eventValue() == 9) {
            basic.showString("1")
        } else if (control.eventValue() == 11) {
            basic.showString("2")
        } else if (control.eventValue() == 13) {
            basic.showString("3")
            反時計回り回転する()
        } else if (control.eventValue() == 15) {
            basic.showString("4")
            時計回り回転する()
        } else {
            全停止する()
        }
    }
})
function 時計回り回転する () {
    pins.digitalWritePin(DigitalPin.P15, 1)
}
let lastValue = 0
lastValue = 0
bluetooth.startLEDService()
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
basic.showIcon(IconNames.Asleep)
