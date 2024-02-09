import Popup from "./Popup.js";

export default class PopupConfirm extends Popup{
    constructor({ selector, callback }) {
        super(selector),
        this._callback = callback
        this._form = this._selector.querySelector('.popup__form')
    }

    setEventListeners() {
        super.setEventListeners()

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._callback(this._cardId, this._card)
        })
    }

    open(cardId, card) {
        super.open()
        this._cardId = cardId
        this._card = card
    }
}