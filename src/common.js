import { ObjectId } from "mongodb"

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
