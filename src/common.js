/**
 * @typedef {import('mongodb').ObjectId} ObjectId

/** @typedef {object} CardStack
 * @property {ObjectId} [_id]
 * @property {string} name
 * @property {Card[]} cards
 */

/** @typedef {object} Card
 * @property {ObjectId} [_id]
 * @property {string} frontText
 * @property {string} backText
 */

/**
 * @enum {string}
 */
export const Colors = {
    CYAN: "bg-cyan-400 hover:bg-cyan-300 active:bg-green-300 text-black",
    GREEN: "bg-green-400 hover:bg-green-300 active:bg-cyan-300 text-black",
    RED: "bg-red-700 hover:bg-red-600 active:bg-red-900 text-white"
}
