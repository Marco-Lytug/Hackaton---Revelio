<script>

</script>

<template>
<div class="slide">
        <slot />
</div>
</template>

<style scoped>

.slide {
  animation: passar 0.5s ease;
}

@keyframes passar {
  from {
    opacity: 0;
    transform: translateX(5%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.slide{
    width: 100%;
}
.slide{
    min-height:320px;
}

</style>
