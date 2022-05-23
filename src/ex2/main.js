// Implement the `Main` class here
console.log("exercise 2 started")
const pokemonApi = "https://pokeapi.co/"

class Main {
  constructor() {
    this.name = "Main"
    this.age = 0
  }
}

class ItemManager {
  constructor(items) {
    this.items = items
  }

  getPokemons() {
    return this.items
  }

  removePokemon(pokemon) {
    this.items = this.items.filter((item) => item.name !== pokemon.name)
  }

  addPokemon(pokemon) {
    this.items.push(pokemon)
  }
}

const main = new Main()

document.addEventListener("DOMContentLoaded", function () {
  // you should create an `init` method in your class
  // the method should add the event listener to your "add" button
  main.init()
})
