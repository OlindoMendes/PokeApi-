<template>
  <div class="container">
    <img
      alt="Vue logo"
      src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
    />
    {{showDetail}}
    <PokemonSearch :urlAPI="urlAPI" @setPokemonUrl="setPokemonUrl" />
    <PokemonList
      :spritesIMG="spritesIMG"
      :urlAPI="urlAPI"
      @setPokemonUrl="setPokemonUrl"
    />
    <PokemonDetail
      v-if="showDetail"
      :pokemonUrl="pokemonUrl"
      :spritesIMG="spritesIMG"
      @closeDetail="closeDetail"
    />
  </div>
</template>
<script>
// import { mapActions } from 'vuex';
import PokemonSearch from "./PokemonSearch.vue";
import PokemonList from "./PokemonList.vue";
import PokemonDetail from "./PokemonDetail.vue";
// import { usePokemonsStore } from "@/store/index";
import { reactive, toRef, toRefs } from "vue";


export default {
  components: {
  PokemonSearch,
  PokemonList,
  PokemonDetail
},
  setup() {
    
    const data = reactive({
      spritesIMG:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      urlAPI: "https://pokeapi.co/api/v2/pokemon/",
      pokemonUrl: "",
      showDetail: false,
    });
    const {showDetail, pokemonUrl, spritesIMG, urlAPI } = toRefs(data)

    function setPokemonUrl(url) {
      pokemonUrl.value = url;
      showDetail.value = true;
      console.log(showDetail.value)
    }

    function closeDetail() {
      pokemonUrl.value  = "";
      showDetail.value = false;
    }


    return {
      spritesIMG,
      urlAPI,
      pokemonUrl,
      showDetail,
      setPokemonUrl,
      closeDetail,
    
    };
  },
};
//   data: () => {
//     return {
//       //raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png
//       spritesIMG:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
//       urlAPI: "https://pokeapi.co/api/v2/pokemon/",
//       pokemonUrl: "",
//       showDetail: false
//     };
//   },
//  
//   created() {
//        this.pokemons();
//     },
//   methods: {

//     setPokemonUrl(url) {
//       this.pokemonUrl = url;
//       this.showDetail = true;
//     },
//     closeDetail() {
//       this.pokemonUrl = "";
//       this.showDetail = false;
//     }
//   }
// };
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: calc(100% - 20px);
  min-height: calc(100vh - 20px);
  //background: #c3c3c3;

  font-family: "Acme", arial;
  font-size: 1rem;
  font-weight: normal;
}

img {
  margin: 30px;
}
h1 {
  color: #efefef;
}
</style>
