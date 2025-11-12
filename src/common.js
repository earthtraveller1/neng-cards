export class CardStack {
    /**
     * @type {string}
     * @public
     */
    name

    /**
     * @type {any}
     * @public
     */
    _id

    /**
    * @param {string} name
    * @param {any} id 
    */
    constructor(name, id) {
        this.name = name
        this._id = id
    }
}

