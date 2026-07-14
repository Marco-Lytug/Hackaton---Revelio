<script>
 
</script>

<template>
<div class="slide">
    <transition name="slide">
        <slot />
    </transition>
</div>
</template>

<style scoped>
.slide{
    width: 100%;
}
</style>