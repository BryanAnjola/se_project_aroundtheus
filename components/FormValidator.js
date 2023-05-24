export default class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._form = formElement;
    this._submitButton = this._form.querySelector(
      settings.submitButtonSelector
    );
    this._form.querySelectorAll(this._settings.inputSelector);
    this._inputList = [
      ...this._form.querySelectorAll(this._settings.inputSelector),
    ];
  }
  enableValidation() {
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);

        this._toggleButtonState();
      });
    });
    this.disableSubmitButton();
  }
  resetValidation() {
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
  }
  _showInputError(input, errorMessage) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.inputErrorClass);
    input.classList.add(this._settings.inputErrorClass);
  }
  _hideInputError(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
    input.classList.remove(this._settings.inputErrorClass);
    errorElement.classList.remove(this._settings.inputErrorClass);
  }
  _checkFormValidity = () => {
    return this._inputList.every((input) => input.validity.valid);
  };

  _toggleButtonState() {
    const allInputsValid = this._checkFormValidity();

    if (allInputsValid) {
      this.enableSubmitButton();
    } else {
      this.disableSubmitButton();
    }
  }
}
