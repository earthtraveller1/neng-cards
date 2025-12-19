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
    * @param {string} name
    * @param {string} id 
    */
    constructor(name, id) {
        this.name = name
        this._id = id
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

    /** @type {string} */
    _stackId

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
    * @param {CardStack} stack
    */
    constructor(frontText, backText, id, stack) {
        this.frontText = frontText
        this.backText = backText
        this._id = id
        this._stackId = stack._id
    }
}

// This is the type of the class that you send to the server when
// creating a new card.
export class NewCard {
    /** @type {string} */
    _stackId

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
    * @param {CardStack} stack
    */
    constructor(frontText, backText, stack) {
        this.frontText = frontText
        this.backText = backText
        this._stackId = stack._id
    }
}
