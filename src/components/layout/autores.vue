<script setup>
import { ref } from 'vue';
defineProps(['foto', 'nome','biografia', 'id', 'principaisObras','autores']);
import ButtonChild from './ButtonChild.vue';
defineEmits(['fechar'])
const mostrarDetalhes = ref(false)
</script>

<template>
    <div class="autor-card">

      <div class="info-autor">
        <div class="esquerda-card">
        <p id="nome">
            {{ nome }}
        </p>
            <ButtonChild class="button-" @clique="mostrarDetalhes = true">
              Ver mais
    </ButtonChild>
    </div>

         <img :src="foto" alt="" class="foto-autor" />
      </div>
       
    </div>

    <div class="modal-overlay" v-if="mostrarDetalhes" @click="mostrarDetalhes = false" >
      <div  class="modal"  @click.stop>
       <div class="autor-modal">
          <div class="foto-nome">
         <img :src="foto" alt="Capa do livro" class="capa-livro">
       <p id="ui">
        {{ nome }}
       </p>
       
       </div>

      
       <div class="biografia">
        <p>
            {{ biografia }}
        </p>

        <p id="pi">
      Principais Obras:  {{ principaisObras }}
        </p>

       </div>

       <div> 
        <ButtonChild class="button-" @clique="mostrarDetalhes = false">
        Fechar
      </ButtonChild>
             </div>

                </div>
            </div>
        </div>
       

    
</template>

<style scoped>

#pi{
    color: #135F7D;
    font-weight: 600;
}
#ui{
    font-size: 1.8rem;
    color: black;
}
#nome{
    color: black;
    font-size: 1.5rem;
    text-align: center;
    margin: 10px;
   
}
.info-autor{
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
}
button {
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 999px;
  background-color: #135F7D ;
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.4rem;
  transition: all 0.3s ease;
  margin-top: 0.6rem;
  margin-top: auto;
  font-family: "Josefin Sans", sans-serif;
}

button:hover {
  box-shadow: 0 8px 10px rgba(95, 61, 196, 0.25);
  transform: scale(1,1);
  background-color: #1486b3;
}
.autor-card {
  border: 2px solid rgba(123, 81, 201, 0.2);
  padding: 1rem;
  border-radius: 20px;
  background: #F4E6CC;
  box-shadow: 0 10px 30px rgba(95, 61, 196, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.autor-card img {
   width: 120px;
   height: 120px;
   object-fit: cover;
   border-radius: 50%;
}
.autor-card:hover { 
  box-shadow: 0 14px 40px rgba(95, 61, 196, 0.18);
  transform: scale(1,1);
  
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  overflow: hidden;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 24px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
}
.modal p {
  color: #333;
  margin: 0.75rem 0;
  line-height: 1.6;
   font-size: 1.4rem;
}
.modal img {
  width: 100%;
  max-height: 600px;
  object-fit: cover;
  border-radius: 16px;
  margin: 1rem 0;
}


</style>
