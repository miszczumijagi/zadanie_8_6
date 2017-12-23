//scripts.js

var a = prompt('Enter value of variable a'),
	b = prompt('Enter value of variable b'),
	value = (a * a) - (2 * a * b) + (b * b);
console.log(value)
if (value >= 0) {
	console.log('plus result');
} else {
	console.log('minus result');
}
var itIsZero = value =  0 ? 'Variable is equal to 0' : 'Variable is not equal to 0'
console.log(itIsZero);