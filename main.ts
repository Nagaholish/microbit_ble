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
        . # . # .
        . . . . .
        # # # # #
        . # # # .
        `)
})
input.onButtonPressed(Button.A, function () {
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_B,
    EventBusValue.MICROBIT_EVT_ANY
    )
})
custom.onEvent(MyEnum.MyEventMES_4649, MyEnum.MyEventMES_4649, function () {
    serial.writeLine("invoke-myevent_mes-4649")
    serial.writeLine("" + (control.eventValue()))
})
custom.onEvent(MyEnum.MyEventMES_5963, MyEnum.MyEventMES_5963, function () {
    serial.writeLine("invoke-myevent_mes-5963")
    serial.writeLine("" + (control.eventValue()))
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_1_UP, function () {
    serial.writeLine("receive-mes-dpad-evt-1up" + ("" + control.eventValue()))
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    serial.writeLine("receive-button-b-evt-down " + ("" + control.eventValue()))
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_EVT_ANY, function () {
    serial.writeLine("receive-button-b-evt-any " + ("" + control.eventValue()))
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("invoke-button-b")
    serial.writeLine("" + (control.eventValue()))
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    serial.writeLine("receive-mes-dpad-evt-any " + ("" + control.eventValue()))
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY, function () {
    serial.writeLine("aaaaaaaaaaaa" + ("" + control.eventValue()))
})
basic.showLeds(`
    . . . . .
    . . # . .
    # # # # #
    . . # . .
    . . . . .
    `)
serial.writeLine("microbit-boot")
