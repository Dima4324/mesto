import './index.css'
import Card from '../components/Cards.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import Popup from '../components/Popup.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'
import {
    editButton, addCardButton, avatarPhotoSelector, addPlaceSelector, profileEditSelector,
    userNameSelector, userDescSelector, cardListSection, fullPhotoSelector, formSelectors
} from "../utils/constants.js"
import PopupConfirm from '../components/PopupConfirm.js'

const userInfo = new UserInfo(userNameSelector, userDescSelector, '.user__photo')
let userId;

const getValidate = (popupSelector) => {
    const saveForm = document.querySelector(popupSelector)
    const formValid = new FormValidator(formSelectors, saveForm)
    formValid.enableValidation()
}

const api = new Api({
    baseUrl: 'https://nomoreparties.co/v1/cohort-64',
    headers: {
        authorization: '3e25cf54-975f-4847-af07-471e48c9313d',
        'Content-Type': 'application/json'
    }
})

const popupAvatar = new PopupWithForm({
    selector: '.edit-avatar',
    callback: (avatar) => {
        const btn = document.querySelector('.edit-avatar').querySelector('.popup__submit')
        btn.disabled = true
        btn.classList.add('popup__btn-inactive')
        btn.textContent = 'Изменяем фотографию...'
        api.updateAvatar(avatar.src)
            .then(() => {
                userInfo.changePhoto(avatar)
            })
            .finally(() => {
                btn.disabled = false;
                btn.classList.remove('popup__btn-inactive');
                btn.textContent = 'Сохранить'
                popupAvatar.close()
            })
    }
})

popupAvatar.setEventListeners()

avatarPhotoSelector.addEventListener('click', () => {
    const popupEditAvatar = document.querySelector('.edit-avatar')
    popupEditAvatar.style.zIndex = '3'
    getValidate('.edit-avatar')
    popupAvatar.open()
})

const popupEdit = new PopupWithForm({
    selector: profileEditSelector,
    callback: (userData) => {
        const btn = document.querySelector(profileEditSelector).querySelector('.popup__submit')
        btn.disabled = true;
        btn.classList.add('popup__btn-inactive');
        btn.textContent = 'Редактируем данные...'
        api.editProfile(userData)
            .then(res => {
                userInfo.setUserInfo(userData)
            })
            .finally(() => {
                btn.disabled = false;
                btn.classList.remove('popup__btn-inactive');
                btn.textContent = 'Сохранить'
                popupEdit.close()
            })
    }
})

popupEdit.setEventListeners()

editButton.addEventListener('click', () => {
    const userData = userInfo.getUserInfo();
    popupEdit.setInputValues(userData)
    getValidate(profileEditSelector)
    popupEdit.open()
})

const createPopupImg = (data) => {
    const popupWithImage = new PopupWithImage(fullPhotoSelector, data)
    popupWithImage.setEventListeners()
    popupWithImage.open()
}

const deletePopup = new PopupConfirm({
    selector: '.delete-card',
    callback: (id, card) => {
        api.removeCard(id)
            .then(() => {
                card.deleteCard()
                deletePopup.close()
            })
            .catch(error => console.log(error))
    }
})
deletePopup.setEventListeners()

const createCard = (data, id) => {
    const card = new Card(() => createPopupImg(data), (evt) => {
        deletePopup.open(data._id, card)
    },
        data, id, api, '#cards')

    return card.generate(data);
}

const cardsList = new Section({
    renderer: (item) => {
        cardsList.addItem(createCard(item, userId));
    }
},
    cardListSection
)

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([user, card]) => {
        userInfo.setUserInfo(user)
        const avatar = document.querySelector('.user__photo')
        avatar.src = user.avatar
        userId = user._id
        cardsList.renderItems(card.reverse())
    })

const popupPlaceForm = new PopupWithForm({
    selector: addPlaceSelector,
    callback: (formData) => {
        const obj = {
            name: formData.name,
            link: formData.link
        }
        const btn = document.querySelector(addPlaceSelector).querySelector('.popup__submit')
        btn.disabled = true;
        btn.classList.add('popup__btn-inactive');
        btn.textContent = 'Загружаем карточку...'
        api.addCard(obj)
            .then(res => {
                cardsList.addItem(createCard(res, userId))
            })
            .finally(() => {
                btn.disabled = false;
                btn.classList.remove('popup__btn-inactive');
                btn.textContent = 'Создать'
                popupPlaceForm.close()
            })
    }
})

popupPlaceForm.setEventListeners()

const popupNewPlace = new Popup(addPlaceSelector)

addCardButton.addEventListener('click', () => {
    getValidate(addPlaceSelector)
    popupNewPlace.open()
})