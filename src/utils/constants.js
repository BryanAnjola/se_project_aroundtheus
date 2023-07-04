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

export const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

//profile elements

export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const profileCloseButton = document.querySelector(
  "#profile-close-button"
);
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const profileNameInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
export const profileAddModal = document.querySelector("#profile-add-modal");
export const profileEditForm =
  profileEditModal.querySelector("#profile-edit-form");

//add card elements

export const addCloseButton = document.querySelector("#add-close-button");
export const addTitleInput = document.querySelector("#add-title-input");
export const addProfileUrl = document.querySelector("#add-url-input");
export const addNewCardButton = document.querySelector(".profile__add-button");
export const addEditForm = profileAddModal.querySelector("#add-edit-form");
export const cardOpenModal = document.querySelector("#card-open-modal");

export const addCardSubmitButton = profileAddModal.querySelector(
  ".form__popup-button"
);

export const settings = {
  formSelector: ".modal__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__popup-button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "popup__input_type_error",
};
//image modal elements\

export const modalImageElement = document.querySelector(".modal__image");
export const modalCaptionElement = document.querySelector(".modal__text");
export const imageCloseButton = cardOpenModal.querySelector(
  "#image-close-button"
);
export const cardListEl = document.querySelector(".gallery__cards");

export { initialCards };
