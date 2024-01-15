import Card from './components/Cards.js'
import FormValidator from './components/FormValidator.js'

const popups = document.querySelectorAll('.popup')
const profileEdit = document.querySelector('.profile-edit')
const editButton = document.querySelector('.user__edit')
const closeButton = document.querySelectorAll('.popup__img')
const saveForm = document.querySelectorAll('.popup__form')
const userName = document.querySelector('.user__name')
const userDescription = document.querySelector('.user__description')
const addCardButton = document.querySelector('.user__add')
const newPlace = document.querySelector('.add-place')
const submitPlace = document.querySelector('.submitPlace')
const profileForm = document.forms.profileEditForm
const profileName = profileForm.elements.profileName
const profileDescription = profileForm.elements.profileDescription
const placeForm = document.forms.placeForm
const placeName = placeForm.elements.placeName
const linkImg = placeForm.elements.linkImg

function GetprofileFormValue() {
    profileName.value = userName.textContent
    profileDescription.value = userDescription.textContent
}

GetprofileFormValue()

function openPopup(element) {
    element.classList.add('popup__open')
    document.body.classList.add('scroll-lock')
}

function closePopup() {
    popups.forEach(pop => pop.classList.remove('popup__open'))
    document.body.classList.remove('scroll-lock')
}

editButton.addEventListener('click', () => openPopup(profileEdit))

closeButton.forEach(btn => btn.addEventListener('click', closePopup))

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) closePopup()
})

function closeOnBackDropClick({ currentTarget, target }) {
    const dialog = currentTarget
    const isClickedOnBackDrop = target === dialog
    if (isClickedOnBackDrop) closePopup()
}

popups.forEach(pop => pop.addEventListener('click', closeOnBackDropClick))

function handleFormSubmit(evt) {
    evt.preventDefault()
    userName.textContent = profileName.value
    userDescription.textContent = profileDescription.value
    closePopup()
}

saveForm.forEach(save => save.addEventListener('submit', handleFormSubmit))

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: "Иваново",
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function renderCard(item) {
    const cards = document.querySelector('.cards');
    const card = new Card(item, '#cards')

    const cardElement = card.generate();

	cards.prepend(cardElement);
}

const cloneCards = function () {
    initialCards.forEach((item) => {
        renderCard(item)
    })
}

addCardButton.addEventListener('click', () => openPopup(newPlace))

function createCard() {
    const obj = {
        name: placeName.value,
        link: linkImg.value
    }
    initialCards.push(obj)
    renderCard(obj)
    placeForm.reset()
}

submitPlace.addEventListener('submit', createCard)

cloneCards()

function getValidate() {
    const formSelectors = {
        inputSelector: '.popup__input',
        submitButtonSelector: '.popup__btn',
        inactiveButtonClass: 'popup__btn-inactive',
        inputErrorClass: 'popup__input_type_error',
        errorClass: 'popup__input__error_active'
    }
    
    saveForm.forEach(form => {
        const formValid = new FormValidator(formSelectors, form)
        formValid.enableValidation()
    })
}

getValidate()