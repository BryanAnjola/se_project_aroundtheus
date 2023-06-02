

export default class Card {
  constructor(cardData, templateSelector, handleCardClick) {
    this._cardData = cardData;
    this._link = cardData.link;
    this._name = cardData.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }
  _setEventListeners() {
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(".card__delete");

    this._likeButton.addEventListener("click", () => this._toggleLike());
    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteButton()
    );

    this._cardImageEl.addEventListener("click", () =>
      this._handleCardClick(this._cardImageEl)
    );
  }

  _toggleLike = () => {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button-active");
  };

  _handleDeleteButton = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };


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


    return this._cardElement;
  }
}
