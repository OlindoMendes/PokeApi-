<template>
  <div class="list">
    <div
      class="card"
      v-for="(pokemon, index) in pokemons"
      :key="index"
      @click="setPokemonUrl(pokemon.url)"
    >
      <img
        :src="spritesIMG + pokemon.id + '.png'"
        width="120"
        height="120"
        alt=""
      />
      <div class="container">
        <h4>
          <p>{{ pokemon.name }}</p>
        </h4>
      </div>
    </div>
    <div id="scroll-trigger" ref="infinitescrolltrigger">
      <i class="fas fa-spinner fa-spin"></i>
    </div>
  </div>
</template>

<script>
import { usePokemonsStore } from "@/store/index";
import { reactive, onMounted } from "vue";
export default {
  props: ["spritesIMG", "urlAPI"],
  emits:['setPokemonUrl'],
  setup(_, ctx) {
    const store = usePokemonsStore();
    
    const data = reactive({
      pokemons: [],
      nextUrl: "",
      currentUrl: "",
    });

    // function scrollTrigger() {
    //   const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.intersectionRatio > 0 && this.nextUrl) {
    //         this.next();
    //       }
    //     });
    //   });
    // }

    function setPokemonUrl(url) {
      console.log('url', url)
        ctx.emit('setPokemonUrl', url);
      }

    onMounted(() => {
      console.log('carregou')
      store.Request_Pokemons();
      // scrollTrigger()
      
      // storePokemons.Request_Pokemons();
    });

    return {
      data,
      store,
      pokemons: store.getPokemons,
      // scrollTrigger,
      setPokemonUrl
    };
  },

  // data: () => {
  //   return {
  //     pokemons: [],
  //     nextUrl: "",
  //     currentUrl: "",
  //   };
  // },
  // computed:{
  //   generateID(index){
  //     const newID = []
  //     console.log(index)
  //     for(let ID = 0; ID <151; ID++ ){
  //       index = ('000'+ID).slice(-4)
  //       newID.push(index)
  //     }
  //     return newID
  //   }
  // },
  //   methods: {
  //     fetchPokemonData() {
  //       let myRequest = new Request(this.currentUrl);
  //       fetch(myRequest)
  //         .then((response) => {
  //           if (response.status === 200) return response.json();
  //         })
  //         .then((data) => {
  //           // console.log("Data ", data)
  //           this.nextUrl = data.next;
  //           data.results.forEach((pokemon) => {
  //             // console.log(pokemon)
  //             pokemon.id = pokemon.url
  //               .split("/")
  //               .filter((part)=> {
  //                 // console.log('part', part)
  //                 return !!part;
  //               })
  //               .pop();
  //               // console.log(pokemon.id)
  //             this.pokemons.push(pokemon);
  //           });
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     },

  //       observer.observe(this.$refs.infinitescrolltrigger);
  //     },
  //     next() {
  //       this.currentUrl = this.nextUrl;
  //       this.fetchPokemonData();
  //     },
  //     
  //   },
  //   created() {
  //     this.currentUrl = this.urlAPI;
  //     this.fetchPokemonData();
  //   },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap");

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
  width: 100%;
  max-width: 510px;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -60px;
  width: 120px;
  height: 120px;
  background-color: #ffcb04;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}
article {
  height: 150px;
  background-color: #efefef;
  text-align: center;
  text-transform: capitalize;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}
h3 {
  margin: 0;
}
#scroll-trigger {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  font-size: 2rem;
  color: #efefef;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: #fff;
  cursor: pointer;
  border-radius: 5px;
  align-items: center;
  font-family: "Roboto Slab";
  font-size: 20px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  margin: 20px;
  padding: px 16px;
  align-items: center;
}
</style>
