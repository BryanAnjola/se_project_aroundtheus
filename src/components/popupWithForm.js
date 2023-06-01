import popup from "./popup.js";
export default class PopupWithForm extends popup{
    constructor(popupSelector, handleFormSubmit){
        super({popupSelector});
        this._popupForm = this._popupElement.querySelector(".modal__form");
        this._modalInputs = this._popupElement.querySelector('#profile-description-input');
        this._handleFormSubmit = handleFormSubmit

    }
    _getInputValues() {
        const inputValues = {};
        this._modalInputs.forEach((input) => {
          inputValues[input.name] = input.value;
        });
        return inputValues;
      }
    
      _setEventListeners() {
        super._setEventListeners();
        // set submit events
        this._popupForm.addEventListener("submit", (evt) => {
          evt.preventDefault();
          this._handleFormSubmit(this._getInputValues());
          this.closeModal();
        });
      }
    
close(){
this._popupForm.reset();
super.close();
}
}