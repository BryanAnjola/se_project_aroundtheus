import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/popupWithImage.js";
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

const settings = {
  formSelector: ".modal__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__popup-button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "popup__input_type_error",
};
//image modal elements\

const modalImageElement = document.querySelector(".modal__image");
const modalCaptionElement = document.querySelector(".modal__text");
const imageCloseButton = cardOpenModal.querySelector("#image-close-button");

const cardListEl = document.querySelector(".gallery__cards");




const userInfo = new UserInfo(profileTitle, profileDescription);
//popup card image

// function renderCard(cardData) {
//   const cardImage = createCardElement(cardData);
//   cardSection.addItem(cardImage);
// }

function handleCardClick(data) {
  const popupImage = new PopupWithImage("#card-open-modal");
  popupImage.open(data);
  popupImage._setEventListeners();
}

// render cards
//creating card listener

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const addNewCard = new Card(item, "#card-template", handleCardClick);
      const cardElement = addNewCard.createCardElement();
      cardSection.addItem(cardElement);
    },
  },
  ".gallery__cards"
);
cardSection.renderItems();

// form popup Edit profile

const profilePopupForm = new PopupWithForm(
  "#profile-edit-modal",
  (inputValues) => {
    userInfo.setUserInfo(inputValues);
    profilePopupForm.close();
  }
);
profilePopupForm.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();

  profileTitle.value = userData.userName;
  profileDescription.value = userData.userTitle;
  profilePopupForm.open();
  
});

// form popup Add card
const newCardPopupWithForm = new PopupWithForm(
  "#profile-add-modal",
  (inputValues) => {
    const newCardItem = new Card(
      {
        items: [inputValues],
        renderer: (item) => {
          const addNewCard = new Card(item, "#card-template", handleCardClick);
          const cardElement = new addNewCard.getCard();
          newCardItem.addItem(cardElement);
        },
      },
      cardListEl
    );
    // newCardItem.renderItems(); -> this give me a error removing it fixes the error but does not add a new card lets it submit though
    newCardPopupWithForm.close();
  }
);

addNewCardButton.addEventListener("click", () => {
  newCardPopupWithForm.open();
});
newCardPopupWithForm.setEventListeners();


const editProfileFormValidator = new FormValidator(settings, profileEditForm);
const addCardFormValidator = new FormValidator(settings, addEditForm);
addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
export { cardOpenModal, modalCaptionElement, modalImageElement };
