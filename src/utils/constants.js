const editButton = document.querySelector('.user__edit')
const addCardButton = document.querySelector('.user__add')
const avatarPhotoSelector = document.querySelector('.user__edit-container')
const addPlaceSelector = '.add-place'
const profileEditSelector = '.profile-edit'
const userNameSelector = '.user__name'
const userDescSelector = '.user__description'
const cardListSection = '.cards'
const fullPhotoSelector = '.full-photo'

const formSelectors = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__btn-inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input__error_active'
}

export {editButton, addCardButton, avatarPhotoSelector, addPlaceSelector, profileEditSelector, userNameSelector, userDescSelector, cardListSection, fullPhotoSelector, formSelectors}