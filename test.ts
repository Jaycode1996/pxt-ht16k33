HT16K33.setAddress(HT16K33_I2C_ADDRESSES.ADD_0x70)
HT16K33.render([0, 0, 0, 0, 0, 0, 0, 0])
HT16K33.setBrightness(15)
HT16K33.render([255, 255, 255, 255, 255, 255, 255, 255])
basic.pause(1000)

basic.forever(function () {
    HT16K33.setBrightness(15)
    HT16K33.render([60, 66, 165, 129, 153, 165, 66, 60])
    basic.pause(1000)
})
