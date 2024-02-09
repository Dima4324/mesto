import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ selector, callback }) {
        super(selector),
        this._callback = callback
        this._form = this._selector.querySelector('.popup__form')
        this._inputList = this._selector.querySelectorAll('.popup__input');
    }

    _getInputvalues() {
        this._inputValues = {}

        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value
        })

        return this._inputValues
    }

    setInputValues(data) {
        this._inputList.forEach(input => {
            input.value = data[input.name]
        })
    }

    close() {
        super.close()
        this._form.reset()
    }

    setEventListeners() {
        super.setEventListeners()

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._callback(this._getInputvalues())
        })
    }
}