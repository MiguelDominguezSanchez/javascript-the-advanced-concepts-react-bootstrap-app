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
