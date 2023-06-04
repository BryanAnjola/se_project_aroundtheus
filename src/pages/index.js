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

///
const popupImage = new PopupWithImage("#card-open-modal");
popupImage.setEventListeners();
const userInfo = new UserInfo(profileTitle, profileDescription);
//popup card image

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", handleCardClick);
  const cardElement = card.createCardElement();
  cardSection.addItem(cardElement);
}

function handleCardClick(data) {
  popupImage.open(data);
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
  (inputValues) => {
    userInfo.setUserInfo(inputValues);
    profilePopupForm.close();
  }
);
profileEditButton.addEventListener("click", () => {
  editProfileFormValidator.resetValidation();
  profilePopupForm.open();
  const userData = userInfo.getUserInfo();

  // userInfo.setUserInfo(userData);
  profileNameInput.value = userData.name;
  profileDescriptionInput.value = userData.title;
});

// form popup Add card
const newCardPopupWithForm = new PopupWithForm(
  "#profile-add-modal",
  (inputValues) => {
    renderCard(inputValues);
    newCardPopupWithForm.close();
  }
);

addNewCardButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  newCardPopupWithForm.open();
});
newCardPopupWithForm.setEventListeners();
profilePopupForm.setEventListeners();
const editProfileFormValidator = new FormValidator(settings, profileEditForm);
const addCardFormValidator = new FormValidator(settings, addEditForm);
addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
