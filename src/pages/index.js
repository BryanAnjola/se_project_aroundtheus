import Section from "../components/section.js";
import popupWithForm from "../components/popupWithForm.js";
import popupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import "../pages/index.css";
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

//general Elements

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

//profile elements

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseButton = document.querySelector("#profile-close-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileAddModal = document.querySelector("#profile-add-modal");
const profileEditForm = profileEditModal.querySelector("#profile-edit-form");

//add card elements

const addCloseButton = document.querySelector("#add-close-button");
const addTitleInput = document.querySelector("#add-title-input");
const addProfileUrl = document.querySelector("#add-url-input");
const addNewCardButton = document.querySelector(".profile__add-button");
const addEditForm = profileAddModal.querySelector("#add-edit-form");
const cardOpenModal = document.querySelector("#card-open-modal");

const addCardSubmitButton = profileAddModal.querySelector(
  ".form__popup-button"
);

//image modal elements\

const modalImageElement = document.querySelector(".modal__image");
const modalCaptionElement = document.querySelector(".modal__text");
const imageCloseButton = cardOpenModal.querySelector("#image-close-button");

const cardListEl = document.querySelector(".gallery__cards");

//Profile
//user info

const userInfo = new UserInfo(
  profileTitle,
  profileDescription,
);

const editProfileForm = new popupWithForm("#profile-edit-form", () => {
  userInfo.setUserInfo(nameInput, titleInput);
  editProfileForm.openModal();
});



const imagePopup = new popupWithImage("#card-open-modal");
function handleCardClick(data) {
  imagePopup.open(data);
  console.log(data);
}

// edit button event listener
profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});



//edit form listener
profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileTitle.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
});

// adding card listener
addNewCardButton.addEventListener("click", () => {
  openModal(profileAddModal);
});
//adding card  form listener
addEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newName = addTitleInput.value;
  const newLink = addProfileUrl.value;
  addTitleInput.value = "";
  addProfileUrl.value = "";
  addCardFormValidator.disableSubmitButton();
  const cardData = {
    name: newName,
    link: newLink,
  };

  const card = createCard(cardData);
  cardListEl.prepend(card);
  closeModal(profileAddModal);
});
//creating card listener
const createCard = (cardData) => {
  const card = new Card(cardData, "#card-template", handleCardClick); //added handlecardClick here
  return card.createCardElement();
};

initialCards.forEach((cardData) => {
  const card = createCard(cardData);
  cardListEl.append(card);
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
const addCardFormValidator = new FormValidator(settings, addEditForm);
addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
export { cardOpenModal, modalCaptionElement, modalImageElement };
