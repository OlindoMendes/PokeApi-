import { defineStore } from "pinia";

export const usePokemonsStore = defineStore("pokemons", {
  state: () => ({ pokemons: [] }),
  getters: {
    getPokemons: (state) => state.pokemons,
  },
  actions: {
    Request_Pokemons() {
      let myRequest = new Request("https://pokeapi.co/api/v2/pokemon/");
      fetch(myRequest)
        .then((response) => {
          if (response.status === 200) return response.json();
        })
        .then((data) => {
          this.SET_POKEMONS(data.results);
          data.results.forEach((pokemon) => {
            pokemon.id = pokemon.url
              .split("/")
              .filter((part) => {
                return !!part;
              })
              .pop();
            this.pokemons.push(pokemon);
            
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    SET_POKEMONS(pokemons) {
      this.pokemons = pokemons;
    },
  },
});
