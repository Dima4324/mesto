export default class Card {
    constructor(data, selector) {
        this._name = data.name,
            this._link = data.link,
            this._selector = selector
    }

    _getElement() {
        const card = document
            .querySelector(this._selector)
            .content
            .querySelector('.cards__card')
            .cloneNode(true)

        return card
    }

    _countLikes() {
        const like = this._element.querySelector('.cards__like')
        like.classList.toggle('cards__like-active');
        const countLikes = this._element.querySelector('.count-likes');
        let likesNum = +countLikes.textContent;
        countLikes.textContent = likesNum + 1;
        like.classList.contains('cards__like-active')
            ? countLikes.textContent = likesNum + 1
            : countLikes.textContent = likesNum - 1;
    }

    _setEventListenerLike() {
        this._element.querySelector('.cards__like').addEventListener('click', () => {
            this._countLikes()
        })
    }

    _setEventListenerDelete() {
        this._element.querySelector('.trash').addEventListener('click', () => {
            const cardPlace = this._element.closest('.cards__card')
            cardPlace.remove()
        })
    }

    _fullPhoto(cardsPhoto, cardsName) {
        const fullPhoto = document.querySelector('.full-photo')
        const popupPhoto = document.querySelector('.popup__photo')
        const imgName = document.querySelector('.popup__img-name')

        fullPhoto.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'

        popupPhoto.src = cardsPhoto.src
        popupPhoto.alt = cardsPhoto.alt
        imgName.textContent = cardsName.textContent

        fullPhoto.classList.add('popup__open')
        document.body.classList.add('scroll-lock')
    }

    _setEventListenerPhoto() {
        const cardsPhoto = this._element.querySelector('.cards__photo')
        const cardsName = this._element.querySelector('.cards__name')

        cardsPhoto.addEventListener('click', () => this._fullPhoto(cardsPhoto, cardsName))
    }

    generate() {
        this._element = this._getElement()

        this._element.querySelector('.cards__photo').src = this._link;
        this._element.querySelector('.cards__photo').alt = this._name;
        this._element.querySelector('.cards__name').textContent = this._name;

        this._setEventListenerLike()
        this._setEventListenerDelete()
        this._setEventListenerPhoto()

        return this._element
    }
}