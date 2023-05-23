import {
  openModal,
  closeModal,
  closeModalOnRemoteClick,
} from "../utils/utils.js";
import {
  cardOpenModal,
  modalCaptionElement,
  modalImageElement,
} from "../pages/index.js";

export default class Card {
  constructor(cardData, templateSelector) {
    this._cardData = cardData;
    this._link = cardData.link;
    this._name = cardData.name;
    this._templateSelector = templateSelector;
  }
  _setEventListeners() {
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(".card__delete");

    this._likeButton.addEventListener("click", () => this._toggleLike());
    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteButton()
    );

    this._cardImageEl.addEventListener("click", (e) =>
      this._handlePreviewImage(e)
    );

    this._cardImageEl.addEventListener("click", (e) =>this._openModalImage()
    );

    this._closeModalImage();
  }

  _openModalImage() {
    this._cardElement.classList.add(".modal_opened");
    document.addEventListener("keydown", closeModalOnRemoteClick);
  }
  _closeModalImage() {
    this._cardElement.classList.remove(".modal_opened");
    document.addEventListener("keydown", closeModalOnRemoteClick);
  }
  _toggleLike = () => {
      this._cardElement.querySelector(".card__like_button");
      this._cardElement.classList.toggle("card__like-button-active");
    
      console.log("card__like-button-active");
  };

  _handleDeleteButton = () => {
   this._element.remove(".card");
   this._element = null;

  };

  _handlePreviewImage(e) {
    e.preventDefault();
    openModal(cardOpenModal);
    modalCaptionElement.textContent = this._name;
    modalImageElement.src = this._link;
    modalImageElement.alt = this._name;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  createCardElement() {
    this._cardElement = this._getTemplate().cloneNode(true);
    this._cardImageEl = this._cardElement.querySelector(".card__image");

    this._cardTitleEl = this._cardElement.querySelector(".card__title");

    this._cardTitleEl.textContent = this._name;

    this._cardImageEl.src = this._link;

    this._cardImageEl.alt = this._name;

    this._setEventListeners();

    this._element = this._cardElement;

    return this._cardElement;
  }
}
