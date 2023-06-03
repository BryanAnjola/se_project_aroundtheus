import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._modalInputs = this._popupElement.querySelectorAll(".form__input");
    this._handleFormSubmit = handleFormSubmit;
  }
  close() {
    this._popupForm.reset();
    super.close();
  }
  _getInputValues() {
    const inputValues = {};
    this._modalInputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    // set submit events
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}
