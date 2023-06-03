import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import "../pages/index.css";
import FormValidator from "../components/FormValidator.js";
import {
  openModal,
  closeModal,
  closeModalOnRemoteClick,
} from "../utils/utils.js";
import { data } from "autoprefixer";
import {
  profileEditButton,
  profileDescription,
  profileTitle,
  profileEditForm,
  addNewCardButton,
  addEditForm,
  cardOpenModal,
  settings,
  modalImageElement,
  modalCaptionElement,
  initialCards,
  profileNameInput,
  profileDescriptionInput,
  addTitleInput,
  addProfileUrl,
} from "../utils/constants.js";

//validation
const editProfileFormValidator = new FormValidator(settings, profileEditForm);
const addCardFormValidator = new FormValidator(settings, addEditForm);
addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
///

const userInfo = new UserInfo(profileTitle, profileDescription);
//popup card image

function renderCard(cardData) {
  const addNewCard = new Card(cardData, "#card-template", handleCardClick);
  const cardElement = addNewCard.createCardElement();
  cardSection.addItem(cardElement);
}

function handleCardClick(data) {
  const popupImage = new PopupWithImage("#card-open-modal");
  popupImage.open(data);
  popupImage.setEventListeners();
}

// render cards
const cardSection = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  ".gallery__cards"
);
cardSection.renderItems();

// form popup Edit profile
const profilePopupForm = new PopupWithForm(
  "#profile-edit-modal",
  ([profileNameInput, profileDescriptionInput]) => {
    userInfo.setUserInfo(profileNameInput, profileDescriptionInput);
    profilePopupForm.close();
  }
);
profilePopupForm.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  userInfo.setUserInfo(userData);
  profileTitle.value = userData.name;
  profileDescription.value = userData.title;
  profilePopupForm.open();
});

// form popup Add card
const newCardPopupWithForm = new PopupWithForm(
  "#profile-add-modal",
  (inputValues) => {
    const addNewCard = new Card(inputValues, "#card-template", handleCardClick);
    const cardElement = addNewCard.createCardElement();
    cardSection.addItem(cardElement);
    newCardPopupWithForm.close();
  }
);

addNewCardButton.addEventListener("click", () => {
  newCardPopupWithForm.open();
});
newCardPopupWithForm.setEventListeners();
