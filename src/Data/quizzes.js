import { quizzesInfo } from './quizInfo.js'
export const categoriasInfo = []

export function buscarPerguntas(ano, idQuiz) {
  const anoEncontrado = quizzesInfo.find(item => item.ano == ano)
  
  if (!anoEncontrado) return []
  const quizEncontrado = anoEncontrado.quizzes.find(quiz => quiz.id === idQuiz)
  return quizEncontrado ? quizEncontrado.perguntas : []
}
export function buscarTituloQuiz(ano, idQuiz) {
const anoEncontrado = quizzesInfo.find(item => item.ano == ano)

  if (!anoEncontrado) return 'Quiz'
  const quizEncontrado = anoEncontrado.quizzes.find(quiz => quiz.id === idQuiz)
  return quizEncontrado ? quizEncontrado.titulo : 'Quiz'
}