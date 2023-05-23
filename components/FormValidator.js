export default class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._form = formElement;

    this._submitButton = this._form.querySelector(
      settings.submitButtonSelector
    );

  
      this._form.querySelectorAll(this._settings.inputSelector)
    
  }

  enableValidation() {
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    
      this._form.querySelectorAll(this._settings.inputSelector)
    
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);

        this._toggleButtonState(input);
      });
    });

    this.disableSubmitButton();
  }

  resetValidation() {
  
      this._form.querySelectorAll(this._settings.inputSelector)
    
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });

    this.disableSubmitButton();
  }

  disableSubmitButton() {
    this._submitButton.disabled = true;
  }

  enableSubmitButton() {
    this._submitButton.disabled = false;
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input, input.validationMessage);
    }

    return input.validity.valid;
  }

  _showInputError(input, errorMessage) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.inputErrorClass);
  }

  _hideInputError(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
    input.classList.remove(this._settings.inputErrorClass);
  }
  _checkFormValidity  = () => this._inputList.every(input => input.validity.valid);

  
  _toggleButtonState() {
    const allInputsValid = _checkFormValidity  = () => this._inputList.every(input => input.validity.valid);;
      this._form.querySelectorAll(this._settings.inputSelector);

    if (allInputsValid) {
      this.enableSubmitButton();
    } else {
      this.disableSubmitButton();
    }
  }
}