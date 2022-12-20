<template>
  <div class="searchbar">
    <form @submit.prevent="setPokemonUrl">
      <input type="text" placeholder="Busque pelo nome ou ID do pokemon" v-model="searchvalue">
      <p class="legenda">O guia perfeito para quem quer caçar pokemon pelo mundo!</p>
    </form>
    <i class="fas fa-search" @click="setPokemonUrl"></i>
  </div>
</template>

<script>
  export default {
    props: [
      'urlAPI'
    ],
    data: () => {
      return {
        searchvalue: '',
      }
    },
    methods: {
      setPokemonUrl() {
        if(this.searchvalue !== '')
        console.log('search ', this.urlAPI + this.searchvalue)
          this.$emit('setPokemonUrl', this.urlAPI + this.searchvalue);
      }
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@1,100&family=Roboto+Slab:wght@300&display=swap');

.searchbar {
        position: relative;
        width: 100%;
        max-width: 510px;
        padding-bottom: 20px;
    }
    input {
      border: none;
      outline: none;
      border-radius: 5px;
      padding: 10px 40px 10px 10px;
      width: calc(100% - 50px);
      font-size: 1rem;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
                  font-family: 'Barlow', sans-serif;
    }
    .legenda {
        color: rgb(143, 140, 140);
    }
    i {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 1.25rem;
      color: #0A2E50;
      cursor: pointer;
    }
</style>
