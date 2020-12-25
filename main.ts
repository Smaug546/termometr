let Temperatura = 0
basic.forever(function () {
    Temperatura = input.temperature()
    basic.pause(2000)
})
basic.forever(function () {
    basic.showString("Tempratura:")
    basic.showNumber(Temperatura)
})
