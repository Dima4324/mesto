export default class Card {
    constructor(handleCardClick, callback, data, id, api, selector) {
        this._handleCardClick = handleCardClick,
            this._name = data.name,
            this._link = data.link,
            this._likes = data.likes,
            this._cardId = data._id,
            this._id = id,
            this._api = api,
            this._callback = callback,
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

    _numLikes() {
        const countLikes = this._element.querySelector('.count-likes');
        countLikes.textContent = this._likes.length
    }

    deleteCard() {
        const cardPlace = this._element.closest('.cards__card')
        cardPlace.remove()
    }

    _setEventListenerLike() {
        this._element.querySelector('.cards__like').addEventListener('click', () => {
            const like = this._element.querySelector('.cards__like')
            const countLikes = this._element.querySelector('.count-likes');

            if (like.classList.contains('cards__like-active')) {
                this._api.removeLike(this._cardId)
                    .then((res) => {
                        like.classList.remove('cards__like-active')
                        countLikes.textContent = res.likes.length
                    })
                    .catch(error => console.log(error))
            } else {
                this._api.addLike(this._cardId)
                    .then(res => {
                        like.classList.add('cards__like-active')
                        countLikes.textContent = res.likes.length
                    })
                    .catch(error => console.log(error))
            }
        })
    }

    _setEventListenerDelete() {
        this._element.querySelector('.trash').addEventListener('click', () => {
            this._callback()
        })
    }

    _setEventListenerClickImg() {
        this._element.querySelector('.cards__photo').addEventListener('click', this._handleCardClick)
    }

    generate(item) {
        this._element = this._getElement()

        this._element.querySelector('.cards__photo').src = this._link;
        this._element.querySelector('.cards__photo').alt = this._name;
        this._element.querySelector('.cards__name').textContent = this._name;

        const likesArray = this._likes.map(item => item._id)

        if (likesArray.includes(this._id)) {
            this._element.querySelector('.cards__like').classList.add('cards__like-active')
        } else {
            this._element.querySelector('.cards__like').classList.remove('cards__like-active')
        }

        this._setEventListenerDelete()
        this._numLikes()
        this._setEventListenerLike()
        this._setEventListenerClickImg()

        if (item.owner._id != this._id) {
            this._element.querySelector('.trash').remove()
        }

        return this._element
    }
}