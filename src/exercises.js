/*
function subtractTwo(num) {
	return num - 2
}

function calculate() {
	const sumTotal = 4 + 5
	return subtractTwo(sumTotal)
}

calculate()
*/

/*
const elfFunctions = {
	attack() {
		return 'attack with ' + this.weapon
	},
}
function createElf(name, weapon) {
	let newElf = Object.create(elfFunctions)
	newElf.name = name
	newElf.weapon = weapon
	return newElf
}

const peter = createElf('Peter', 'stones')
console.log(peter.attack())
const sem = createElf('Sem', 'fire')
console.log(sem.attack())
*/

/*
// Constructor Functions
function Elf(name, weapon) {
	this.name = name
	this.weapon = weapon
}

const sam = new Elf('Sam', 'fires')
console.log(sam.name)
const Elf1 = new Function(
	'name',
	'weapon',
	`this.name = name;
	this.weapon = weapon;`
)

const sarah = new Elf1('Sarah', 'firework')
console.log(sarah)
*/

/*
// Constructor Functions
function Elf(name, weapon, tool) {
	this.name = name
	this.weapon = weapon
	this.tool = tool
}

Elf.prototype.attack = function () {
	return 'attack with ' + this.weapon
}
Elf.prototype.build = function () {
	return 'built with ' + this.tool
}

const peter = new Elf('Peter', 'stones')
console.log(peter.attack())
// const sam = new Elf('Sam', 'fire')
const sam = new Elf('Sam', 'fire', 'spade')
console.log(sam.attack())
console.log(sam.build())
*/

/*
// ES6 Class
class Elf {
	constructor(name, weapon) {
		this.name = name
		this.weapon = weapon
	}
	attack() {
		return 'attack with ' + this.weapon
	}
}

const peter = new Elf('Peter', 'stones')
console.log(peter instanceof Elf)
console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())
*/

/*
// new binding this
function Person(name, age) {
	this.name = name
	this.age = age
}

const person1 = new Person('Xavier', 55)
console.log(person1)

// implicit binding
const person = {
	name: 'Karen',
	age: 40,
	hi() {
		console.log('hi' + this.name)
	},
}

console.log(person)

// explicit binding
const person3 = {
	name: 'Karen',
	age: 40,
	hi: function () {
		console.log('hi' + this.setTimeout)
	}.bind(window),
}
console.log(person3)
console.log(person3.hi())

// arrow function
const person4 = {
	name: 'Karen',
	age: 40,
	hi: function () {
		var inner = () => {
			console.log('hi' + this.name)
		}
		return inner()
	},
}

console.log(person4.hi())
*/

/*
// Inheritance
class Elf {
	constructor(name, weapon) {
		this.name = name
		this.weapon = weapon
	}
	attack() {
		return 'attack with ' + this.weapon
	}
}

const fiona = new Elf('Fiona', 'ninja stars')
const ogre = { ...fiona }
console.log(ogre)
console.log(ogre.__proto__)
console.log(fiona.__proto__)
console.log(fiona === ogre)
// console.log(ogre.attack())
*/

/*
class Character {
	constructor(name, weapon) {
		this.name = name
		this.weapon = weapon
	}
	attack() {
		return 'attack with ' + this.weapon
	}
}

class Elf extends Character {
	constructor(name, weapon, type) {
		super(name, weapon)
		console.log(this)
		this.type = type
	}
}

class Ogre extends Character {
	constructor(name, weapon, color) {
		super(name, weapon)
		this.color = color
	}
	makeFort() {
		return 'strongest fort in the world made'
	}
}

const dolby = new Elf('Dolby', 'cloth', 'house')
console.log(dolby)
console.log(dolby.attack())
const shrek = new Ogre('Shrek', 'club', 'green')
console.log(shrek)
console.log(shrek.makeFort())
*/

/*
class MyArray {
	constructor() {
		this.length = 0
		this.data = {}
	}

	get(index) {
		return this.data[index]
	}

	push(item) {
		this.data[this.length] = item
		this.length++
		return this.length
	}

	pop() {
		const lastItem = this.data[this.length - 1]
		delete this.data[this.length - 1]
		this.length--
		return lastItem
	}

	delete(index) {
		const item = this.data[index]
		this.shiftItems(index)
		// return lastItem
	}

	shiftItems(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1]
		}
		delete this.data[this.length - 1]
		this.length--
	}
}

const newArray = new MyArray()
newArray.push('hi')
newArray.push('you')
newArray.push('!')
// console.log(newArray.get(0))
// newArray.pop()
// newArray.pop()
// newArray.delete(1)
newArray.delete(0)
newArray.push('are')
newArray.push('nice')
newArray.delete(1)
console.log(newArray)
*/
/*
function reverse(str) {
	// check input
	if (!str || str.length < 2 || typeof str !== 'string') {
		return 'hmm that it not good'
	}

	const backwards = []
	const totalItems = str.length - 1
	for (let i = totalItems; i >= 0; i--) {
		backwards.push(str[i])
	}
	console.log(backwards)

	return backwards.join('')
}

function reverse2(str) {
	return str.split('').reverse().join('')
}

// const reverse3 = (str) => [str].split('').reverse().join('')
const reverse3 = (str) => [...str].reverse().join('')

// reverse('Hi My name is Andrei')
console.log(reverse2('Hi My name is Andrei'))
console.log(reverse3('Hi My name is Andrei'))
*/

function mergeSortedArrays(array1, array2) {
	const mergedArray = []
	let array1Item = array1[0]
	let array2Item = array2[0]
	let i = 1
	let j = 1

	// Check input
	if (array1.length === 0) {
		return array2
	}
	if (array2.length === 0) {
		return array1
	}

	while (array1Item || array2Item) {
		if (!array2Item || array1Item < array2Item) {
			mergedArray.push(array1Item)
			array1Item = array1[i]
			i++
		} else {
			mergedArray.push(array2Item)
			array2Item = array2[j]
			j++
		}
	}

	return mergedArray
}

mergeSortedArrays([0, 3, 4], [4, 6, 30])
