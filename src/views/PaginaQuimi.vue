<script setup>
import { ref,computed, onMounted, onBeforeUnmount } from 'vue';
import Carroussel from '@/components/layout/Carroussel.vue';
import Slide from '@/components/layout/Slide.vue';
import LivroLista from '@/components/layout/livros/LivroLista.vue';
import{ livros1AnoQuimi, livros2AnoQuimi, livros3AnoQuimi } from '@/Data/livrosQuimi';
import { autoresQuimi} from '@/Data/autores';
import autores from '@/components/layout/autores.vue';
import ButtonChild from '@/components/layout/ButtonChild.vue';
import LivroCard from '@/components/layout/livros/LivroCard.vue';
import LivrosFavoritos from '@/components/layout/livros/LivrosFavoritos.vue';
defineEmits(['fechar'])

const listaSalva = localStorage.getItem('livro')
//COLOCAR LINK NOS LIVROS DE REFERENCIAS
// AJEITAR TAMANHO DOS CARDS
//COLOCAR ACTIVE NOS HOVER FF0D62

const listaFav = ref(
  listaSalva ? JSON.parse(listaSalva) : []
)
function LivroFavoritado (livro) {
   const indice = listaFav.value.findIndex(item => item.id === livro.id)
  if (indice !== -1) {
   mostrarAlerta.value  = true
    return
  }
  listaFav.value.push(livro)
   localStorage.setItem(
    'livro',
    JSON.stringify(listaFav.value)
  )
}
//setItem converter em string e getItem string em objeto

function removerLivro(id) {
  const indice = listaFav.value.findIndex(livros => livros.id === id)
  if (indice !== -1) {
    listaFav.value.splice(indice, 1)
     localStorage.setItem(
      'livro',
      JSON.stringify(listaFav.value)
    )
  }

}

const quantidadeTotal = computed(() => {
  return listaFav.value.length
})
function limparLista() {
  listaFav.value.splice(0, listaFav.value.length)
  localStorage.setItem(
    'livro',
    JSON.stringify(listaFav.value)
  )
}

const mostrarFavoritos = ref(false)
const mostrarDetalhes = ref(false)
const mostrarLivros = ref(false)
const mostrarLivros2 = ref(false)
const mostrarLivros3 = ref(false)
const mostrarAlerta = ref(false)

const TodosOsLivros = [
 ...livros1AnoQuimi,
 ...livros2AnoQuimi,
 ...livros3AnoQuimi
];
const primeiro = [
  ...livros1AnoQuimi
]
const segundo = [
  ...livros2AnoQuimi
]
const terceiro =[
  ...livros3AnoQuimi
]

const CarouselSlides = [
  ...autoresQuimi
]


const destaque3Ano  = livros3AnoQuimi.filter(livro =>
    [44,36,37,39,43,34,].includes(livro.id)
)
const livrosDestaque = livros1AnoQuimi.filter(livro =>
    [1,4,7,10,13,2,6,14].includes(livro.id)
)
const destaque2Ano  = livros2AnoQuimi.filter(livro =>
    [22,29,21,32,20,31,].includes(livro.id)
)
const larguraTela = ref(window.innerWidth)

function atualizarLargura() {
  larguraTela.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', atualizarLargura)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', atualizarLargura)
})
const livrosPorSlide = computed(() => {
  return larguraTela.value <= 732 ? 1 : 3
})
const livrosPorSlide1 = computed(() => {
  return larguraTela.value <= 732 ? 1 : 4
})
const slides3Ano = computed(() => {
  const grupos = []

  for (let i = 0; i < destaque3Ano.length; i += livrosPorSlide.value) {
    grupos.push(
      destaque3Ano.slice(i, i + livrosPorSlide.value)
    )
  }

  return grupos
})
const slides2Ano = computed(() => {
  const grupos = []

  for (let i = 0; i < destaque2Ano.length; i += livrosPorSlide.value) {
    grupos.push(
      destaque2Ano.slice(i, i + livrosPorSlide.value)
    )
  }

  return grupos
})
const slidesLivros  = computed(() => {
  const grupos = []

  for (let i = 0; i < livrosDestaque.length; i += livrosPorSlide1.value) {
    grupos.push(
      livrosDestaque.slice(i, i + livrosPorSlide1.value)
    )
  }

  return grupos
})
const slidesAutores = computed(() => {
  const grupos = []

  for (let i = 0; i < CarouselSlides.length; i += livrosPorSlide.value) {
    grupos.push(
      CarouselSlides.slice(i, i + livrosPorSlide.value)
    )
  }

  return grupos
})
</script>
<template>
    <section class="banner">
        <div>
        <h1>
            Livros destinados ao <br> curso de <br> Quimica
        </h1>

        <div>
        <a class="botao"  href="#livros">Ver livros</a>
        </div>

        </div>

    </section>



    <section class="pesquisa">

        <div>
           <LivroLista :livros="TodosOsLivros"
             @favoritar="LivroFavoritado"
              :categorias="'quimi'"
           />

        </div>

    </section>

    <section class="autores">
      <h2>
        Autores
      </h2>
      <p>
        Conheça os nossos principais autores
      </p>


      <div class="autores-carrossel">
        <Carroussel class="carousel"  :totalSlides="slidesAutores.length"  tipo="autores"
  v-slot="{ currentSlide }">
          <Slide class="autores-lista"  v-for="(grupo,index) in slidesAutores" :key="index" v-show="currentSlide === index + 1">
           <div class="autores-lista">
  <autores
      v-for="autor in grupo" :key="autor.id"  :id="autor.id"  :nome="autor.nome" :foto="autor.foto"
    :biografia="autor.biografia" :principaisObras="autor.principaisObras"

  />
     </div>
  </Slide>
        </Carroussel>
      </div>
    </section>

    <section class="referencias">
      <div class="card-esquerda">
         <p>
          As melhores referências

        </p>
        <div class="livros">
          <div class="um">
         <img src="/images/livro_agro_2.png" alt="">
          </div>
          <div class="dois">
            <img src="/images/livro_agro_9.png" alt="">
          </div>
          <div class="tres">
            <img src="/images/livro_agro_31.png" alt="">
          </div>
        </div>

      </div>

      <div class="card-direita">
        <p>
          Com videoaulas e materiais de estudo
        </p>
        <div  class="link-image">


      <div class="imagem-direita">
     <img src="/images/help.png" alt="">
        </div>
           <div>

           </div>
           <div class="vermais">
       <ButtonChild id="vermais" @clique="mostrarDetalhes = true">
              Ver mais
    </ButtonChild>
           </div>

              </div>
        </div>

       <Transition name="modal">
       <div class="modal-overlay" v-show="mostrarDetalhes" @click="mostrarDetalhes = false" >
      <div  class="modal"  @click.stop>
       <div class="">
          <div class="">
            <h3>
               Um pouco sobre a nossa página de quizzes:
            </h3>
         <p>
     Explore atividades e quizzes sobre os principais assuntos dos cursos técnicos. Teste seus conhecimentos, revise conteúdos importantes e acompanhe seu aprendizado de forma prática, dinâmica e interativa. Encontre exercícios preparados para ajudar na fixação dos conteúdos, reforçar seus estudos e tornar o processo de aprendizagem mais simples, organizado e eficiente.
         </p>

       </div>

       <div class="botoes">

        <div>
     <RouterLink id="router" to="/atividades">
  Acessar página
</RouterLink>
     </div>

        <div>
        <ButtonChild class="button-" @clique="mostrarDetalhes = false">
        Fechar
      </ButtonChild>
      </div>
             </div>

                </div>
            </div>
        </div>
        </Transition>

    </section>

    <section class="titulo" id="livros">
      <div >
        <h3>
          1° Ano de Quimica
        </h3>
        <p>
          Conteúdos referentes ao pirmeiro ano de Quimica
        </p>
      </div>
    </section>

    <section class="livros1ano">
        <div class="secao">
               <div class="livros-carrossel">
        <Carroussel class="carousel"  :totalSlides="slidesLivros.length"  tipo="livros"
  v-slot="{ currentSlide }">
          <Slide class="livros-lista"   v-for="(grupo,index) in slidesLivros"
  :key="index"
  v-show="currentSlide === index + 1">
           <div class="livros-lista">

  <LivroCard
      v-for="livro in grupo" :key="livro.id"   :livro="livro" :id="livro.id"
        :titulo="livro.titulo"  :categoria="livro.categoria"
        :capa="livro.capa" :link="livro.link" :autor="livro.autor" :descricao="livro.descricao"
         :classe="'carrossel'"   @favoritar="LivroFavoritado"
        >
      </LivroCard>

     </div>
  </Slide>
        </Carroussel>
      </div>
        </div>
        <div  class="visu">
         <ButtonChild id="visu" @clique="mostrarLivros = true">
              Visualizar mais Livros
    </ButtonChild>
        </div>

        <Transition name="modal">
        <div  class="modal-livros" v-show="mostrarLivros"  @click.stop>
          <div class="todos-livros">

                    <LivroCard v-for="livros in primeiro" :key="livros.id"
         :id="livros.id"
        :titulo="livros.titulo"  :categoria="livros.categoria"
        :capa="livros.capa" :link="livros.link" :autor="livros.autor" :descricao="livros.descricao"
        :classe="'carrossel'"   @favoritar="LivroFavoritado"   :livro="livros"  >
</LivroCard>
        </div>
          <div class="ffe">
        <ButtonChild id="fef" @clique="mostrarLivros = false">
        Fechar
      </ButtonChild>
      </div>

        </div>
        </Transition>

    </section>

   <section class="titulo">
      <div >
        <h3>
          2° Ano de Quimica
        </h3>
        <p>
          Conteúdos referentes ao segundo ano de Quimica
        </p>
      </div>
    </section>

    <section class="livros2ano">
        <div class="secao">
               <div class="livros-carrossel">
        <Carroussel class="carousel"  :totalSlides="slides2Ano.length"   tipo="livros"
  v-slot="{ currentSlide }">

          <Slide class="livros-lista"   v-for="(grupo,index) in slides2Ano"
  :key="index"
  v-show="currentSlide === index + 1">
           <div class="livros-lista">

  <LivroCard
      v-for="livro in grupo" :key="livro.id"    :livro="livro" :id="livro.id"
        :titulo="livro.titulo"  :categoria="livro.categoria"
        :capa="livro.capa" :link="livro.link" :autor="livro.autor" :descricao="livro.descricao"
         :classe="'carrossel'"   @favoritar="LivroFavoritado"
        >
      </LivroCard>

     </div>
  </Slide>
        </Carroussel>
      </div>
        </div>

         <div  class="visu">
         <ButtonChild id="visu" @clique="mostrarLivros2 = true">
              Visualizar mais Livros
    </ButtonChild>
        </div>

        <Transition name="modal">
        <div  class="modal-livros" v-show="mostrarLivros2"  @click.stop>
          <div class="todos-livros">

                    <LivroCard v-for="livros in segundo" :key="livros.id"
           :livro="livros" :id="livros.id"
        :titulo="livros.titulo"  :categoria="livros.categoria"
        :capa="livros.capa" :link="livros.link" :autor="livros.autor" :descricao="livros.descricao"
        :classe="'carrossel'"   @favoritar="LivroFavoritado"  >
</LivroCard>
        </div>
          <div class="ffe">
        <ButtonChild id="fef" @clique="mostrarLivros2 = false">
        Fechar
      </ButtonChild>
      </div>

        </div>
        </Transition>

    </section>

    <section class="titulo">
      <div >
        <h3>
          3° Ano de Quimica
        </h3>
        <p>
          Conteúdos referentes ao terceiro ano de Quimica
        </p>
      </div>
    </section>

      <section class="livros3ano">
        <div class="secao">
               <div class="livros-carrossel">
        <Carroussel class="carousel"  :totalSlides="slides3Ano.length"   tipo="livros"
  v-slot="{ currentSlide }">
          <Slide class="livros-lista"   v-for="(grupo,index) in slidesLivros"
  :key="index"
  v-show="currentSlide === index + 1">
           <div class="livros-lista">

  <LivroCard
      v-for="livro in grupo" :key="livro.id" :id="livro.id"
        :titulo="livro.titulo"  :categoria="livro.categoria"
        :capa="livro.capa" :link="livro.link" :autor="livro.autor" :descricao="livro.descricao"
         :classe="'carrossel'"   @favoritar="LivroFavoritado"   :livro="livro"
        >
      </LivroCard>

     </div>
  </Slide>
        </Carroussel>
      </div>
        </div>
         <div  class="visu">
         <ButtonChild id="visu" @clique="mostrarLivros3 = true">
              Visualizar mais Livros
    </ButtonChild>
        </div>

        <Transition name="modal">
        <div  class="modal-livros" v-show="mostrarLivros3"  @click.stop>
          <div class="todos-livros">

                    <LivroCard v-for="livros in terceiro" :key="livros.id"
         :id="livros.id"
        :titulo="livros.titulo"  :categoria="livros.categoria"
        :capa="livros.capa" :link="livros.link" :autor="livros.autor" :descricao="livros.descricao"
        :classe="'carrossel'"    @favoritar="LivroFavoritado"   :livro="livros" >
</LivroCard>
        </div>
          <div class="ffe">
        <ButtonChild id="fef" @clique="mostrarLivros3 = false">
        Fechar
      </ButtonChild>
      </div>

        </div>
        </Transition>

    </section>

    <section class="flutuante">

         <ButtonChild @clique="mostrarFavoritos = true " v-if="listaFav.length > 0" class="carrinho-flutuante"
  >
    <span class="icone-carrinho"><i class="fa-regular fa-heart"></i></span>
    <span class="notificacao">{{ quantidadeTotal }}</span>

  </ButtonChild>

        <Transition name="modal-fav">
        <div class="favo"  v-show="mostrarFavoritos" @click="mostrarFavoritos = false">
            <div class="favo-modal" @click.stop>
        <LivrosFavoritos class="icone-modal" v-for="livros in listaFav" :key="livros.id"
        :id="livros.id"
        :titulo="livros.titulo"  :categoria="livros.categoria"
        :capa="livros.capa" :link="livros.link" :autor="livros.autor" :descricao="livros.descricao"
        @remover="removerLivro" :livros="livros "
         >
        </LivrosFavoritos>
            <div v-if="listaFav.length === 0" class="carrinho-vazio">
      <p>Ops! Parece que sua lista de favoritos está vazia</p>

    </div>

          <div class="bot">
                     <div id="limpar">
        <ButtonChild @clique="limparLista" :class="{ ativo: listaFav.length === 0 }">
            Limpar lista de Livros
        </ButtonChild>
              </div>

    <div id="fechar">
        <ButtonChild @clique="mostrarFavoritos= false">
            Fechar
        </ButtonChild>
       </div>
            </div>
               </div>

    </div>
    </Transition>

     <Transition name="alerta">
      <div v-if="mostrarAlerta" class="alerta-favorito" >
    <p > Você já favoritou esse livro!</p>

    <ButtonChild id="alerta" @clique="mostrarAlerta = false">
      Fechar
    </ButtonChild>


  </div>
  </Transition>

    </section>

</template>

<style scoped>
.alerta-favorito {
  position: fixed;
  top: 75%;
  right: 10%;
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
  z-index: 9999;

}

#alerta{
 display: flex;
  justify-content: center;
 width: 100%;
 padding: 6px;
 border-radius: 10px;
 background-color: #c20044;
 color: white;
}
#alerta:hover{
 color: #c20044;
 background-color: white;
}
.alerta-enter-active,
.alerta-leave-active {
  transition: all 0.4s ease;
}
.alerta-enter-from {
  opacity: 0;
  transform: translateX(20%);
}
.alerta-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.alerta-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.alerta-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.alerta-favorito {
  position: fixed;
  top: 75%;
  right: 10%;
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
  z-index: 9999;

}
.alerta-favorito p{
  font-family: "Josefin Sans", sans-serif;
  font-size: 2rem;
  color: #c20044;
  font-weight: 600;
  text-align: center;
}
#limpar .ativo{
  display: none;
}
.carrinho-flutuante{
  animation: botao 0.3s ease;
}


@keyframes botao{
  from{
    transform: translateX(100%);
  }

  to{
    transform: translateX(0);
    opacity: 1;
  }
}

.modal-fav-enter-from {
  transform: translateX(40%);
  opacity: 0;
}

.modal-fav-enter-active,
.modal-fav-leave-active {
  transition: transform 0.6s ease, opacity 0.4s ease;
}

.modal-fav-enter-to,
.modal-fav-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.modal-fav-leave-to {
  transform: translateX(40%);
  opacity: 0;
}

.carrinho-vazio {
  text-align: center;
  margin-top: 3rem;
  padding: 3rem;
  border-radius: 20px;
}

.carrinho-vazio p {
  color: #c20044;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-family: "Josefin Sans", sans-serif;
}

button #fechar, #limpar{
  justify-content: center;
  width: 100%;
}

#limpar{
  justify-content: center;
  margin: 1vw;
}

#fechar{
  display: flex;
  justify-content: center;
  margin: 1vw;
}

.bot{
  display: flex;
}

.favo{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  z-index: 1000;
}

.favo-modal {
  position: relative;
  width: 30%;
  height: 100vh;
  background: white;
  overflow-y: auto;
  box-shadow: -5px 0 20px rgba(0,0,0,.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vw;
}

.icone-modal{
  display: flex;
  justify-content: center;
}

.carrinho-flutuante {
  position: fixed;
  right: 90px;
  bottom: 100px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #c20044;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  z-index: 999;
  transition: transform 0.2s ease, background 0.2s ease;
  border: none;
}

.carrinho-flutuante:hover {
  transform: scale(1.08);
  background: #f70358;
  border: none;
}

.icone-carrinho {
  font-size: 2rem;
}

.notificacao {
  position: absolute;
  top: -20%;
  right: -17%;
  min-width: 45px;
  height: 45px;
  padding: 0 6px;
  border-radius: 999px;
  background: #135F7D;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
}

.modal-enter-from{
  opacity: 0;
  transform: scale(0.8);
}

.modal-enter-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .todos-livros {
  transition: transform 0.3s ease;
}

.modal-enter-to .todos-livros {
  transform: scale(1);
}

.modal-leave-from{
  transform: scale(1);
}

.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-leave-active .todos-livros{
  transition: all 0.2s ease;
}

.modal-leave-to .todos-livros{
  opacity: 0;
}

.modal-enter-active .modal {
  transition: transform 0.3s ease;
}

.modal-enter-to .modal {
  transform: scale(1);
}

.modal-leave-active .modal {
  transition: all .4s ease;
}

.modal-leave-to .modal {
  opacity: 0;
}
 div.favo :deep(a){
  color: #4b0101;
  border: 1px solid #4b0101;
 }
 .favo :deep(a:hover){
  background-color: #4b0101;
  transition: 0.8s;
  color: white;
  border: none;
 }
 .favo :deep(button){
  background-color: #c20044;
  color: #fff;
 }
 .favo :deep(button:hover){
  background-color: #e90354;
 
 }
 .livros-lista :deep(button){
  background-color: #c20044;
 }
 .livros-lista :deep(button:hover){
  background-color: #f70258;
 }
 .livros-lista :deep(a){
  color: #c20044;
  border: 1px solid #c20044;
 }
  .livros-lista :deep(a:hover){
  background-color: #c20044;
  transition: 0.8s;
  color: white;
  border: none;
 }
  .livros-lista :deep(#coracao:hover){
   background-color: white;
  color: #c20044;
  border: 1px solid #c20044;
  transform: scale(1.1);
 }

 .livros-lista :deep(.tooltip-texto){
  background-color: #FF0D62;
 }
  .autores-carrossel :deep(button){
  background-color: #f30d5d;
 }

 .autores-carrossel :deep(button:hover){
  background-color: #c9084c;
  color: #fff;
 }
 .pesquisa :deep(.barra-pesquisa){
  background-color: #c20044;

 }
.pesquisa :deep(select){
  color: #FF0D62;
 border: none;
 }
 .pesquisa :deep(input){
  color: #f10d5d;
 }
 .pesquisa :deep(input::placeholder){
  color: rgb(66, 66, 66)
 }
 

.livros3ano,
.modal-livros {
  padding-bottom: 300px;
}

.autores-carrossel{
  margin: 2vw;
}

.todos-livros{
  display: grid;
  justify-content: center;
  align-items: stretch;
  gap: 10px;
  padding: 0.7vw;
  grid-template-columns: repeat(4, 1fr);
  background-color: #c20044;
}

.visu {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
}

.ffe button{
  width: 100%;
  max-width: 250px;
  padding: 0.8vw;
  font-size: 2rem;
  margin: 2rem 0;
}

.ffe{
  display: flex;
  justify-content: center;
}

#visu{
  margin: 2.7vw;
  font-size: 2.2rem;
}

.livros-lista{
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  padding: 0.7vw;
}

.capa-livro {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 1rem;
}

.secao{
  background-color: #c20044;
}

.titulo p{
  margin: 3vw;
  font-size: 2.3rem;
  font-family: "Josefin Sans", sans-serif;
  color: #555555;
}

.titulo h3{
  font-size: 3.5rem;
  color: #c20044;
  font-family: "Josefin Sans", sans-serif;
  margin: 3vw;
}

.titulo h3::after{
  content: "";
  display: flex;
  width: 700px;
  height: 3px;
  background: #c20044;
  border-radius: 20px;
}

.livros{
  display: flex;
}

.card-esquerda p{
  font-size: 2.9rem;
  color: #c20044;
  font-family: "Josefin Sans", sans-serif;
  margin: 1vw;
  padding: 1.5vw;
}

.card-esquerda{
  background-color: #E8F5E9 ;
  border-radius: 2vw;
  height: auto;
  position: relative;
   width: 30%;
  min-height: 620px;
}
.card-esquerda img{
  border-radius: 12px;
  position: absolute;
  transform: translate(-50%, -50%);
  align-items: center;
   transition: transform 0.2s ease;
   width: 30%;
}

.card-esquerda img:hover{
  transform: translate(-50%, -50%) scale(1.1);
}

.um img{
  top: 54%;
  left: 22%;
  transform: translate(-50%, -50%);
}

.dois img{
  top: 60%;
  left: 35%;
  transform: translate(-50%, -50%);
}

.tres img{
  top: 70%;
  left: 45%;
  transform: translate(-50%, -50%);
}

#vermais{
  background-color: #c20044;
  font-size: 1.4rem;
  padding: 15px;
  margin: 2vw;
  border-radius: 20px;
  color: white;
  white-space: nowrap;
  border: none;
  margin-bottom: 3vw;
  width: 100%;
}

#vermais:hover{
  box-shadow: 0 8px 10px rgba(46, 125, 50, 0.25);
  background-color: #ff025a;
  padding: 15px;
}

button {
  background-color: white;
  color: #c20044;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.6rem;
  border-radius: 20px;
  border: 1px solid #c20044;
  padding: 15px;
}

button:hover {
  transition: 0.5s all ease;
  background-color: #c20044;
  color: white;
  cursor: pointer;
}

#router{
  background-color: #c20044;
  font-size: 1.6rem;
  padding: 15px;
  margin: 0;
  border-radius: 20px;
  color: white;
  font-family: "Josefin Sans", sans-serif;
}

#router:hover{
  background-color: white;
  transition: 0.5s all ease;
  color: #c20044;
  border: 1px solid #c20044;
  cursor: pointer;
}

.botoes{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
}

.referencias{
  display: flex;
  gap: 6vw;
  margin: 0;
  align-items: center;
  justify-content: center;
  padding: 0 0 4vw 0;
}

.card-direita{
  background-color: #E8F5E9;
  border-radius: 2vw;
  width: 30%;
  height: auto;
  min-height: 480px;
}

.card-direita p {
  text-align: center;
  color: #c20044;
  font-size: 3rem;
  font-family: "Josefin Sans", sans-serif;
  padding: 0.9vw;
  margin: 0.9vw;
}

.card-direita img{
  width: 100%;
  margin: 0;
  height: auto;
}

.imagem-direita{
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 340px;
}

.link-image{
  display: flex;
  align-items: flex-end;
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
  padding: 3rem;
  border-radius: 24px;
  width: 100%;
  max-width: 600px;
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
  padding: 1vw;
}

.modal h3{
  font-size: 2.3rem;
  color: #c20044;
  padding: 1vw;
  font-weight: 500;
  font-family: "Josefin Sans", sans-serif;
}

.autores-lista {
  max-width: 1050px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
  padding: 0.7vw;
}

.autores{
  text-align: center;
  font-size: 2.8rem;
  font-family: "Josefin Sans", sans-serif;
  padding: 3vw;
  color: #FF0D62;
}

.autores p{
  color: rgb(70, 70, 70);
  text-align: center;
}

.banner {
  position: relative;
  background: url(/images/img_capa_quimi.png) center/cover no-repeat;
  animation: fadeIn 2s ease forwards;
  height: 100vh;
  width: 100vw;
  align-items: center;
  display: flex;
}

.banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

h1 {
  color: white;
  z-index: 1;
  font-size: 5rem;
  padding: 2vw;
  font-family: "Josefin Sans", sans-serif;
  margin-left: 3vw;
  position: relative;
}

.banner a{
  color: white;
  background-color: #FF0D62;
  border-radius: 20px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 2.6rem;
  padding: 18px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  margin-left: 5vw;
}

a:hover{
  background-color: #ff0d62a2;
  transition: 0.8s;
  color: white;
}

@keyframes fadeIn {
  from {
    opacity: 0.6;
    transform: scale(1.02);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes spawn {
  from {
    opacity: 0;
    scale: 1.02;
  }
}



@media (max-width: 732px) {

  #fef{
    font-size: 1rem;
    padding: 8px;
    max-width: 200px;
  }

  .todos-livros{
    grid-template-columns: 1fr;
    padding: 20px;
  }

  .banner {
    min-height: 100vh;
    width: 100%;
  }

  .banner::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
  }

  .banner h1{
    font-size: 2.4rem;
  }

  .banner a{
    color: white;
    background-color: #b10303;
    border-radius: 10px;
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.3rem;
    padding: 10px;
    cursor: pointer;
    position: relative;
    z-index: 1;
    margin-left: 5vw;
  }

  .titulo{
    margin: 8px;
    margin-bottom: 40px;
  }

  .titulo p{
    font-size: 1.4rem;
  }

  .titulo h3{
    font-size: 2rem;
    color: #9c0d0d;
    margin: 3vw;
  }

  .titulo h3::after{
    display: flex;
    width: 200px;
    height: 2px;
  }

  .autores-lista {
    max-width: 1050px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 90px;
    padding: 0.7vw;
  }

  .autores h2{
    font-size: 2.6rem;
  }

  .autores p{
    font-size: 1.5rem;
    margin-bottom: 30px;
  }

  #router{
    font-size: 1rem;
    padding: 8px;
    margin: 0;
    border-radius: 10px;
  }

  button {
    font-size: 1rem;
    border-radius: 10px;
    border: 1px solid #4b0101;
    padding: 8px;
  }

  #vermais{
    font-size: 1rem;
    border-radius: 10px;
    width: 100%;
    max-width: 180px;
    padding: 7px;
  }

  .vermais{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .referencias{
    display: block;
    align-items: center;
    justify-content: center;
    margin: 15px;
  }

  .card-direita{
    border-radius: 17px;
    width: 100%;
    height: 30%;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .card-esquerda{
    border-radius: 17px;
    height: auto;
    position: relative;
    width: 100%;
  }

  .card-esquerda img{
    border-radius: 12px;
    position: absolute;
    transform: translate(-20%, -50%);
    align-items: center;
    transition: transform 0.2s ease;
    width: 47%;
  }

  .card-direita p {
    font-size: 2rem;
    margin: 10px;
    padding: 10px;
  }

  .card-direita img{
    width: 100%;
    max-width: 190px;
    margin: 0;
    height: auto;
  }

  .card-esquerda p{
    font-size: 2.2rem;
    margin: 10px;
    padding: 20px;
  }

  .imagem-direita{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .link-image{
    display: block;
  }

  .modal {
    padding: 1.5rem;
    border-radius: 17px;
    width: 100%;
    max-width: 300px;
    max-height: 85vh;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    position: relative;
  }

  .modal p {
    margin: 0.75rem 0;
    font-size: 1rem;
    padding: 1vw;
  }

  .modal h3{
    font-size: 2rem;
    color: #b10303;
    padding: 1vw;
  }

  #visu {
    padding: 10px;
    font-size: 1rem;
  }

  .carrinho-vazio {
    text-align: center;
    margin-top: 1rem;
    padding: 0;
  }

  .carrinho-vazio p {
    color: #4b0101;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  #limpar{
    justify-content: center;
    margin: 0;
    margin-bottom: 10px;
  }

  #fechar{
    display: flex;
    justify-content: center;
    margin: 0;
  }

  .bot{
    display: block;
  }

  .favo{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    z-index: 1000;
  }

  .favo-modal {
    position: relative;
    width: 50%;
    height: 100vh;
    background: white;
    overflow-y: auto;
    box-shadow: -5px 0 20px rgba(0,0,0,.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2vw;
  }

  .icone-modal{
    display: flex;
    justify-content: center;
  }

  .carrinho-flutuante {
    position: fixed;
    right: 20px;
    bottom: 70px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #9c0d0d;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
    z-index: 999;
    transition: transform 0.2s ease, background 0.2s ease;
    border: none;
  }

  .icone-carrinho {
    font-size: 1.6rem;
  }

  .notificacao {
    position: absolute;
    top: -15%;
    right: -17%;
    min-width: 20px;
    height: 25px;
    padding: 0 6px;
    border-radius: 999px;
    background: #4b0101;
    color: white;
    font-size: 1.4rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
  }

  .carrinho-vazio {
    text-align: center;
    margin-top: 1rem;
    padding: 0;
  }

  .carrinho-vazio p {
    color: #b10303;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  #fechar button, #limpar button{
    justify-content: center;
    width: 100%;
    font-size: 0.8rem;
    border-radius: 10px;
  }

  #limpar{
    justify-content: center;
    margin: 0;
    margin-bottom: 10px;
  }

  #fechar button{
    display: flex;
    justify-content: center;
    margin: 0;
    font-size: 0.8rem;
    border-radius: 10px;
  }

  .bot{
    display: block;
  }
}

</style>
