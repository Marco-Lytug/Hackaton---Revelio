<script setup>
import {ref, onMounted} from "vue"
import ButtonChild from "./ButtonChild.vue";

  const currentSlide = ref (1);

  const props = defineProps({
  totalSlides: Number,
   tipo: {
    type: String,
   
  }
})

 const nextSlide = () => {
    if(currentSlide.value === props.totalSlides){
        currentSlide.value = 1
    }else{
        currentSlide.value++
    }
}

const prevSlide = () => {
    if(currentSlide.value === 1){
        currentSlide.value = props.totalSlides
    }else{
        currentSlide.value--
    }
}



</script>

<template> 
  <div :class="['carousel', props.tipo]">
    <slot :currentSlide="currentSlide" />

    <div class="navigate">
      <ButtonChild @clique="prevSlide" class="toggle-page left">
        ❮
      </ButtonChild>

      <ButtonChild @clique="nextSlide" class="toggle-page right">
        ❯
      </ButtonChild>
    </div>
  </div>
</template>

<style scoped>
.carousel.livros button {
 margin: 60px;
}
.carousel.livros .navigate{
    top: 40%;
}

.slide {
    width: 100%;
}
 button {
    width: auto ;
    padding: 15px ;
    color: white ;
    background-color: #135F7D;
    font-size: 40px ;
    border-radius: 30px;
    border: none;
    transition: all 0.3s ease;
}
button:hover{
  color: #135F7D;
  background-color: white;
  border: none;
  box-shadow: 0 8px 10px rgba(95, 61, 196, 0.25);
 
}
.carousel {
    position: relative;
    width: 100%;
  
}

.navigate {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 0; 
  pointer-events: none; 
  z-index: 10;
}

.toggle-page {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: auto;
  cursor: pointer;

}

.toggle-page.left {
  left: -50px; 
}

.toggle-page.right {
  right: -50px; 
}

.carousel.autores .toggle-page.left {
  left: -360px; 
}
.carousel.autores .toggle-page.right {
  right: -360px; 
}
.carousel.livros .toggle-page.left {
  left: 100px; 
}
.carousel.livros .toggle-page.right {
  right: 100px; 
}

.navigate button {
  pointer-events: auto;
}
.toggle-page {
  cursor: pointer;
}

.navigate > div {
  display: flex;
}

.navigate > div:last-child {
  margin-left: auto;
}
/*********************/
/*PARTE DO CSS RESPONSIVO*/
@media (max-width: 732px) {
    .toggle-page.left,
  .carousel.autores .toggle-page.left {
    left: -50px;
  }
  .toggle-page.right,
  .carousel.autores .toggle-page.right {
    right: -50px;
  }
   .toggle-page.left,
  .carousel.livros .toggle-page.left {
    left: 20px;
  }
  .toggle-page.right,
  .carousel.livros .toggle-page.right {
    right: 20px;
  }
  button {
    padding: 4px ;
    font-size: 30px ;
    border-radius: 20px;
}
.carousel.livros button {
 margin: 0px;
}
.carousel.livros .navigate{
    top: 50%;
}
 
}
</style>