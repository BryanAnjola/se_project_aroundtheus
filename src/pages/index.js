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
  const cardImage = createCardElement(cardData);
  cardSection.addItem(cardImage);
}

function handleCardClick(data) {
  const popupImage = new PopupWithImage("#card-open-modal");
  popupImage.open(data);
  popupImage._setEventListeners();
}

// render cards
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

  profileTitle.textContent = userData.userName;
  profileDescription.textContent = userData.userTitle;
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

export { cardOpenModal, modalCaptionElement, modalImageElement };
