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
  width: 100%;
  padding: 140px 8vw 100px;

  background-color: #ffffff;

  color: #141c21;

  font-family: Arial, sans-serif;

  text-align: center;
}

.titulo {
  max-width: 1100px;
  margin: 0 auto 100px;

  text-align: center;
}

.titulo h1 {
  font-size: 60px;
  font-weight: normal;
  margin-bottom: 20px;
}

.titulo p {
  font-size: 28px;
}


.equipe {
  max-width: 1100px;
  margin: 0 auto 120px;

  text-align: center;
}

.equipe h2 {
  font-size: 42px;
  font-weight: normal;

  margin-bottom: 60px;
}


.pessoas {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 80px 60px;
}

.pessoa {
  text-align: center;
}

.pessoa img,
.sem-foto {
  width: 100%;
  height: 450px;

  object-fit: cover;

  border-radius: 35px;
}


.pessoa h3 {
  margin-top: 20px;

  font-family: Georgia, serif;

  font-size: 27px;

  font-weight: normal;

  line-height: 1.2;
}


.sobre-revelio {
  max-width: 1200px;

  margin: 0 auto;

  padding: 70px;

  background-color: #F4E6CC;

  border: 5px solid #135F7D;

  border-radius: 50px;

  text-align: center;
}


.sobre-revelio > h2 {
  font-size: 45px;

  font-weight: normal;

  margin-bottom: 30px;
}


.descricao {
  font-size: 23px;

  line-height: 1.7;

  color: #444;

  margin-bottom: 60px;
}


.objetivo {

  background-color: white;

  border: 2px solid #135F7D;

  border-radius: 30px;

  padding: 35px;

  margin-bottom: 60px;

}


.objetivo h3 {

  color: #135F7D;

  font-size: 28px;

  margin-top: 0;

}


.objetivo p {

  font-size: 21px;

  line-height: 1.7;

}

.cards {

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 30px;

  margin-bottom: 80px;

}


.card {

  border: 2px solid #135F7D;

  border-radius: 30px;

  padding: 30px;

  min-height: 320px;

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

  margin-bottom: 60px;

}


.desenvolvimento h2 {

  font-size: 35px;

  font-weight: normal;

}


.desenvolvimento p {

  font-size: 21px;

  line-height: 1.7;

}


.final {

  background-color: #135F7D;

  color: white;

  border-radius: 30px;

  padding: 35px;

}


.final p {

  font-size: 24px;

  line-height: 1.6;

  text-align: center;

  margin: 0;

}
.sobre p,
.sobre h1,
.sobre h2,
.sobre h3 {
  text-align: center;
}
.sobre * {
  text-align: center;
}

@media (max-width: 800px) {

  .sobre {
    padding: 120px 25px 70px;
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
    grid-template-columns: 1fr;
  }


  .sobre-revelio {
    padding: 35px 25px;
  }


  .sobre-revelio > h2 {
    font-size: 32px;
  }


  .cards {
    grid-template-columns: 1fr;
  }

}

</style>