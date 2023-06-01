import { openModal, closeModal } from "../utils/utils.js";
import {
  cardOpenModal,
  modalCaptionElement,
  modalImageElement,
} from "../pages/index.js";
import popup from "./popup.js";
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
  }

  _toggleLike = () => {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button-active");
  };

  _handleDeleteButton = () => {
    this._element.remove();
    this._element = null;
  };

  _handlePreviewImage() {
    const modalImage = document.querySelector('.modal__image');
    const textCaption = document.querySelector('.modal__text');
    textCaption.textContent = this._name;
    modalImage.src = this._link;
   
    openModal(cardOpenModal);
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
