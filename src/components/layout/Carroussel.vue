<script setup>
import {ref, onMounted} from "vue"
import ButtonChild from "./ButtonChild.vue";

  const currentSlide = ref (1);
  const props = defineProps({
  totalSlides: Number
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
<div class="carousel" >
    <slot :currentSlide="currentSlide" />

<div class="navigate">

    <div>
    <ButtonChild @clique="prevSlide" class="toggle-page left">
           ❮
    </ButtonChild>
    </div>

    <div>
       <ButtonChild @clique="nextSlide" class="toggle-page right">
     ❯
</ButtonChild>
    </div>

</div>

</div>
</template>

<style scoped>
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
  transform: scale(1,1);
}
.carousel {
    position: relative;
    width: 100%;
   overflow: hidden;
}
.navigate{
   position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.toggle-page{
  display: flex;
  flex: 1;
  cursor: pointer;
  
}
.right{
    justify-content: flex-end;
    
}
.left{
    justify-content: flex-start;
}
/*********************/
/*PARTE DO CSS RESPONSIVO*/
@media (max-width: 732px) {
  button {
    padding: 4px ;
    font-size: 30px ;
    border-radius: 20px;
}

  
   
}
</style>