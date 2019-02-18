const school = 'cod3r'
console.log(school.charAt(4)) // the letter in nth position of the string (starts at zero)
console.log(school.charCodeAt(3)) // the ACSCHI value of the letter at the parameter
console.log(school.indexOf("3")) // return the index where the parameter is located
console.log(school.substring(1)) // returns the string starting at n value.
console.log(school.substring(0, 3)) // returns the string starting at n value and finishng at n2 value.
console.log("escola ".concat(school.concat('!')))
console.log("Escola " + school + "!")
console.log(school.replace(3, 'e'))
console.log("paula,vinicius,alemao".split(','))


// template strings

const name = 'rebbeca'
const concate = "hello " + name
const template = `
    Hello
    ${name}!`
console.log(concate, template)
console.log(`1 + 1 = ${1+1}`)
const up = texto => texto.toUpperCase()
console.log(`Eeii... ${up('cuidado')} `) 


