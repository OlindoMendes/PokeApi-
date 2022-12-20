<template>
    <div class="detail">
      <i v-if="showDetail" class="fas fa-spinner fa-spin"></i>
      
      <div class="detail-view card" v-if="pokemon.name">
        
        <div v-if="pokemon" class="image">
          <img :src="spritesIMG + pokemon.id + '.png'" alt="">
        </div>
        <div v-if="pokemon" class="data card-body">
          <h2 class="card-title">{{ pokemon.name }}</h2>
          <div class="property">
            <div class="left destaq">Skills overall</div>
            <div class="right">{{ pokemon.base_experience }} XP</div>
          </div>
         
          <div class="property">
            <div class="left destaq">Altura</div>
            <div class="right">{{ pokemon.height / 10 }} m</div>
          </div>
          <div class="property">
            <div class="left  destaq">Peso</div>
            <div class="right">{{ pokemon.weight / 10 }} kg</div>
          </div>
          <h3> Tipo</h3>
          <div class="types">
            <div class="type" 
              v-for="(value, index) in pokemon.types"
              :key="'value'+index"><span :class="value.type.name">
              {{ value.type.name }}
              </span>
            </div>
          </div>
          <h3>Habilidades</h3>
          <div class="abilities">
            <div class="ability" 
              v-for="(value, index) in pokemon.abilities"
              :key="index">
              {{ value.ability.name }}
            </div>
            <div class="right inactive">{{movesPokemons}}</div>
          </div>        
        </div>
        <h2 v-else><br> Pokemon não encontrado! <hr/><h4>Certifique-se que escreveu corretamente...</h4></h2>
            
        <button class="close" @click="closeDetail"> Fechar</button>
      </div>
      
    </div>
  </template>
  
  <script>
    export default {
      props: [
        'pokemonUrl',
        'spritesIMG'
      ],
      props:{
        pokemonUrl:{
          type: String,
          required: true
        },
        spritesIMG:{
          type: String,
          required: true,
          default:()=> ({})
        },
      },
      data: () => {
        return {
          showDetail: false,
          pokemon: {}
        }      
      },
      computed: {
        movesPokemons(){
          return this.pokemon?this.pokemon.moves.map(item => ' ' + item.move.name).toString(): {}
        }
      },
      methods: {
        fetchData() {
          let req = new Request(this.pokemonUrl);
          fetch(req)
            .then((resp) => {
              if(resp.status === 200)
                return resp.json();
            })
            .then((data) => {
              
              this.pokemon = data;
              this.showDetail = true;
            })
            .catch((error) => {
              console.log(error);
            }).finally(()=>{
              this.showDetail = false;
            })
        },
        closeDetail() {
          this.$emit('closeDetail');
        }
      },
      created() {

        this.fetchData();
      }
    }
  </script>
  
  <style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');      .type {
              .grass {background:rgb(3, 139, 44) !important;}
              .poison {background:rgb(74, 7, 105) !important;}
              .water {background:rgb(8, 135, 219) !important;}
              .dragon {background:rgb(27, 2, 68) !important;}
              .ice {background:rgb(78, 199, 255) !important;}
              .flying {background:rgb(145, 215, 255) !important;}
              .fire {background:rgb(238, 135, 17) !important;}
              .ghost {background:rgb(74, 52, 87) !important;}
              .fighting {background:rgb(122, 0, 0) !important;}
              .normal {background:rgb(104, 104, 104) !important;}
              .psychic {background:rgb(195, 0, 255) !important;}
              .bug {background:rgb(52, 87, 6) !important;}
              .dark {background:rgb(43, 43, 43) !important;}
              .steel {background:rgb(116, 116, 116) !important;}
              .fairy {background:rgb(248, 165, 237) !important;}
              .eletric {background:rgb(255, 217, 1) !important;}
              .rock {background:rgb(88, 95, 100) !important;}
              .ground {background:rgb(92, 70, 70) !important;}
          }
      
      i.fa-spinner {
          text-align: center;
      }
    .detail {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      position: fixed;
      top: 0;
      left: 0;
      padding: 90px 10px 10px;
      //width: calc(100% - 20px);
      // height: calc(100vh - 20px);
      width: 100%;
      height: 100vh;
      background: rgba(10, 7, 0, 0.562);
  
      
  
      
    }
    .detail-view {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 90%;
        padding: 50px 0 0;
        position: relative;
        max-width: 510px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 15px 30px rgba(0,0,0,.2),
                    0 10px 10px rgba(0,0,0,.2);
      
        
  
        
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
          box-shadow: 0 15px 30px rgba(0,0,0,.2),
                      0 10px 10px rgba(0,0,0,.2);
        }
  
        h2 {
          text-transform: capitalize;
          font-family: 'Josefin Sans', sans-serif;

        }

        h4 {
         
          font-family: 'Josefin Sans', sans-serif;

        }
  
        .data {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          width: 100%;
          margin-bottom: 40px;
  
          
  
         
        }.property {
            width: 90%;
            max-width: 400px;
            border-bottom: 1px solid #ccc;
            margin-bottom: 10px;
  
            
          }.left { float: left; }
            .right { float: right; }
      h3 {
            width: 90%;
            max-width: 400px;
            border-bottom: 1px solid #ccc;
          }
  
          .types, .abilities {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            width: 90%;
            max-width: 400px;
  
            
          }
          .type { 
              // color: rgb(17, 67, 182);
              margin: 0 0 10px 0;
              padding: 5px 10px;
              font-weight: bold;
              font-size: 1rem;
              letter-spacing: 2px;
               text-transform: capitalize;
                  span {
                      color: #ffffff !important;            
                      padding: 10px 14px;
                      border-radius: 29px;   
                  }
              }
      .ability {
              color: rgb(10, 119, 10);
              margin: 0 10px 10px 0;
              border-radius: 20px;
              padding: 5px 10px;
              font-weight: bold;
              font-size: 1rem;
              letter-spacing: 2px;
              text-transform: capitalize;
              word-wrap: none;
              word-break: keep-all;
              background-color: #ffffff;
              border: 3px solid;
            }
  
             
            
    .close {
          outline: none;
          border: none;
          border-radius: 5px;
          background-color: #C73015;
          color: #efefef;
          padding: 10px 20px;
          margin-bottom: 20px;
          font-size: 1.2rem;
          cursor: pointer;
        }
    i {
        font-size: 2rem;
        color: #efefef;
      }
      .destaq {
          font-weight: bold;
          
      }
      .inactive {
          display: none;
      }
  </style>
  