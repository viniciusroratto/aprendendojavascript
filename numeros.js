// learning the numbers type
const  weigth1 = 1.0
const weigth2 = Number('2.0')
console.log(Number.isInteger(weigth2))
console.log(Number.isInteger(weigth1))

const num1 = 20.81
const num2 = 6.32
const total = num1*weigth1 + num2*weigth2
const waverage = total / (weigth1 + weigth2)
console.log(waverage)
console.log(waverage.toFixed(2)) // two decimal numbers
console.log(waverage.toString()) // integer turn to string
console.log(waverage.toString(2)) // base 10 to base 2
console.log((waverage.toFixed(0)).toString(2))


// using the math object
const radius = 5.6
const area = Math.PI*Math.pow(radius, 2)
console.log(area.toFixed(2))
console.log(Math)

