import { openModal, closeModal } from "../utils/utils.js";

export default class Card {
  constructor(cardData, templateSelector) {
    this._cardData = cardData;
    this._link = cardData.link;
    this._name = cardData.name;
    this._templateSelector = templateSelector;
  }
  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content
      .firstElementChild;
    return cardTemplate;
  }

  _toggleLike = () => {
    this._likeButton.classList.toggle("card__like-button-active");
  };
  _handleDeleteButton = () => {
    this._deleteButton = document.querySelector(".card__delete");
  };
  _handleOpenModal = () => {
    this._cardOpenModal = document.querySelector("#card-open-modal");
  };
  _handlePreviewimage(e) {
    e.preventDefault();
    openModal(imageModal);
    modalText.innerText = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    imageModal = document.querySelector("#card-open-modal");
  }
  _setEventListeners() {
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._likeButton.addEventListener("click", (e) => {
      this._toggleLike();
    });
    this._handleDeleteButton();
    this._cardImageEl = this._cardElement.querySelector(".card__image");

    this._cardImageEl.addEventListener("click", (e) => {
      openModal();

      this._modalText = cardOpenModal.querySelector(".modal__text");
      this._cardImage = cardOpenModal.querySelector(".modal__image");
    });
  }

  createCardElement() {
    this._cardElement = this._getTemplate().cloneNode(true);
    const cardImageEl = this._cardElement.querySelector(".card__image");
    const cardTitleEl = this._cardElement.querySelector(".card__title");
    cardTitleEl.textContent = this._name;
    cardImageEl.src = this._link;
    cardImageEl.alt = this._name;
    this._setEventListeners();
    this._element = this._cardElement;
    return this._cardElement;
  }
}
