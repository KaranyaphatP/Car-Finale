function Turn_Right () {
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 500)
}
function _null () {
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
}
function Forward () {
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, 500)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 500)
}
function _315 () {
    pins.analogWritePin(AnalogPin.P12, 300)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P15, 0)
}
function _225 () {
    pins.analogWritePin(AnalogPin.P12, 1023)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 300)
    pins.analogWritePin(AnalogPin.P15, 0)
}
function _0 () {
    pins.analogWritePin(AnalogPin.P12, 500)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 500)
}
function _180 () {
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, 500)
    pins.analogWritePin(AnalogPin.P14, 500)
    pins.analogWritePin(AnalogPin.P15, 0)
}
function Turn_Left () {
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, 500)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
}
function _45 () {
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, 200)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 1023)
}
function _90 () {
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, 1023)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 1023)
}
radio.onReceivedValue(function (name, value) {
    if (name == "servo") {
        pins.servoWritePin(AnalogPin.P16, value)
    }
    if (name == "Angle") {
        angle = value
    } else if (name == "mode") {
        if (value == 1) {
            mode = 1
            basic.showString("M")
            led.stopAnimation()
        } else if (value == 0) {
            mode = 0
            basic.showString("A")
            led.stopAnimation()
        }
    }
})
function _135 () {
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, 1023)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 300)
}
function _270 () {
    pins.analogWritePin(AnalogPin.P12, 1023)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P15, 0)
}
let Right_Sensor = 0
let Left_Sensor = 0
let Direction2 = 0
let Front_Sensor = 0
let mode = 0
let angle = 0
radio.setGroup(118)
angle = 1000
mode = 1
let servo = 90
basic.showString("M")
led.stopAnimation()
basic.forever(function () {
    if (Front_Sensor == 1) {
        Direction2 = 0
    } else {
        if (Left_Sensor == 0 && Right_Sensor == 0) {
            Direction2 = 1
        }
        if (Left_Sensor == 1 && Right_Sensor == 0) {
            Direction2 = 3
        }
        if (Left_Sensor == 0 && Right_Sensor == 1) {
            Direction2 = 2
        }
        if (Left_Sensor == 1 && Right_Sensor == 1) {
            Direction2 = 0
        }
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) > 500) {
        Front_Sensor = 0
    } else {
        Front_Sensor = 1
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 300) {
        Left_Sensor = 1
    } else {
        Left_Sensor = 0
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 300) {
        Right_Sensor = 1
    } else {
        Right_Sensor = 0
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (mode == 1) {
        if (angle == 0) {
            _0()
        } else if (angle == 45) {
            _45()
        } else if (angle == 90) {
            _90()
        } else if (angle == 135) {
            _135()
        } else if (angle == 180) {
            _180()
        } else if (angle == 225) {
            _225()
        } else if (angle == 270) {
            _270()
        } else if (angle == 315) {
            _315()
        } else if (angle == 1000) {
            _null()
        }
    }
})
basic.forever(function () {
    if (mode == 0) {
        if (Direction2 == 0) {
            _null()
        } else if (Direction2 == 1) {
            Forward()
        } else if (Direction2 == 2) {
            Turn_Right()
        } else if (Direction2 == 3) {
            Turn_Left()
        }
    }
})
