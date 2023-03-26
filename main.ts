bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # # .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # #
        . # # . .
        . # . # .
        # . . . #
        `)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (lastValue != control.eventValue()) {
        lastValue = control.eventValue()
        if (control.eventValue() == 1) {
            basic.showString("A")
            // 脚・前
            pins.digitalWritePin(DigitalPin.P0, 0)
        } else if (control.eventValue() == 3) {
            basic.showString("B")
            // 脚・後
            pins.digitalWritePin(DigitalPin.P0, 0)
        } else if (control.eventValue() == 5) {
            basic.showString("C")
        } else if (control.eventValue() == 7) {
            basic.showString("D")
        } else if (control.eventValue() == 9) {
            basic.showString("1")
        } else if (control.eventValue() == 11) {
            basic.showString("2")
            // 腰・反時計
            pins.digitalWritePin(DigitalPin.P16, 0)
            // 腰・時計
            pins.digitalWritePin(DigitalPin.P15, 1)
        } else if (control.eventValue() == 13) {
            basic.showString("3")
            pins.analogWritePin(AnalogPin.P15, 1023)
        } else if (control.eventValue() == 15) {
            basic.showString("4")
            pins.analogWritePin(AnalogPin.P15, 520)
        } else {
            pins.analogWritePin(AnalogPin.P15, 0)
        }
    }
})
let lastValue = 0
lastValue = 0
bluetooth.startLEDService()
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
basic.showString("GAMEPAD DEMO")
