/** 
 * @typedef {import('./common').Card} Card
 * @typedef {import('./common').CardStack} CardStack
 */

/**
 * @returns {Promise<CardStack[]>}
*/
async function getStacks() {
    const response = await fetch("/api/stacks")
    // Maybe do some data validation later to ensure that this is the 
    // right type
    const json = /** @type { CardStack[] } */ (await response.json())
    return json
}

/**
 * @returns {Promise<CardStack>}
 * @param {string} id
*/
async function getStack(id) {
    const response = await fetch(`/api/stacks/${id}`)
    const json = /** @type { CardStack } */ (await response.json())
    return json
}

/**
 * @param {string} stackId
 * @param {Card} card
 */
async function createCard(stackId, card) {
    await fetch(`/api/stacks/${stackId}/cards`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(card)
    })
}

/**
* @param {string} stackName
*/
async function createStack(stackName) {
    await fetch("/api/stacks", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: stackName })
    })
}

/**
 * @param {string} id
 */
async function deleteStack(id) {
    await fetch(`/api/stacks/${id}`, { method: "delete" })
}

/** @param {string} stackId
 * @param {string} cardId
 */
async function deleteCard(stackId, cardId) {
    await fetch(`/api/stacks/${stackId}/cards/${cardId}`, { method: "delete" })
}
