<script setup>
import { ref} from 'vue';
import ButtonChild from '../ButtonChild.vue';
const mostrarDetalhes = ref(false)
//<i class="fa-regular fa-heart"></i>
const emit = defineEmits(['remover']);
const props = defineProps({
    livros: Object
})
function removerLivro() {
  emit('remover', props.livros.id)
}
</script>


<template>

    <div class="livro-card" :class="classe">

      <div class="livro-int">
         <img :src="livros.capa" alt="Capa do livro" class="capa-livro" />

           <ButtonChild class="button-" @clique="mostrarDetalhes = true">
              Ver mais
    </ButtonChild>
    </div>

    <Transition name="modal">
    <div class="modal-overlay" v-show="mostrarDetalhes" @click="mostrarDetalhes = false" >
      <div  class="modal"  @click.stop>
       <div class="capa-autor">

         <img :src="livros.capa" alt="Capa do livro" class="capa-livro-modal">
       <p>
        {{ livros.autor }}
       </p>
       <p>
        Categoria: {{ livros.categoria }}
       </p>
       </div>

       <div class="descricao">
        <h3>
            {{ livros.titulo }}
        </h3>
        <p class="pi">
       {{livros.descricao }}
        </p>


              <p id="icone">
      <i class="fa-solid fa-circle-question"></i> Os materiais são links externos fornecidos apenas para fins educacionais.
 </p>
       <div>
        <div class="coisa">
         <div>
         <a :href="livros.link" target="_blank" rel="noopener noreferrer">Acessar material</a>
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

    <ButtonChild id="oq" @clique="removerLivro">
         Remover Livro
    </ButtonChild>
</template>




<style scoped>

 #oq{
  display: flex;
  justify-content: center;
   width: 100%;
    max-width: 360px;
    padding: 0.5vw;
    border-radius: 15px;
    margin: 1.7vw;
}

.carrinho-flutuante {
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #8a00db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  z-index: 999;
  transition: transform 0.2s ease, background 0.2s ease;
}

.carrinho-flutuante:hover {
  transform: scale(1.08);
  background: #6d00ad;
}

.icone-carrinho {
  font-size: 1.8rem;
}

.notificacao {
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 24px;
  height: 24px;
  padding: 0 6px;
  border-radius: 999px;
  background: #ff00aa;
  color: white;
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
}
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
.agro{
  background-color: green;
  color: green;
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
  border: 2px solid rgba(148, 148, 148, 0.2);
  padding: 1rem;
  border-radius: 20px;
  background: white;
  box-shadow: 0 10px 30px rgba(134, 134, 134, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 300px;
  height: auto;
  justify-self: center;
  box-sizing: border-box;

}

.livro-card:hover {
  box-shadow: 0 14px 40px rgba(46, 46, 46, 0.18);

}
.carrossel{
   border: 2px solid rgba(123, 81, 201, 0.2);
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
  max-width: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
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
/*********************/
/*PARTE DO CSS RESPONSIVO*/
@media (max-width: 732px) {
   #oq{
  display: flex;
  justify-content: center;
   width: 100%;
    max-width: 360px;
    padding: 7px;
    border-radius: 10px;
    margin: 1.7vw;
     margin-bottom: 10px;
}
    .livro-card {
  border: 2px solid rgba(148, 148, 148, 0.2);
  padding: 0.6rem;
  border-radius: 10px;
  background: white;
  box-shadow: 0 10px 30px rgba(134, 134, 134, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 140px;
  height: auto;
   margin-bottom: 10px;
}
button {
  width: 100%;
  padding: 5px;
  border: none;
  border-radius: 7px;
  background-color: #135F7D ;
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  margin-top: 0.6rem;
  font-family: "Josefin Sans", sans-serif;
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
  max-width: 300px;
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
.modal h3{
   font-family: "Josefin Sans", sans-serif;
   color: black;
   font-size: 1.4rem;
}

.coisa{
  display: flex;
  justify-content: space-between;
  padding: 8px;
  font-size: 1rem;
}
a{
  color: #135F7D;
   border-radius: 10px;
   font-family: "Josefin Sans", sans-serif;
   font-size: 1rem;
   padding: 8px;
  margin: 0;
  display: block;
  width: 100%;
 justify-content: center;


}
#icone{
  font-family: "Josefin Sans", sans-serif;
  font-size: 1rem;
}
  }

</style>
