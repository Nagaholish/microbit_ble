def on_bluetooth_connected():
    basic.show_leds("""
        # . . . #
                # # . # #
                # # # # #
                . # # # .
                . . # . .
    """)
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                # # # # #
                . # # # .
    """)
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def on_button_pressed_a():
    control.raise_event(EventBusSource.MICROBIT_ID_BUTTON_B,
        EventBusValue.MICROBIT_EVT_ANY)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_myeventmes_4649_mes_dpad_button_1_up():
    serial.write_line("receive-mes-dpad-evt-1up" + ("" + str(control.event_value())))
control.on_event(MyEnum.MYEVENTMES_4649,
    EventBusValue.MES_DPAD_BUTTON_1_UP,
    on_myeventmes_4649_mes_dpad_button_1_up)

def on_mes_dpad_controller_id_button_1_up():
    serial.write_line("receive-mes-dpad-evt-1up" + ("" + str(control.event_value())))
control.on_event(EventBusSource.MES_DPAD_CONTROLLER_ID,
    EventBusValue.MES_DPAD_BUTTON_1_UP,
    on_mes_dpad_controller_id_button_1_up)

def on_microbit_id_button_b_evt_down():
    serial.write_line("receive-button-b-evt-down " + ("" + str(control.event_value())))
control.on_event(EventBusSource.MICROBIT_ID_BUTTON_B,
    EventBusValue.MICROBIT_BUTTON_EVT_DOWN,
    on_microbit_id_button_b_evt_down)

def on_microbit_id_button_b_evt():
    serial.write_line("receive-button-b-evt-any " + ("" + str(control.event_value())))
control.on_event(EventBusSource.MICROBIT_ID_BUTTON_B,
    EventBusValue.MICROBIT_EVT_ANY,
    on_microbit_id_button_b_evt)

def on_button_pressed_b():
    serial.write_line("invoke-button-b")
    serial.write_line("" + str(control.event_value()))
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_mes_dpad_controller_id_microbit_evt():
    serial.write_line("receive-mes-dpad-evt-any " + ("" + str(control.event_value())))
control.on_event(EventBusSource.MES_DPAD_CONTROLLER_ID,
    EventBusValue.MICROBIT_EVT_ANY,
    on_mes_dpad_controller_id_microbit_evt)

def on_microbit_id_button_a_evt():
    serial.write_line("receive-test-evt-any " + ("" + str(control.event_value())))
control.on_event(EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY,
    on_microbit_id_button_a_evt)

basic.show_leds("""
    . . . . .
        . . # . .
        # # # # #
        . . # . .
        . . . . .
""")
serial.write_line("microbit-boot")