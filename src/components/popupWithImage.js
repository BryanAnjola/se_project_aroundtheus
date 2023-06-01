import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupElement = document.querySelector(popupSelector);
    this._modalCaption = this._popupElement.querySelector(
      ".modal__text"
    );
    this._modalImage = this._popupElement.querySelector(".modal__image");
  }

  open() {
    this._modalCaption.textContent = this._name;
    this._modalImage.src = this._link;
    this._modalImage.alt = this._name;
    super.open();
  }

  close() {
    this._modalCaption.textContent = "";
    this._modalImage.src = "";
    this._modalImage.alt = "";
    super.close();
  }
}