import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(selector, data) {
        super(selector),
        this._src = data.link,
        this._alt = data.name,
        this._imgName = data.name
    }

    open() {
        super.open()
        const photo = document.querySelector('.popup__photo')
        const imgName = document.querySelector('.popup__img-name')
        photo.src = this._src
        photo.alt = this._alt
        imgName.textContent = this._imgName
    }
}