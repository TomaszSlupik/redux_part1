// 1. Wywołanie funkcji

function greeting() {
    return ('Cześć')
}

let msg = greeting

console.log(msg())
console.log(greeting())

// Funkcja z parametrem 

function testOne(year) {
    console.log(`Masz ${year} lat`)
}

testOne(25)

// Funkcja wyższego rzędu 
let number = [1, 2, 3]

console.log(number.map(el => el * 20))

// Połączeie 

let firstName = '    Wojciech     '

console.log(`Cześć ${firstName.trim()}. Miłego dnia!`)

// lodash

import {
    compose,
    pipe
} from 'lodash/fp'

const trim = (name) => name.trim()
const upperCase = (name) => name.toUpperCase()
const genereteMsg = (name) => `Cześć ${name}`

const newFunction = compose(genereteMsg, upperCase, trim)

console.log(newFunction('Filip'))

const twoFunction = pipe(trim, upperCase, genereteMsg)
console.log(twoFunction('Katarzyna'))

// Zamiana wartości - I sposób

const personeOne = {
    firstname: 'Krystian',
    age: 22
}
const peroneChange = Object.assign({}, personeOne, {
    firstname: 'Leszek'
})

console.log(personeOne)
// console.log(peroneChange)

// Zamiana wartości - II sposób
const personeTwoChange = {
    ...personeOne,
    firstname: 'Ola',
    age: 21
}

console.log(personeTwoChange)

// Zamiana wartości - III sposób - biblioteka immer

import {
    produce
} from 'immer'
const personThree = {
    firstname: 'Leszek',
    age: 33,
    company: {
        country: 'Poland',
        city: 'Warszawa'
    }
}

const personThreeChange = produce(personThree, (draftState) => {
    draftState.firstname = 'Kacper'
    draftState.company.city = 'Kraków'
})

console.log(personThree)
console.log(personThreeChange)


// Dodawanie czegos

const food = ['jabłko', 'banan']

const newFood = [...food, 'gruszka']

console.log(food)
console.log(newFood)

// Dodanie czegoś w konkretne miejsce:

const numberId = [10, 20, 30, 40, 50, 60]

const index = numberId.indexOf(30)

const add100 = [...numberId.slice(0, index), 100, ...numberId.slice(index)]

console.log(add100)

// Update 
const drink = ['kawa', 'herbata', 'czekolada']

const updateDrink = drink.map(el => el === 'herbata' ? 'kakao' : el)
console.log(updateDrink)


// Remove
const coldDrink = ['fanta', 'cola', 'pepsi']

const coldDrinkDelete = coldDrink.filter(el => el !== 'cola')
console.log(coldDrinkDelete)


// Task One --change price and Rating
const book = {
    author: "Robert Kiyosaki",
    book: {
        name: "Rich Dad Poor Dad",
        price: "$8",
        rating: 4.7
    }
}

const newBook = produce(book, (draftState) => {
    draftState.book.price = "$10",
        draftState.book.rating = 5
})

console.log(newBook)

// Task Two - update book2 => book4
const arrayBook = ['Book1', 'Book2', 'Book3']

const newArrayBook = arrayBook.map(el => el === 'Book2' ? 'Book4' : el)
console.log(newArrayBook)

// Importowanie store i reducera

import store from './store/store'
import {
    addTask,
    completeTask
} from './store/tasks/action'
import {
    removeTask
} from './store/tasks/action'

import { fetchToDo } from './store/tasks/api'

store.dispatch(addTask('Uczyć się'))
console.log(store.getState())

// store.dispatch(removeTask(1))
// console.log(store.getState())


store.dispatch(completeTask(1))
console.log(store.getState())


store.dispatch(fetchToDo())
