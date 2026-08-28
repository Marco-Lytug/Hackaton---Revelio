export const quizzesInfo = [

  // ================= 1º ANO =================
  {
    ano: 1,
    nome: "1º Ano de Informática",
    quizzes: [
      // -----QUIZ 1-----
      {
        id: "1-quiz-1",
        titulo: "Descubra quantas tags HTML você conhece",
        descricao: "Veja se você realmente domina os fundamentos básicos!",
        perguntas: [
          {
            id: 1,
            nivel: "Fácil",
            pergunta: "Qual a principal função da tag <head> ?",
            alternativas: 
            ["A) Exibir o cabeçalho da página para o usuário.",
            "B) Armazenar informações e configurações do documento.",
            "C) Definir o conteúdo principal da página.", 
            "D) Organizar os elementos visíveis do site."],
            respostaCorreta: 1
          },
          {
            id: 2,
            nivel: "Fácil",
            pergunta: "Qual a melhor tag para representar uma lista ordenada ?",
            alternativas: ["A) <li> ", "B) <ul> ", "C) <ol> ", "D) <dl> "],
            respostaCorreta: 2
          },
          {
            id: 3,
            nivel: "Médio",
            pergunta: "Qual a diferença entre a tag <main> e a tag <body>  ?",
            alternativas: 
             ["A) A <main> representa o conteúdo principal do seu corpo e o <body> que representa o corpo do documento.",  
              "B) O <body> representa o conteúdo principal do seu corpo e o <main> que representa o corpo do documento.", 
              "C) <body> é usado apenas para textos, enquanto <main> pode conter qualquer elemento.", 
              "D) <body> é opcional, enquanto <main>  é obrigatório."],
            respostaCorreta: 0
          },
          {
            id: 4,
            nivel: "Médio",
            pergunta: "Qual tag HTML é usada para criar um link clicável?",
            alternativas: ["A) <link>",  "B) <a>", "C) <href>", "D) <url>"],
            respostaCorreta: 1
          },
          {
            id: 5,
            nivel: "Difícil",
            pergunta: "Qual é a estrutura básica correta para iniciar uma página HTML?",
            alternativas: 
            ["A) <html> <head> <body> </body> </head> </html>", 
              "B) <!DOCTYPE html> <html> <body> <head> </head> </body> </html>", 
              "C) <!DOCTYPE html> <html> <head> </head> <body> </body> </html>", 
              "D) <html> <!DOCTYPE html> <head> </head> <body> </body> </html>"],
            respostaCorreta: 2
          },
          {
            id: 6,
            nivel: "Difícil",
            pergunta: "Qual dessas tags NÃO quebra linha automaticamente?",
            alternativas: ["A) <p>", "B) <div>", "C) <h1>", "D) <span>"],
            respostaCorreta: 3
          }
        ]
      },

      // -----QUIZ 2-----
      {
        id: "1-quiz-2",
        titulo: "Você sobreviveria a uma prova de Arrays?",
        descricao: "Do primeiro índice ao último elemento, prove que você sabe navegar, modificar e manipular arrays!",
        perguntas: [
          {
            id: 1,
            nivel: "Fácil",
            pergunta: "Observe o código abaixo. Qual será o resultado impresso no console?",
            codigo: `JavaScript
const cores = ["azul", "verde", "amarelo", "roxo"];
console.log(cores[3]);
`,
            alternativas: ["A) amarelo", "B) roxo", "C) undefined", "D) verde"],
            respostaCorreta: 1
          },
          {
            id: 2,
            nivel: "Fácil",
            pergunta: "2. Qual método do JavaScript é utilizado para adicionar um ou mais elementos ao início de um array e retorna o novo comprimento desse array?",
            alternativas: ["A) array.push()", "B) array.unshift()", "C) array.pop()", "D) array.shift() "],
            respostaCorreta: 1
          },
          {
            id: 3,
            nivel: "Médio",
            pergunta: " Qual código é o certo? Você tem um array de números chamado numeros e precisa criar um novo array contendo apenas os números que sejam maiores que 10. Qual das opções abaixo realiza essa tarefa corretamente sem modificar o array original?",
            alternativas: 
            ["A) const novo = numeros.map(num => num > 10);",  
             "B) const novo = numeros.find(num => num > 10);", 
             "C) const novo = numeros.filter(num => num > 10);", 
             "D) const novo = numeros.slice(num => num > 10);"],
            respostaCorreta: 2
          },
          {
            id: 4,
            nivel: "Médio",
            pergunta: " O que será exibido no console após a execução do seguinte trecho?",
            codigo: `const valores = [10, 20, 30];
const resultado = valores.map(v => v * 2);
valores.push(40);
console.log(resultado.length);
`,
            alternativas: ["A) 3",  "B) 4", "C) 0", "D) Erro"],
            respostaCorreta: 0
          },
          {
            id: 5,
            nivel: "Difícil",
            pergunta: " Qual será a saída do código a seguir no console?",
            codigo: `const listaA = [1, 2, 3];
const listaB = listaA;
listaB.push(4);
console.log(listaA === listaB, listaA.length);
`,
            alternativas: ["A) false, 3", "B) true, 3", "C) false, 4", "D) true, 4"],
            respostaCorreta: 3
          },
          {
            id: 6,
            nivel: "Difícil",
            pergunta: "No JavaScript, vários métodos de array alteram o array original (mutação), enquanto outros retornam uma cópia ou um novo valor. Qual dos métodos abaixo NÃO altera o array original ao ser invocado?",
            alternativas: 
            ["A) Array.prototype.sort()", 
             "B) Array.prototype.splice()", 
             "C) Array.prototype.slice()", 
             "D) Array.prototype.reverse()"],
            respostaCorreta: 2
          }
        ]
      },

      // -----QUIZ 3-----
      {
        id: "1-quiz-3",
        titulo: "Quantas vezes esse código vai repetir?",
        descricao: "Descubra se você domina for, while, do...while e sabe quando cada um deles entra em ação!",
        perguntas: [
          {
            id: 1,
            nivel: "Fácil",
            pergunta: " Se você quiser passar por todos os itens de um array, pegando apenas o valor de cada um sem se preocupar em criar contadores ou controlar a posição (como a variável i), qual estrutura de repetição é a melhor escolha no JavaScript",
            alternativas: ["A) for...in", "B) for...of", "C) for (let i = 0; ...)", "D) while"],
            respostaCorreta: 1
          },
          {
            id: 2,
            nivel: "Fácil",
            pergunta: " Observe o código abaixo utilizando a estrutura while. Qual será o último número impresso no console antes do loop terminar?",
            codigo: `let contador = 0;
while (contador < 3) {
  console.log(contador);
  contador++;
}
`,
            alternativas: ["A) 2", "B) 3", "C) 4", "D) 0"],
            respostaCorreta: 0
          },
          {
            id: 3,
            nivel: "Médio",
            pergunta: " Qual código é o certo? Você precisa imprimir no console os números de 10 até 1, em ordem decrescente. Qual dos blocos de código abaixo realiza essa tarefa corretamente sem causar um loop infinito?",
            alternativas: 
            ["A) for (let i = 10; i >= 1; i++) { console.log(i); }",  
             "B) for (let i = 0; i < 10; i--) { console.log(i); }", 
             "C) for (let i = 10; i > 0; i--) { console.log(i); }", 
             "D) for (let i = 10; i < 0; i--) { console.log(i); }"],
            respostaCorreta: 2
          },
          {
            id: 4,
            nivel: "Médio",
            pergunta: " O que será exibido no console após a execução do seguinte trecho de código?",
            codigo: `const palavra = "JS";
for (const letra of palavra) {
  console.log(letra);
}
`,
            alternativas: 
            ["A) Um erro, pois for...of funciona apenas com arrays e não com strings.", 
             "B) Os índices 0 e 1, em linhas separadas.", 
             "C) A string 'JS' impressa inteira duas vezes consecutivas.", 
             "D) As letras 'J' e 'S', uma em cada linha."],
            respostaCorreta: 3
          },
          {
            id: 5,
            nivel: "Difícil",
            pergunta: "Qual será o valor final da variável soma impresso no console após a execução do loop abaixo?",
            codigo: `let soma = 0;
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  soma += i;
}
console.log(soma);
`,
            alternativas: ["A) 12", "B) 15", "C) 6", "D) 3"],
            respostaCorreta: 0
          },
          {
            id: 6,
            nivel: "Difícil",
            pergunta: "Analise o uso do operador de incremento dentro da própria condição do while. Quais valores serão exibidos no console?",
            codigo: `let x = 0;
while (x++ < 3) {
  console.log(x);
}
`,
            alternativas: ["A) 0, 1 e 2", "B) 1, 2 e 3", "C) 0, 1, 2 e 3", "D) 1, 2, 3 e 4"],
            respostaCorreta: 1
          }
        ]
      }
    ]
  },

  // ================= 2º ANO =================
  {
    ano: 2,
    nome: "2º Ano de Informática",
    quizzes: [
      {
        id: "2-quiz-1",
        titulo: "Você realmente entende de Banco de Dados?",
        descricao: "Do SELECT ao JOIN, descubra se você domina os principais conceitos de banco de dados!",
        perguntas: [
          {
            id: 1,
            nivel: "Fácil",
            pergunta: " O que é um banco de dados?",
            alternativas: 
            ["A) Um programa utilizado apenas para criar sites.", 
             "B) Um conjunto organizado de informações armazenadas eletronicamente", 
             "C) Um sistema operacional para servidores", 
             "D) Um editor de textos."],
            respostaCorreta: 1
          },
          {
            id: 2,
            nivel: "Fácil",
            pergunta: "Qual linguagem é utilizada para consultar e manipular dados em bancos de dados relacionais?",
            alternativas: ["A) HTML", "B) CSS", "C) SQL", "D) JavaScript"],
            respostaCorreta: 2
          },
          {
            id: 3,
            nivel: "Médio",
            pergunta: "Em um banco de dados relacional, qual consulta retorna apenas os nomes dos clientes cujo estado seja 'SC'?",
            alternativas: 
            ["A) SELECT nome FROM clientes WHERE estado = 'SC';",  
             "B) SELECT * FROM clientes ORDER BY estado = 'SC';", 
             "C) SELECT estado FROM clientes WHERE nome = 'SC';", 
             "D) SELECT nome, estado FROM clientes GROUP BY estado;"],
            respostaCorreta: 0
          },
          {
            id: 4,
            nivel: "Médio",
            pergunta: " Sobre chaves em bancos de dados, selecione a alternativa correta",
            alternativas: 
            ["A) A chave estrangeira identifica exclusivamente cada registro da tabela.",  
             "B) A chave primária pode possuir valores repetidos.", 
             "C) Uma chave estrangeira estabelece o relacionamento entre tabelas.", 
             "D) Toda tabela deve possuir mais de uma chave primária."],
            respostaCorreta: 2
          },
          {
            id: 5,
            nivel: "Difícil",
            pergunta: "Qual afirmação sobre o comando JOIN está correta?",
            alternativas: 
            ["A) É utilizado para remover registros duplicados.", 
             "B) Serve para alterar a estrutura de uma tabela.", 
             "C) Permite combinar informações de duas ou mais tabelas relacionadas.", 
             "D) É utilizado apenas para criar índices."],
            respostaCorreta: 2
          },
          {
            id: 6,
            nivel: "Difícil",
            pergunta: "Qual consulta incrementa em 10% o salário dos funcionários do setor de TI?",
            alternativas: 
            ["A)UPDATE funcionarios SET salario = salario * 1.10 WHERE setor = 'TI';", 
             "B)ALTER funcionarios SET salario = salario * 1.10;", 
             "C)INSERT INTO funcionarios (salario) VALUES (salario * 1.10);", 
             "D)SELECT salario * 1.10 FROM funcionarios WHERE setor = 'TI';"],
            respostaCorreta: 0
          }
        ]
      },
      {
        id: "2-quiz-2",
        titulo: "Quanto você sabe sobre Vue.js?",
        descricao: "Descubra se você domina o Vue ou se ainda está brigando com o v-if e o v-for",
        perguntas: [
          {
            id: 1,
            nivel: "Fácil",
            pergunta: "Qual diretiva do Vue.js é usada para exibir um elemento na tela apenas se uma condição for verdadeira? ",
            alternativas: ["A) v-for", "B) v-model", "C) v-if", "D) v-on"],
            respostaCorreta: 2
          },
          {
            id: 2,
            nivel: "Fácil",
            pergunta: "Como você escuta um evento de clique em um botão para executar uma função chamada salvar no Vue.js?",
            alternativas: ["A) v-click=\"salvar\"", "B) @click=\"salvar\"", "C) bind:click=\"salvar\"", "D) click-event=\"salvar\""],
            respostaCorreta: 1
            
          },
          {
            id: 3,
            nivel: "Médio",
            pergunta: "Considere o código abaixo e responda: Qual é o principal cuidado ao tentar usar v-for e v-if juntos no mesmo elemento no Vue.js?",
            codigo: `<template>
  <ul>
    <li v-for="item in itens" v-if="item.visivel" :key="item.id">
      {{ item.nome }}
    </li>
  </ul>
</template>
`,
            alternativas: 
            ["A) Eles se cancelam mutuamente, fazendo com que nenhum elemento seja exibido na tela.", 
             "B) O Vue não permite que eles fiquem no mesmo elemento, pois o v-for tem prioridade maior de processamento e pode causar problemas de performance", 
             "C) O código só funciona corretamente se o v-if vier antes do v-for na mesma linha.", 
             "D) O v-if passa a ignorar o array e filtra apenas strings."],
            respostaCorreta: 1
          },
          {
            id: 4,
            nivel: "Médio",
            pergunta: "Analise o código abaixo e responda: O que essa estrutura faz na tela?",
            codigo: `<template>
  <ul>
    <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return { frutas: ["Maçã", "Banana", "Uva"] };
  }
}
</script>
`,
            alternativas: 
            ["A) Cria uma lista com três itens, mostrando uma fruta em cada linha.",  
             "B) Mostra apenas a palavra \"Maçã\" repetida três vezes.", 
             "C) Apresenta um erro porque falta a diretiva v-if.", 
             "D) Exibe um campo de texto interativo com as frutas."],
            respostaCorreta: 0
          },
          {
            id: 5,
            nivel: "Difícil",
            pergunta: "Qual é a principal diferença prática entre usar uma propriedade computed e um método comum (methods) para exibir dados formatados no template do Vue?",
            alternativas: 
            ["A) Métodos comuns salvam os dados em cache e só rodam se a página for recarregada.", 
             "B) Não há diferença; o Vue trata ambos exatamente da mesma forma por baixo dos panos.", 
             "C) Propriedades computed calculam o valor apenas quando suas dependências reativas mudam e guardam o resultado em cache.", 
             "D) Propriedades computed exigem obrigatoriamente o uso de requisições assíncronas (async/await)."],
            respostaCorreta: 2
          },
          {
            id: 6,
            nivel: "Difícil",
            pergunta: "No Vue.js, para que serve um modificador de evento como o .prevent (por exemplo: @submit.prevent=\"enviar\")?",
            alternativas: 
            ["A) Para impedir que o formulário recarregue a página inteira ao ser submetido, chamando o método preventDefault() nativo do JavaScript.", 
             "B) Para bloquear a execução da função caso o usuário digite números no campo de texto.", 
             "C) Para verificar se o usuário preencheu todos os campos obrigatórios antes de liberar o botão.", 
             "D) Para criptografar os dados do formulário antes de enviá-los para o servidor."],
            respostaCorreta: 0
          }
        ]
      },
      {
        id: "2-quiz-3",
        titulo: "Pronto para a próxima Sprint?",
        descricao: "Responda às perguntas e veja se você está preparado para encarar mais uma sprint sem impedimentos.",
        perguntas: [
          {
            id: 1,
            nivel: "Fácil",
            pergunta: "Quais são os três papéis oficiais definidos pelo Scrum?",
            alternativas: 
            ["A) Gerente de Projetos, Desenvolvedor Líder e Cliente", 
             "B) Product Owner, Scrum Master e Developers", 
             "C) Analista de Qualidade, Diretor de TI e Designer UX", 
             "D) Scrum Master, Tech Lead e Administrador de Banco de Dados"], 
            respostaCorreta: 1
          },
          {
            id: 2,
            nivel: "Fácil",
            pergunta: "O que é uma Sprint no Scrum?",
            alternativas: 
            ["A) Um relatório financeiro entregue ao cliente no final do ano.", 
             "B) Um documento detalhado com mais de 200 páginas descrevendo o software.", 
             "C) Um período fixo de tempo para criar um incremento do produto.", 
             "D) Uma reunião diária onde o chefe cobra os atrasos da equipe."],
            respostaCorreta: 2
          },
          {
            id: 3,
            nivel: "Médio",
            pergunta: "Para que serve a Daily Scrum?",
            alternativas: 
            ["A) Para o Product Owner definir novas tarefas que a equipe é obrigada a terminar até o fim do dia.", 
             "B) Para avaliar o desempenho individual de cada funcionário e calcular bônus salariais.", 
             "C) Para apresentar o produto finalizado para diretores e clientes externos.", 
             "D) Para a equipe de desenvolvimento inspecionar o progresso da Sprint e adaptar o plano para o dia."],
            respostaCorreta: 3
          },
          {
            id: 4,
            nivel: "Médio",
            pergunta: "O que é o Product Backlog?",
            alternativas: 
            ["A) Uma lista emergente e ordenada de tudo o que pode ser necessário no produto.", 
             "B) O manual de instruções de uso que o cliente final lê ao instalar o aplicativo.", 
             "C) Um histórico financeiro com os custos de cada hora trabalhada pela equipe.", 
             "D) A lista oficial de todos os bugs críticos que aconteceram na semana passada."],
            respostaCorreta: 0
          },
          {
            id: 5,
            nivel: "Difícil",
            pergunta: "Qual é a principal responsabilidade do Scrum Master em relação ao time de desenvolvimento e à organização?",
            alternativas: 
            ["A) Definir e priorizar quais funcionalidades entram na Sprint, cobrar prazos de entrega e os membros individualmente.", 
             "B) Escrever todo o código principal do projeto para garantir que a arquitetura seja perfeita, deixando os outros membros cuidarem do resto.", 
             "C) Atuar como líder ajudando a remover impedimentos e promover a compreensão do Scrum.", 
             "D) Decidir o salário e as promoções de cada membro da equipe com base nas tarefas concluídas."],
            respostaCorreta: 2
          },
          {
            id: 6,
            nivel: "Difícil",
            pergunta: "Durante a Reunião de Revisão da Sprint (Sprint Review), o que deve acontecer primordialmente? ",
            alternativas: 
            ["A) A equipe faz uma votação secreta para demitir os membros que menos produziram.", 
             "B) O time inspeciona o incremento resultante da Sprint e adapta o Product Backlog se necessário.", 
             "C) Os desenvolvedores realizam testes de estresse e segurança no servidor de produção.", 
             "D) O Scrum Master revisa o código fonte linha por linha para encontrar erros de digitação, sintaxe e etc."],
            respostaCorreta: 1
          }
        ]
      }
    ]
  },

  // ================= 3º ANO =================
  {
    ano: 3,
    nome: "3º Ano de Informática",
    quizzes: [
      {
        id: "3-quiz-1",
        titulo: "Quanto você sabe sobre Python?",
        descricao: "Está na hora de colocar seus conhecimentos à prova e descobrir se você realmente aprendeu a linguagem!",
        perguntas: [
          {
            id: 1,
            nivel: "Fácil",
            pergunta: "Qual função nativa do Python é utilizada para exibir mensagens ou valores no terminal durante a execução de um programa?",
            alternativas: ["A) echo()", "B) print()", "C) console.log()", "D) write()"],
            respostaCorreta: 1
          },
          {
            id: 2,
            nivel: "Fácil",
            pergunta: "Observe o código a seguir que manipula um dicionário em Python e responda: Qual será o resultado exibido no console?",
            codigo: `usuario = {"nome": "Lucas", "idade": 20}
print(usuario.get("email", "não informado"))
`,
            alternativas: 
            ["A) None", 
             "B) KeyError: 'email'", 
             "C) não informado", 
             "D) email"],
            respostaCorreta: 2
          },
          {
            id: 3,
            nivel: "Médio",
            pergunta: "Qual código é o certo? Você precisa aplicar um decorador de autenticação chamado login_required em uma função de página web. Qual das opções abaixo representa a sintaxe correta de uso de um decorador em Python?",
            alternativas: 
            ["A) @login_required posicionado imediatamente acima da linha def minha_pagina():",  
             "B) def minha_pagina() -> login_required:", 
             "C) login_required(def minha_pagina():)", 
             "D) def minha_pagina() using login_required:"],
            respostaCorreta: 0
          },
          {
            id: 4,
            nivel: "Médio",
            pergunta: "O que será impresso no console após executar a função a seguir?",
            codigo: `def configurar_perfil(**kwargs):
    print(type(kwargs))

configurar_perfil(status="ativo", nivel=2)
`,
            alternativas: ["A) <class 'tuple'>",  "B) <class 'dict'>", "C) <class 'list'>", "D) <class 'set'>"],
            respostaCorreta: 1
          },
          {
            id: 5,
            nivel: "Difícil",
            pergunta: " Analise o bloco de código a seguir e determine qual será o valor impresso no console ao final da execução:",
            codigo: `try:
    valor = int("10b")
except ValueError:
    valor = 0
else:
    valor = 100
finally:
    valor += 5

print(valor)
`,
            alternativas: ["A) 105", "B) 10", "C) 0", "D) 5"],
            respostaCorreta: 3
          },
          {
            id: 6,
            nivel: "Difícil",
            pergunta: "Ao preparar um projeto Python/Django para ser implantado em outro servidor, qual sequência de comandos via terminal é a prática padrão para gerar o registro de dependências instaladas e depois instalá-las no novo ambiente?",
            alternativas: 
            ["A) pip save > env.txt e pip load -r env.txt", 
             "B) pip list --\export\ e pip import --all", 
             "C) pip freeze > requirements.txt e pip install -r requirements.txt", 
             "D) python -m pip \export\ e python -m pip import"],
            respostaCorreta: 2
          }
        ]
      },
      {
        id: "3-quiz-2",
        titulo: "Classes e objetos não vão escapar de você!",
        descricao: "Teste seus conhecimentos sobre os conceitos que fazem a Programação Orientada a Objetos funcionar!",
        perguntas: [
          {
            id: 1,
            nivel: "Fácil",
            pergunta: "Na Programação Orientada a Objetos, qual é a relação conceitual básica entre uma Classe e um Objeto?",
            alternativas: 
            ["A) Uma classe é a execução em memória de um objeto que já foi destruído pelo sistema.", 
             "B) Uma classe funciona como um molde ou planta, enquanto o objeto é a instância criada a partir dela.", 
             "C) O objeto define a estrutura das variáveis, enquanto a classe armazena apenas os dados brutos.", 
             "D) Classe e objeto são termos estritamente sinônimos que representam qualquer variável no código."],
            respostaCorreta: 1
          },
          {
            id: 2,
            nivel: "Fácil",
            pergunta: "Qual pilar da POO é responsável por esconder os detalhes internos de funcionamento de um objeto, expondo apenas o necessário e protegendo seus dados contra alterações indevidas?",
            alternativas: ["A) Herança", "B) Polimorfismo", "C) Abstração", "D) Encapsulamento"],
            respostaCorreta: 3
          },
          {
            id: 3,
            nivel: "Médio",
            pergunta: "Qual código é o certo? Em Python, você precisa criar uma classe Cachorro que herde todos os atributos e métodos de uma classe base chamada Animal. Qual é a sintaxe correta para declarar essa herança?",
            alternativas: 
            ["A) class Cachorro extends Animal:",  
             "B) class Cachorro(Animal):", 
             "C) class Cachorro implements Animal:", 
             "D) class Cachorro : Animal"],
            respostaCorreta: 1
          },
          {
            id: 4,
            nivel: "Médio",
            pergunta: "Observe a definição da classe abaixo em Python e responda: O que a palavra self representa dentro do método __init__ e dos demais métodos da classe?",
            codigo: `class Pessoa:
    def __init__(self, nome):
        self.nome = nome

p1 = Pessoa("Ana")
`,
            alternativas: 
            ["A) É uma variável global responsável por contar quantas instâncias da classe já foram criadas.",  
             "B) É um método utilitário que apaga a variável da memória assim que o script finaliza.", 
             "C) Representa a própria instância específica do objeto que está sendo criada ou manipulada naquele momento.", 
             "D) É uma palavra reservada opcional utilizada apenas para exportar o código para outros módulos."],
            respostaCorreta: 2
          },
          {
            id: 5,
            nivel: "Difícil",
            pergunta: "Qual será o resultado impresso no console após a execução do código a seguir?",
            codigo: `class Veiculo:
    def ligar(self):
        return "Motor ligado"

class Carro(Veiculo):
    def ligar(self):
        return super().ligar() + " e verificado"

c = Carro()
print(c.ligar())
`,
            alternativas: 
            ["A) Motor ligado", 
             "B) Motor ligado e verificado", 
             "C) Erro de execução, pois super() não pode chamar métodos com o mesmo nome na subclasse.", 
             "D) e verificado"],
            respostaCorreta: 1
          },
          {
            id: 6,
            nivel: "Difícil",
            pergunta: " Em Python, quando utilizamos o decorador @classmethod em um método dentro de uma classe, qual é a principal característica desse método?",
            alternativas: 
            ["A) Ele recebe automaticamente a própria classe (cls) como primeiro parâmetro em vez da instância (self), permitindo acessar ou modificar o estado da classe.", 
             "B) Ele converte a classe em um componente estritamente privado que impede a criação de subclasses.", 
             "C) Ele executa o código do método automaticamente durante o momento de compilação do arquivo.", 
             "D) Ele elimina a necessidade de definir um método construtor (__init__) dentro da classe."],
            respostaCorreta: 0
          }
        ]
      },
      {
        id: "3-quiz-3",
        titulo: "Você está pronto para encarar o Django?",
        descricao: "Models, views, templates e muito mais: será que você consegue acertar todas?",
        perguntas: [
          {
            id: 1,
            nivel: "Fácil",
            pergunta: "Qual comando do CLI é utilizado para criar um novo aplicativo (app) dentro de um projeto Django existente?",
            alternativas: 
            ["A) python manage.py createapp nome_do_app", 
             "B) python manage.py startapp nome_do_app", 
             "C) django-admin newapp nome_do_app", 
             "D) python manage.py initapp nome_do_app"],
            respostaCorreta: 1
          },
          {
            id: 2,
            nivel: "Fácil",
            pergunta: "Na arquitetura MVT (Model-View-Template) nativa do Django, qual componente é responsável por definir a estrutura dos dados e a lógica de negócios com o banco de dados?",
            alternativas: 
            ["A) View", "B) Template", "C) Model", "D) Controller"],
            respostaCorreta: 2
          },
          {
            id: 3,
            nivel: "Médio",
            pergunta: "Qual código é o certo? Você precisa buscar todos os registros do model Produto cujo preço seja estritamente maior que 50. Qual instrução do ORM do Django realiza essa consulta corretamente?",
            alternativas: 
            ["A) Produto.objects.where(preco > 50)",  
             "B) Produto.objects.find(preco__gt=50)", 
             "C) Produto.objects.filter(preco > 50)", 
             "D) Produto.objects.filter(preco__gt=50)"],
            respostaCorreta: 3
          },
          {
            id: 4,
            nivel: "Médio",
            pergunta: "Observe a definição de rota no arquivo urls.py e responda: Como a função da view detalhe_artigo receberá o valor capturado nessa URL? ",
            alternativas: 
            ["A) Como um argumento inteiro passado para a função logo após o objeto request.",  
             "B) Como uma string acessível exclusivamente dentro do dicionário request.POST['id'].", 
             "C) Como um parâmetro de busca acessível via request.GET['id'].", 
             "D) Como um atributo anônimo anexado ao objeto request.user."],
            respostaCorreta: 0
          },
          {
            id: 5,
            nivel: "Difícil",
            pergunta: "Ao trabalhar com relacionamentos do tipo chave estrangeira (ForeignKey / OneToOne), qual método do QuerySet realiza um JOIN SQL na consulta original para evitar o problema de N+1 queries?",
            alternativas: ["A) prefetch_related()", "B) annotate()", "C) select_related()", "D) bulk_create()"],
            respostaCorreta: 2
          },
          {
            id: 6,
            nivel: "Difícil",
            pergunta: "Qual é a responsabilidade exata do comando python manage.py makemigrations no fluxo de trabalho do Django?",
            alternativas: 
            ["A) Ler as alterações feitas nos arquivos models.py e gerar os arquivos de migração Python correspondentes com o histórico de mudanças.", 
             "B) Conectar ao banco de dados e executar os comandos SQL pendentes para alterar as tabelas diretamente.", 
             "C) Validar a integridade das chaves estrangeiras e gerar relatórios de consistência do banco de dados.", 
             "D) Sincronizar o estado dos modelos diretamente com as variáveis configuradas no arquivo settings.py."],
            respostaCorreta: 0
          }
        ]
      }
    ]
  }
];

export default {quizzesInfo};
