import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  openModal,
  closeModal,
  closeModalOnRemoteClick,
} from "../utils/utils.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountians",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseButton = document.querySelector("#profile-close-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const addCloseButton = document.querySelector("#add-close-button");
const addTitleInput = document.querySelector("#add-title-input");
const addProfileUrl = document.querySelector("#add-url-input");
const addNewCardButton = document.querySelector(".profile__add-button");
const profileAddModal = document.querySelector("#profile-add-modal");
const cardOpenModal = document.querySelector("#card-open-modal");
const modalImageElement = document.querySelector(".modal__image");
const modalCaptionElement = document.querySelector(".modal__text");
const addCardSubmitButton = profileAddModal.querySelector(
  ".form__popup-button"
);
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

const imageCloseButton = cardOpenModal.querySelector("#image-close-button");

const profileEditForm = profileEditModal.querySelector("#profile-edit-form");
const cardListEl = document.querySelector(".gallery__cards");

const addEditForm = profileAddModal.querySelector("#add-edit-form");

profileEditButton.addEventListener("click", () => {
  // confused about this one
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileTitle.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
});

addNewCardButton.addEventListener("click", () => {
  openModal(profileAddModal);
});

addEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newName = addTitleInput.value;
  const newLink = addProfileUrl.value;
  addTitleInput.value = "";
  addProfileUrl.value = "";
  editProfileFormValidator.disableSubmitButton();
  addCardFormValidator.disableSubmitButton();
  const cardData = {
    name: newName,
    link: newLink,
  };

  const cardListEl = createCard(cardData);
  cardListEl.prepend(cardElement);
  closeModal(profileAddModal);
});

const createCard = (cardData) => {
  const card = new Card(cardData, "#card-template"); // it receives cardData, right?
  return card.createCardElement();
};

initialCards.forEach((cardData) => {
  const card = createCard(cardData);
  cardListEl.append(card); /// was cardElement but i changed to cardData to fix a error
});

profileEditModal.addEventListener("mousedown", closeModalOnRemoteClick);
profileAddModal.addEventListener("mousedown", closeModalOnRemoteClick);
cardOpenModal.addEventListener("mousedown", closeModalOnRemoteClick);

const settings = {
  formSelector: ".modal__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__popup-button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "popup__input_type_error",
};
const editProfileFormValidator = new FormValidator(settings, profileEditForm);
const addCardFormValidator = new FormValidator(settings, addEditForm); // changed FormElement to addEditForm bc it had the add form id
addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
export { cardOpenModal, modalCaptionElement, modalImageElement };
