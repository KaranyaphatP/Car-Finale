def _45():
    pins.analog_write_pin(AnalogPin.P12, 0)
    pins.analog_write_pin(AnalogPin.P13, 200)
    pins.analog_write_pin(AnalogPin.P14, 0)
    pins.analog_write_pin(AnalogPin.P15, 1023)
def _90():
    pins.analog_write_pin(AnalogPin.P12, 0)
    pins.analog_write_pin(AnalogPin.P13, 1023)
    pins.analog_write_pin(AnalogPin.P14, 0)
    pins.analog_write_pin(AnalogPin.P15, 1023)
def _225():
    pins.analog_write_pin(AnalogPin.P12, 1023)
    pins.analog_write_pin(AnalogPin.P13, 0)
    pins.analog_write_pin(AnalogPin.P14, 300)
    pins.analog_write_pin(AnalogPin.P15, 0)
def _270():
    pins.analog_write_pin(AnalogPin.P12, 1023)
    pins.analog_write_pin(AnalogPin.P13, 0)
    pins.analog_write_pin(AnalogPin.P14, 1023)
    pins.analog_write_pin(AnalogPin.P15, 0)
def _180():
    pins.analog_write_pin(AnalogPin.P12, 0)
    pins.analog_write_pin(AnalogPin.P13, 500)
    pins.analog_write_pin(AnalogPin.P14, 500)
    pins.analog_write_pin(AnalogPin.P15, 0)
def _0():
    pins.analog_write_pin(AnalogPin.P12, 500)
    pins.analog_write_pin(AnalogPin.P13, 0)
    pins.analog_write_pin(AnalogPin.P14, 0)
    pins.analog_write_pin(AnalogPin.P15, 500)

def on_received_value(name, value):
    global angle
    angle = value
radio.on_received_value(on_received_value)

def _135():
    pins.analog_write_pin(AnalogPin.P12, 0)
    pins.analog_write_pin(AnalogPin.P13, 1023)
    pins.analog_write_pin(AnalogPin.P14, 0)
    pins.analog_write_pin(AnalogPin.P15, 300)
def _null():
    pins.analog_write_pin(AnalogPin.P12, 0)
    pins.analog_write_pin(AnalogPin.P13, 0)
    pins.analog_write_pin(AnalogPin.P14, 0)
    pins.analog_write_pin(AnalogPin.P15, 0)
def _315():
    pins.analog_write_pin(AnalogPin.P12, 300)
    pins.analog_write_pin(AnalogPin.P13, 0)
    pins.analog_write_pin(AnalogPin.P14, 1023)
    pins.analog_write_pin(AnalogPin.P15, 0)
mode = 0
angle = 0
radio.set_group(118)
basic.show_icon(IconNames.TARGET)
angle = 1000

def on_forever():
    if mode == 0:
        if angle == 0:
            _0()
        elif angle == 45:
            _45()
        elif angle == 90:
            _90()
        elif angle == 135:
            _135()
        elif angle == 180:
            _180()
        elif angle == 225:
            _225()
        elif angle == 270:
            _270()
        elif angle == 315:
            _315()
        elif angle == 1000:
            _null()
        else:
            pass
basic.forever(on_forever)

def on_forever2():
    if mode == 1:
        pass
basic.forever(on_forever2)
