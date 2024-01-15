export default class FormValidator {
    constructor(data, selector) {
        this._inputSelector = data.inputSelector,
        this._submitButtonSelector = data.submitButtonSelector,
        this._inactiveButtonClass = data.inactiveButtonClass,
        this._inputErrorClass = data.inputErrorClass,
        this._errorClass = data.errorClass,
        this._selector = selector
    }

    _showInputError = (formElement, inputElement, errorMessage) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
        inputElement.classList.add(this._inputErrorClass)
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass)
    }
    
    _hideInputError = (formElement, inputElement) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
        inputElement.classList.remove(this._inputErrorClass)
        errorElement.classList.remove(this._errorClass)
        errorElement.textContent = ''
    }
    
    _hasInvalidInput = (inputList) => {
        return inputList.some(inputElement => {
            return !inputElement.validity.valid
        })
    }
    
    _toggleButtonState = (inputList, buttonElement) => {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._inactiveButtonClass)
            buttonElement.disabled = true
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass)
            buttonElement.disabled = false
        }
    }
    
    _isValid = (formElement, inputElement) => {
        if ((!inputElement.validity.valid)) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage)
        } else {
            this._hideInputError(formElement, inputElement)
        }
    }
    
    _setEventListeners = (formElement) => {
        const inputList = Array.from(formElement.querySelectorAll(this._inputSelector))
        const buttonElement = formElement.querySelector(this._submitButtonSelector)
    
        this._toggleButtonState(inputList, buttonElement)
    
        inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._isValid(formElement, inputElement)
                this._toggleButtonState(inputList, buttonElement)
            })
        })
    }
    
    enableValidation = () => {
        this._setEventListeners(this._selector)
    }
}