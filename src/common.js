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

