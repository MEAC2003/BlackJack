
/**
 * Esta funcio me permite tomar una carta
 * @param {Array<String>} deck es un arreglo de string  Ejemplo: ['7H', '4H', 'JC', '5H']
 * @returns {String} retorna la carta del deck
 */

export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw 'No hay cartas en el deck';
  }
  const carta = deck.pop();
  return carta;
}
