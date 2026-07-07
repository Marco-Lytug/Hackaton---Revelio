<script setup>
//Os Buttons tem que substituir pelos ButtonChield que tem que serem criados!
</script>

<template>
  <section class="banner">
    <h1>Ache o fim de suas <br> preocupações aqui, na <span>Revelio</span>! </h1>
  </section>
  <section class="dificuldades">
    <h2>COM DIFICULDADES?</h2>
    <div class="all">
      <div>
        <p>Com a Revelio, podemos te ajudar a <br> melhorar o seu desempenho, com <br> livros e dicas de estudos,
          atividades e <br> videoaulas! </p>
      </div>
      <div class="img">
        <img src="/images/GarotoLendo.png" alt="">
      </div>
    </div>
        <button>NOSSA BIBLIOTECA</button>
  </section>
  <section class="help">
      <h2>Help!</h2>
    <div class="all">
      <div>
        <p>Na Help!, ajudaremos você a estudar, aqui temos video aulas e dicas de estudo, aproveite!</p>
      </div>
      <div class="img">
        <img src="/images/help.png" alt="">
      </div>
    </div>

        <button>AQUI!</button>
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
  padding: 4vw 0 0 4vw;
  font-family: "Josefin Sans", sans-serif;
  animation: spawn;
  animation-timeline: view();
  animation-range: entry 0% 50%;

}

.dificuldades p {
  color: black;
  font-size: 3rem;
  padding: 0 7vw 0 7vw;
  font-family: "Josefin Sans", sans-serif;
  animation: spawn;
  animation-timeline: view();
    animation-range: entry 0% 50%;

}
button{
  background-color: #135F7D;
  color: white;
  border: 6px solid  #F4E6CC;
  border-radius: 5vw;
  padding: 2vw;
  font-size: 2rem;
  font-family: "Josefin Sans", sans-serif;
  margin: 0 0 10vw  3vw;
  cursor: pointer;
  transition: 0.5s;

}
button:hover{
  background-color: #F4E6CC;
  color: #135F7D;
  border: 6px solid  #135F7D;
  border-radius: 5vw;
  padding: 2vw;
  font-size: 2rem;
  font-family: "Josefin Sans", sans-serif;
  margin: 0 0 15vw 6vw;
  cursor: pointer;
  transition: 0.3s;
}
div {
  display: flex;
  justify-content: space-between;
}

.all {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.img {
  width: 80vh;
  position: relative;
  margin: 0 ;
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
.help {
  background-color: white;
}

.help h2 {
  color: #135F7D;
  font-size: 5rem;
  padding: 4vw 0 0 4vw;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  animation: spawn;
  animation-timeline: view();
  animation-range: entry 0% 50%;

}

.help p {
  color: black;
  font-size: 3rem;
  padding: 0 7vw 0 7vw;
  font-family: "Josefin Sans", sans-serif;
  animation: spawn;
  animation-timeline: view();
    animation-range: entry 0% 50%;

}
.help button{
  background-color: #135F7D;
  color: white;
  border: 6px solid  #F4E6CC;
  border-radius: 5vw;
  padding: 2vw 5vw 2vw 5vw;
  font-size: 2.5rem;
  font-family: "Josefin Sans", sans-serif;
  margin: 0 0 10vw  3vw;
  cursor: pointer;
  transition: 0.5s;

}
button{
  background-color: #135F7D;
  color: white;
  border: 6px solid  #F4E6CC;
  border-radius: 5vw;
  padding: 2vw;
  font-size: 2rem;
  font-family: "Josefin Sans", sans-serif;
  margin: 0 0 10vw  3vw;
  cursor: pointer;
  transition: 0.5s;

}
button:hover{
  background-color: #F4E6CC;
  color: #135F7D;
  border: 6px solid  #135F7D;
  border-radius: 5vw;
  padding: 2vw;
  font-size: 2rem;
  font-family: "Josefin Sans", sans-serif;
  margin: 0 0 15vw 6vw;
  cursor: pointer;
  transition: 0.3s;
}
div {
  display: flex;
  justify-content: space-between;
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
