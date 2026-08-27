<template>
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
          <img src="" alt="Ana Carolina">

          <h3>
            ANA CAROLINA BELLO<br>
            DOS SANTOS
          </h3>
        </div>


        <div class="pessoa">
          <img src="" alt="Camila Machado">

          <h3>
            CAMILA MACHADO<br>
            MENGARDA
          </h3>
        </div>


        <div class="pessoa">
          <img src="" alt="Victor Feliciano">

          <h3>
            VICTOR FELICIANO
          </h3>
        </div>


        <div class="pessoa">
          <img src="" alt="Marco Lytug">

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

          <img src="" alt="Davi Mariano">

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


      <!-- OBJETIVO -->

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
  width: 100vw;
  min-height: 100vh;

  margin-left: 50%;
  transform: translateX(-50%);

  padding: 100px 5%;
  box-sizing: border-box;
  flex: content;
  justify-content: center;
  align-items: center;

}

.sobre {
  min-height: 100vh;

  padding: 100px 20px;

  box-sizing: border-box;

  background-color: white;

  color: #141c21;

  font-family: Arial, sans-serif;

  text-align: center;
}


.titulo {
  width: 100%;
  max-width: 1100px;

  margin: 0 auto 100px;

  text-align: center;
}

.titulo h1 {
  margin: 0 0 20px;

  font-size: 60px;
  font-weight: normal;
}

.titulo p {
  margin: 0;

  font-size: 28px;
}


.equipe {
  width: 100%;
  max-width: 1100px;

  margin: 0 auto 120px;

  text-align: center;
}

.equipe h2 {
  margin: 0 0 60px;

  font-size: 42px;
  font-weight: normal;
}


/* PESSOAS */

.pessoas {
  width: 100%;

  display: flex;

  flex-wrap: wrap;

  justify-content: center;

  align-items: center;

  gap: 80px;
}

.pessoa {
  width: 450px;

  text-align: center;
}

.pessoa img {
  display: block;

  width: 450px;
  height: 450px;

  margin: 0 auto;

  object-fit: cover;

  border-radius: 35px;
}



.pessoa h3 {
  margin: 20px 0 0;

  font-family: Georgia, serif;

  font-size: 27px;

  font-weight: normal;

  line-height: 1.2;

  text-align: center;
}



.sobre-revelio {
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  padding: 70px;

  box-sizing: border-box;

  background-color: #F4E6CC;

  border: 5px solid #135F7D;

  border-radius: 50px;

  text-align: center;
}


.sobre-revelio > h2 {
  margin: 0 0 30px;

  font-size: 45px;

  font-weight: normal;

  text-align: center;
}



.descricao {
  max-width: 1000px;

  margin: 0 auto 60px;

  font-size: 23px;

  line-height: 1.7;

  color: #444;

  text-align: center;
}


.objetivo {
  width: 100%;

  margin: 0 auto 60px;

  padding: 35px;

  box-sizing: border-box;

  background-color: white;

  border: 2px solid #135F7D;

  border-radius: 30px;

  text-align: center;
}


.objetivo h3 {
  margin-top: 0;

  color: #135F7D;

  font-size: 28px;
}


.objetivo p {
  font-size: 21px;

  line-height: 1.7;
}



.cards {
  width: 100%;

  display: flex;

  justify-content: center;

  align-items: stretch;

  gap: 30px;

  margin-bottom: 80px;
}


.card {
  flex: 1;

  min-height: 320px;

  padding: 30px;

  box-sizing: border-box;

  border: 2px solid #135F7D;

  border-radius: 30px;

  text-align: center;
}


.card h3 {
  color: #135F7D;

  font-size: 25px;
}


.card p {
  font-size: 19px;

  line-height: 1.7;
}

.desenvolvimento {
  width: 100%;

  margin: 0 auto 60px;

  text-align: center;
}


.desenvolvimento h2 {
  margin-bottom: 25px;

  font-size: 35px;

  font-weight: normal;
}


.desenvolvimento p {
  max-width: 1000px;

  margin: 0 auto;

  font-size: 21px;

  line-height: 1.7;
}

.final {
  width: 100%;

  margin: 0 auto;

  padding: 35px;

  box-sizing: border-box;

  background-color: #135F7D;

  color: white;

  border-radius: 30px;

  text-align: center;
}


.final p {
  margin: 0;

  font-size: 24px;

  line-height: 1.6;
}


@media (max-width: 800px) {

  .sobre {
    padding: 70px 20px;
  }


  .titulo h1 {
    font-size: 42px;
  }


  .titulo p {
    font-size: 22px;
  }


  .equipe h2 {
    font-size: 32px;
  }


  .pessoas {
    flex-direction: column;
  }


  .pessoa {
    width: 100%;
    max-width: 450px;
  }


  .pessoa img,


  .sobre-revelio {
    padding: 35px 25px;
  }


  .sobre-revelio > h2 {
    font-size: 32px;
  }


  .cards {
    flex-direction: column;
  }


  .card {
    width: 100%;
  }

}

</style>