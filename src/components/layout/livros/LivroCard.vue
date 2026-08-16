<script setup>
import { ref} from 'vue';
const props= defineProps(['capa', 'titulo', 'descricao','autor', 'id', 'link', 'categoria','livro', 'classe']);
import ButtonChild from '../ButtonChild.vue';
const mostrarDetalhes = ref(false)
//<i class="fa-regular fa-heart"></i>
const emit = defineEmits(['favoritar']);
function LivroFavoritado() {
  emit('favoritar', props.livro)
}
</script>


<template>

    <div class="livro-card" :class="classe">

      <div class="livro-int">
         <img :src="capa" alt="Capa do livro" class="capa-livro" />
      
           <ButtonChild class="button-" @clique="mostrarDetalhes = true">
              Ver mais
    </ButtonChild>
    </div>
    
    <Transition name="modal">
    <div class="modal-overlay" v-show="mostrarDetalhes" @click="mostrarDetalhes = false" >
      <div  class="modal"  @click.stop>
       <div class="capa-autor">
           
         <img :src="capa" alt="Capa do livro" class="capa-livro">
       <p>
        {{ autor }}
       </p>
       <p>
        Categoria: {{ categoria }}
       </p>
       </div>

       <div class="descricao">
        <h3>
            {{ titulo }}
        </h3>
        <p class="pi">
       {{ descricao }} 
        </p>
          
        
              <p id="icone">
      <i class="fa-solid fa-circle-question"></i> Os materiais são links externos fornecidos apenas para fins educacionais. 
 </p>
       <div>
        <div class="coisa">
         <div>
         <a :href="link" target="_blank" rel="noopener noreferrer">Acessar material</a>
         </div>

        
         <div class="tooltip">
         <ButtonChild id="coracao" @clique="LivroFavoritado" > 
          <i class="fa-regular fa-heart"></i>
         </ButtonChild>
          <span class="tooltip-texto">Adicionar aos favoritos</span>
         </div>
           
    </div>
      
         
        <ButtonChild class="button-" @clique="mostrarDetalhes = false">
        Fechar
      </ButtonChild>
             </div>

                </div>
            </div>
        </div>
      </Transition>
    

    </div>
</template>


<style scoped>

.tooltip {
  position: relative;
  display: inline-block;
}
.tooltip-texto {
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: #135F7D;
  color: white;
  padding: 1vw;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.2s ease;
   transition-delay: 0.1s; 
   font-family: "Josefin Sans", sans-serif;
   font-size: 1.2rem;
}

.tooltip:hover .tooltip-texto {
  opacity: 1;
  visibility: visible;
   transition-delay: 0.3s; 
}
.modal-enter-from{
  opacity: 0;
  transform: scale(0.8);
}
.modal-enter-active {
  transition: opacity 0.3s ease;
  
}
.modal-enter-active .modal {
  transition: transform 0.3s ease;
}
.modal-enter-to .modal {
  transform: scale(1);
}

.modal-leave-from{
  transform: scale(1);
}
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-leave-active .modal {
  transition: transform 0.3s ease;
   transition: all .4s ease;
}
.modal-leave-to .modal {
  opacity: 0;
}

.coisa{
  display: flex;
  justify-content: space-between;
}
#icone{
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.3rem;
}
#coracao{
  padding: 0.8vw;
     cursor: pointer;
    margin-top: 1vw;
}

#coracao:hover{
  background-color: white;
  color: #135F7D;
  border: 1px solid #135F7D;
  transform: scale(1.1);
}
a{
  color: #135F7D;
   border-radius: 18px;
   font-family: "Josefin Sans", sans-serif;
   font-size: 1.4rem;
   padding: 8px;
   cursor: pointer;
  margin: 1vw 0 1vw 0;
  border: 1px solid #135F7D ;
  display: flex;
  width: 100%;
 justify-content: center;
  
 
}
a:hover{
  background-color: #187fa8;
  transition: 0.8s;
  color: white;
  border: none;
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
  font-family: "Josefin Sans", sans-serif;
}

button:hover {
  box-shadow: 0 8px 10px rgba(95, 61, 196, 0.25);
  transform: scale(1,1);
  background-color: #1486b3;
}
.livro-card {
  border: 2px solid rgba(165, 165, 165, 0.2);
  padding: 1rem;
  border-radius: 20px;
  background: white;
  box-shadow: 0 10px 30px rgba(112, 112, 112, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 70%;
  justify-self: center;
  box-sizing: border-box;
       
}

.livro-card:hover { 
  box-shadow: 0 14px 40px rgba(47, 47, 48, 0.18);
  
}
.carrossel{
   border: 2px solid rgba(95, 94, 95, 0.2);
  padding: 1vw;
  border-radius: 20px;
  background: white;
   width: 350px;
    justify-self: center;
     box-sizing: border-box;
     margin: 0.8vw;
     
}
.carrossel:hover{
    box-shadow: 0 10px 30px #2c3133;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
 
}
.capa-livro {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 1rem;
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
   font-size: 1.2rem;
}
.modal h3{
   font-family: "Josefin Sans", sans-serif;
   color: black;
   font-size: 1.6rem;
}
.modal img {
  width: 100%;
  max-height: 600px;
  object-fit: cover;
  border-radius: 16px;
  margin: 1rem 0;
}


/*PARTE DO CSS RESPONSIVO*/
@media (max-width: 732px) {
  .tooltip-texto {
   font-size: 1rem;
}
  .capa-livro {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  
}
.livro-card {
  border: 2px solid rgba(165, 165, 165, 0.2);
  padding: 1rem;
  border-radius: 10px;
  background: white;
  box-shadow: 0 10px 30px rgba(112, 112, 112, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 60%;
  justify-self: center;
  box-sizing: border-box;
       
}
button {
  width: 100%;
  font-size: 1.1rem;
  border-radius: 8px;
  padding: 5px;
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
  border-radius: 20px;
  width: 100%;
  max-width: 280px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
}
.modal p {
  color: #333;
  margin: 0.75rem 0;
  line-height: 1.6;
   font-size: 1rem;
}
#icone{
  font-size: 1.1rem;
}
.modal h3{
   font-family: "Josefin Sans", sans-serif;
   color: black;
   font-size: 1.4rem;
}
.modal img {
  width: 100%;
  max-width: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin: 1rem 0;
 
}
a{
   border-radius: 12px;
   font-size: 1rem;
   padding: 5px;
}
  #coracao{
  padding: 10px;
  border-radius: 20px;
  margin: 0 0 20px 0;
}



 }

</style>