import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
  }

  open(data) {
    const popupImage = this._popupElement.querySelector(".modal__image");
    const popupImageDescription =
      this._popupElement.querySelector(".modal__text");

    popupImage.src = data.src;
    popupImage.alt = data.alt;
    popupImageDescription.textContent = data.alt;
    super.open();
  }
}
