<script setup>
import {ref, onMounted} from "vue"
import ButtonChild from "./ButtonChild.vue";

  const currentSlide = ref (1);
  const getSlideCount = ref (0)

  const nextSlide = () =>{
    if (currentSlide.value === getSlideCount.value){
        currentSlide.value = 1;
        return;
    }
    currentSlide.value += 1;
  };

  const prevSlide = () => {
    if (currentSlide.value === 1){
        currentSlide.value = getSlideCount.value;
        return;
    }
    currentSlide.value -= 1;
}

  onMounted(() => {
    getSlideCount.value = document.querySelectorAll('.slide').length;
  })



</script>

<template>
<div class="carousel">
    <slot :currentSlide="currentSlide" />


<div class="navigate">
    <div>
    <ButtonChild  @clique="prevSlide" class="toggle-page left">
          ←
    </ButtonChild>
    </div>

    <div>
       <ButtonChild @clique="nextSlide" class="toggle-page right">
    →
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
    padding: 0 ;
    color: #135F7D ;
    font-size: 40px ;
}
.carousel {
    position: relative;
    width: 100%;
}
.navigate{
   position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.toggle-page{
  display: flex;
  flex: 1;
  cursor: pointer;

}
.right{
    justify-content: flex-end;

}

</style>