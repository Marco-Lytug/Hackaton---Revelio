<script setup>

</script>

<template>
  <section class="banner">
    <h1>Ache o fim de suas <br> preocupações aqui, na <span>Revelio</span>! </h1>
  </section>
  <section class="dificuldades">
    <h2>COM DIFICULDADES?</h2>
    <div>
      <div>
        <p>Com a Revelio, podemos te ajudar a <br> melhorar o seu desempenho, com <br> livros e dicas de estudos,
          atividades e <br> videoaulas! </p>
      </div>
      <div class="button">

      </div>
      <div class="img">
        <img src="/images/GarotoLendo.png" alt="">
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner {
  position: relative;
  background: url(/public/images/Banner_HomeView.png) center/cover no-repeat;
  animation: fadeIn 2s ease forwards;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
}

.banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.dificuldades {
  background-color: white;

}

.dificuldades h2 {
  color: #135F7D;
  font-size: 5rem;
  padding: 4vw;
  font-family: "Josefin Sans", sans-serif;
  animation: spawn;
  animation-timeline: view();
  animation-range: entry 0% 50%;

}

.dificuldades p {
  color: black;
  font-size: 2.5rem;
  padding: 7vw;
  font-family: "Josefin Sans", sans-serif;
  animation: spawn;
  animation-timeline: view();
    animation-range: entry 0% 50%;


}

div {
  display: flex;
  justify-content: space-between;
}

div img {
  width: 80vh;
  animation: spawn;
  animation-timeline: view();
    animation-range: entry 0% 50%;

}

h1 {
  color: white;
  z-index: 1;
  font-size: 4rem;
  padding: 2vw;
  font-family: "Josefin Sans", sans-serif;

}

h1 span {
  color: #135F7D;
  z-index: 1;
  font-size: 4rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.98);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes spawn {
  from {
    opacity: 0;
    scale: 0.98;
  }
}

.josefin-sans-uniquifier> {
  font-family: "Josefin Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
