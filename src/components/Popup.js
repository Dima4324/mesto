export default class Popup {
    constructor(selector) {
        this._selector = document.querySelector(selector)
    }

    open() {
        this._selector.classList.add('popup__open')
        document.body.classList.add('scroll-lock')
        document.addEventListener('keydown', (evt) => this._handlEscClose(evt));
    }

    close() {
        this._selector.classList.remove('popup__open')
        document.body.classList.remove('scroll-lock')
    }

    _handlEscClose(evt) {
        if (evt.keyCode === 27) this.close()
    }

    setEventListeners() {
        this._selector.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup')) {
                this.close();
            }
            if (evt.target.classList.contains('popup__img')) {
                this.close();
            }
        });
    }
}