import { quizzesInfo } from './quizInfo.js'
import { quizzesAgro } from './quizAgro.js'
import { quizzesQuimi } from './quizQuimi.js'
export const categoriasInfo = []
export const categoriasAgro = []
export const categoriasQuimi = []

const todosOsCursos = {
  quimica: quizzesQuimi,
  agropecuaria: quizzesAgro,
  informatica: quizzesInfo
};

export function buscarPerguntas(curso, ano, idQuiz) {
  const quizzesDoCurso = todosOsCursos[curso];
  if (!quizzesDoCurso) return [];

  const anoEncontrado = quizzesDoCurso.find(item => item.ano == ano);
  if (!anoEncontrado) return [];

  const quizEncontrado = anoEncontrado.quizzes.find(quiz => quiz.id === idQuiz);
  return quizEncontrado ? quizEncontrado.perguntas : [];
}

export function buscarTituloQuiz(curso, ano, idQuiz) {
  const quizzesDoCurso = todosOsCursos[curso];
  if (!quizzesDoCurso) return 'Quiz';

  const anoEncontrado = quizzesDoCurso.find(item => item.ano == ano);
  if (!anoEncontrado) return 'Quiz';

  const quizEncontrado = anoEncontrado.quizzes.find(quiz => quiz.id === idQuiz);
  return quizEncontrado ? quizEncontrado.titulo : 'Quiz';
}