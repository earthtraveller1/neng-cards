export class CardStack {
    /**
     * @type {string}
     * @public
     */
    name

    /**
     * @type {string}
     * @public
     */
    _id

    /**
     * @type {Card[]}
     */
    cards

    /**
    * @param {string} name
    * @param {string} id 
    * @param {Card[]} cards
    */
    constructor(name, id, cards) {
        this.name = name
        this._id = id
        this.cards = cards
    }
}

// This is the one that you send to the server when you create a new cardstack
export class NewCardStack {
    /**
     * @type {string}
     * @public
     */
    name

    /**
    * @param {string} name
    */
    constructor(name) {
        this.name = name
    }
}

export class Card {
    /** @type {string} */
    _id

    /** 
     * @type {string} 
     * @public
     * */
    frontText

    /** 
     * @type {string} 
     * @public
     * */
    backText

    /**
    * @param {string} frontText
    * @param {string} backText
    * @param {string} id
    */
    constructor(frontText, backText, id) {
        this.frontText = frontText
        this.backText = backText
        this._id = id
    }
}

// This is the type of the class that you send to the server when
// creating a new card.
export class NewCard {
    /** 
     * @type {string} 
     * @public
     * */
    frontText

    /** 
     * @type {string} 
     * @public
     * */
    backText

    /**
    * @param {string} frontText
    * @param {string} backText
    */
    constructor(frontText, backText) {
        this.frontText = frontText
        this.backText = backText
    }
}
