import { openPopup, closePopup } from "../utils/utils.js";

export default class Card {
  constructor(cardData, templateSelector) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
  }
  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content
      .firstElementChild;
    return cardTemplate;
  }

_toggleLike = () => {
  this._likeButton.classList.toggle("card__like-button-active");
}
_handleDeleteButton = () => {
  this._deleteButton = document.querySelector(".card__delete");
}
_handleOpenModal = () => {
  this._cardOpenModal = document.querySelector("#card-open-modal");
}
  _setEventListeners(cardElement, cardData) {
    this._likeButton = cardElement.querySelector(".card__like-button");
    this._likeButton.addEventListener("click", (e) => {
    this._toggleLike();
    });
      this._handleDeleteButton();
    ;

   this._cardImageEl = cardElement.querySelector(".card__image");

   this._cardImageEl.addEventListener("click", (e) => {
      openPopup(_handleOpenModal());

      this._modalText = cardOpenModal.querySelector(".modal__text");

      modalText.innerText = cardData.name;

      this._cardImage = cardOpenModal.querySelector(".modal__image");

      cardImage.src = cardData.link;

      cardImage.alt = cardData.name;
    });
  }

  createCardElement(cardData) {
    const cardElement = this._getTemplate().cloneNode(true);
    const cardTitleEl = cardElement.querySelector(".card__title");
    cardTitleEl.textContent = cardData.name;
    const cardImageEl = cardElement.querySelector(".card__image");
    cardImageEl.src = cardData.link;
    cardImageEl.alt = cardData.name;
    this._setEventListeners(cardElement, cardData);
    this._element = cardElement;
    return cardElement;
  }
}
