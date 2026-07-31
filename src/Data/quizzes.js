//junta todos os quizzes em um só lugar por categoria
//facilita buscar "o quiz tal da categoria tal" a partir de uma rota
import { quizInfo1, quizInfo2, quizInfo3 } from './quizInfo.js'
import { quizQuimi1, quizQuimi2, quizQuimi3 } from './quizQuimi.js'
import { quizAgro1, quizAgro2, quizAgro3 } from './quizAgro.js'

// Cada categoria vira uma lista, ou seja posição 0 = quiz 1, posição 1 = quiz 2, etc.
export const quizzes = {
  info: [quizInfo1, quizInfo2, quizInfo3],
  quimi: [quizQuimi1, quizQuimi2, quizQuimi3],
  agro: [quizAgro1, quizAgro2, quizAgro3],
}

// Nomes de exibição de cada categoria (ajuste os textos como preferir)
export const categoriasInfo = {
  info: { titulo: 'Informática' },
  quimi: { titulo: 'Química' },
  agro: { titulo: 'Agronomia' },
}

/**
 * Busca o array de perguntas de um quiz específico.
 * @param {string} categoria - 'info' | 'quimi' | 'agro'
 * @param {number} numero - 1, 2 ou 3
 * @returns {Array} array de perguntas
 */
export function buscarPerguntas(categoria, numero) {
  const lista = quizzes[categoria]
  if (!lista) return []

  const indice = Number(numero) - 1
  return lista[indice] ?? []
}