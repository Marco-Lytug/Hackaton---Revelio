<script setup>
import { ref } from 'vue';
defineProps(['capa', 'titulo', 'descricao','autor', 'id', 'link', 'categoria']);
import ButtonChild from '../ButtonChild.vue';
defineEmits(['fechar'])
const mostrarDetalhes = ref(false)

</script>


<template>
    <div class="livro-card">
         <img :src="capa" alt="Capa do livro" class="capa-livro" />
      
           <ButtonChild class="button-" @clique="mostrarDetalhes = true">
              Ver mais
    </ButtonChild>

    <div class="modal-overlay" v-if="mostrarDetalhes" @click="mostrarDetalhes = false" >
      <div  class="modal"  @click.stop>
       <div class="capa-autor">

         <img :src="capa" alt="Capa do livro" class="capa-livro">
       <p>
        {{ autor }}
       </p>
       </div>

       <div class="descricao">
        <h3>
            {{ titulo }}
        </h3>
        <p>
       {{ descricao }}
        </p>
        

         <a :href="link" target="_blank" rel="noopener noreferrer">Acessar material</a>
         
       </div>
   
        <ButtonChild class="button-" @clique="mostrarDetalhes = false">
        Fechar
      </ButtonChild>
            </div>
        </div>
       
    

    </div>
</template>


<style scoped>
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
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: absolute;
}

.modal p {
  color: #333;
  margin: 0.75rem 0;
  line-height: 1.6;
}

.modal img {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 16px;
  margin: 1rem 0;
}

</style>