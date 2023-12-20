const popup = document.querySelector('.popup')
const editButton = document.querySelector('.user__edit')
const closeButton = document.querySelector('.popup__img')
const saveForm = document.querySelector('.popup__form')
const inputs = document.querySelectorAll('.popup__input')
const popupBg = document.querySelector('popup__bg')
const userName = document.querySelector('.user__name')
const userDescription = document.querySelector('.user__description')

function openPopup() {
    popup.classList.remove('close')
    document.body.classList.add('scroll-lock')
    inputs[0].value = userName.textContent
    inputs[1].value = userDescription.textContent
}

function closePopup() {
    popup.classList.add('close')
    document.body.classList.remove('scroll-lock')
}

editButton.addEventListener('click', openPopup)

closeButton.addEventListener('click', closePopup)


document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        closePopup()
    }
})


function closeOnBackDropClick({ currentTarget, target }) {
    const dialog = currentTarget
    const isClickedOnBackDrop = target === dialog
    if (isClickedOnBackDrop) {
        closePopup()
    }
}

popup.addEventListener('click', closeOnBackDropClick)


function handleFormSubmit(evt) {
    evt.preventDefault()
    userName.textContent = inputs[0].value
    userDescription.textContent = inputs[1].value
    closePopup()
}

saveForm.addEventListener('submit', handleFormSubmit)


