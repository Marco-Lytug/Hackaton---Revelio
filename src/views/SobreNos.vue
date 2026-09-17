<script setup> 
import appHeader from '../components/layout/AppHeader.vue'
</script>
<template>
  <appHeader></appHeader>
  <div class="sobre">

    <section class="titulo">
      <h1>QUEM NÓS SOMOS?</h1>

      <p>
        Conheça um pouco dos desenvolvedores da Revelio!
      </p>
    </section>

    <section class="equipe">

      <h2>EQUIPE RESPONSÁVEL PELO FRONT-END</h2>

      <div class="pessoas">

        <div class="pessoa">
          <img src="/images/carol.png" alt="Ana Carolina">

          <h3>
            ANA CAROLINA BELLO<br>
            DOS SANTOS
          </h3>
        </div>


        <div class="pessoa">
          <img src="/images/camila.jpeg" alt="Camila Machado">

          <h3>
            CAMILA MACHADO<br>
            MENGARDA
          </h3>
        </div>


        <div class="pessoa">
          <img src="/images/victor.jpg" alt="Victor Feliciano">

          <h3>
            VICTOR FELICIANO
          </h3>
        </div>


        <div class="pessoa">
          <img src="/images/marco.jpg" alt="Marco Lytug">

          <h3>
            MARCO ANTHONYO<br>
            DE OLIVEIRA DIAS
          </h3>

        </div>

      </div>

    </section>

    <section class="equipe">

      <h2>EQUIPE RESPONSÁVEL PELO BACK-END</h2>

      <div class="pessoas">

        <div class="pessoa">

          <img class="foto-davi" src="/images/davi.jpeg" alt="Davi Mariano">

          <h3>
            DAVI MARIANO
          </h3>

        </div>


        <div class="pessoa">

          <img src="" alt="Renato">

          <h3>
            RENATO BATISTA PEREIRA
          </h3>

        </div>

      </div>

    </section>

    <section class="sobre-revelio">

      <h2>SOBRE A BIBLIOTECA REVELIO</h2>

      <p class="descricao">

        A Biblioteca Revelio é um projeto desenvolvido por alunos
        da 2ª INFO do Instituto Federal Catarinense, criado para
        tornar o estudo mais acessível, organizado e próximo da
        realidade dos estudantes.

      </p>


      <div class="objetivo">

        <h3>NOSSO OBJETIVO</h3>

        <p>

          Queremos construir a Biblioteca Revelio, uma biblioteca
          digital para ajudar alunos com dificuldades em seus
          respectivos cursos.

          Nessa biblioteca, haverá livros em PDFs, vídeoaulas,
          dicas de estudo (técnica Pomodoro, etc.), atividades,
          atendimento de professores e conteúdos já existentes,
          como questões resolvidas.

        </p>

      </div>


      <div class="cards">

        <div class="card">

          <h3>CONTEÚDO</h3>

          <p>

            Livros em PDF, vídeoaulas, questões resolvidas e
            materiais organizados para facilitar o acesso
            ao conhecimento.

          </p>

        </div>

        <div class="card">

          <h3>APOIO AO ESTUDO</h3>

          <p>

            Dicas e técnicas de estudo, como a técnica
            Pomodoro, além de atividades para ajudar
            na revisão e prática dos conteúdos.

          </p>

        </div>


        <div class="card">

          <h3>COMUNIDADE</h3>

          <p>

            Um espaço pensado para aproximar estudantes
            e professores, incentivando dúvidas, orientação
            e colaboração.

          </p>

        </div>

      </div>


      <div class="desenvolvimento">

        <h2>COMO O PROJETO É CONSTRUÍDO</h2>

        <p>

          Além do conteúdo educacional, a Revelio também envolve
          o desenvolvimento de uma plataforma digital.

          Nossa equipe é dividida entre
          <strong>Front-end</strong> e
          <strong>Back-end</strong>, trabalhando em conjunto
          para transformar a ideia da biblioteca em uma
          experiência funcional, organizada e acessível.

        </p>

      </div>



      <div class="final">

        <p>

          Mais do que uma biblioteca digital, a Revelio é uma
          iniciativa feita por estudantes para estudantes —
          unindo tecnologia, educação e colaboração.

        </p>

      </div>

    </section>

  </div>
</template>


<style scoped>
.sobre {
  min-height: 100vh;
  padding: 100px 20px;
  box-sizing: border-box;
  background: #fff;
  color: #141c21;
  font-family: Arial, sans-serif;
  text-align: center;
}

.titulo {
  max-width: 1100px;
  margin: 0 auto 80px;
}

.titulo h1 {
  margin: 0 0 20px;
  color: #135f7d;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: normal;
}

.titulo p {
  margin: 0;
  font-size: clamp(1.2rem, 3vw, 1.75rem);
}

.equipe,
.sobre-revelio {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 80px;
  padding: clamp(25px, 5vw, 70px);
  box-sizing: border-box;
  background: #f4e6cc;
  border: 5px solid #135f7d;
  border-radius: 40px;
}

.equipe h2,
.sobre-revelio > h2 {
  margin: 0 0 50px;
  color: #135f7d;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: normal;
}

.pessoas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
}

.pessoa {
  width: min(100%, 300px);
}

.pessoa img {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  margin: 0 auto;
  object-fit: cover;
  border-radius: 30px;
}

.pessoa h3 {
  margin: 20px 0 0;
  font-family: Georgia, serif;
  font-size: clamp(1.2rem, 2.5vw, 1.7rem);
  font-weight: normal;
  line-height: 1.2;
}

.foto-davi {
  object-position: center top;
}

.descricao {
  max-width: 950px;
  margin: 0 auto 50px;
  color: #444;
  font-size: 1.35rem;
  line-height: 1.7;
}

.objetivo {
  margin-bottom: 50px;
  padding: 30px;
  background: white;
  border: 2px solid #135f7d;
  border-radius: 25px;
}

.objetivo h3,
.card h3 {
  color: #135f7d;
  font-size: 1.6rem;
}

.objetivo p,
.card p,
.desenvolvimento p {
  font-size: 1.15rem;
  line-height: 1.7;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-bottom: 70px;
}

.card {
  min-height: 250px;
  padding: 25px;
  border: 2px solid #135f7d;
  border-radius: 25px;
}

.desenvolvimento {
  margin-bottom: 50px;
}

.desenvolvimento h2 {
  margin-bottom: 20px;
  color: #135f7d;
  font-size: clamp(1.7rem, 4vw, 2.2rem);
  font-weight: normal;
}

.final {
  padding: 30px;
  background: #135f7d;
  color: white;
  border-radius: 25px;
}

.final p {
  margin: 0;
  font-size: 1.3rem;
  line-height: 1.6;
}

@media (max-width: 700px) {
  .sobre {
    padding: 70px 15px;
  }

  .equipe,
  .sobre-revelio {
    border-width: 3px;
    border-radius: 25px;
  }

  .pessoas {
    gap: 35px;
  }

  .pessoa {
    max-width: 280px;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .objetivo {
    padding: 20px;
  }
}
</style>
