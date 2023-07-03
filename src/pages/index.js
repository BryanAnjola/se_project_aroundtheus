<<<<<<< HEAD
// Imports
import Card from "../components/Card.js";
import "./index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/section.js";
=======
>>>>>>> 52b6e823411ac1e6bb54a606afec3ecf02d57cc2
import {
  userNameSelector,
  userDescriptionSelector,
  imageModalSelector,
  profileModalSelector,
  cardModalSelector,
  cardListSelector,
  modalNameInput,
  modalDescriptionInput,
  cardListElement,
  modalProfileForm,
  modalCardForm,
  modalChangeProfileForm,
  validationSettings,
  profileEditButton,
<<<<<<< HEAD
  cardAddButton,
  changeProfileModalSubmitButton,
  cardDeleteModalSelector,
  modalChangeProfile,
  modalChangeProfileSelector,
  editButtonAvatart,
  avatarSelector,
} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import FormValidator from "../components/FormValidator.js";
import Api from "../utils/API.js";
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "880cf664-8cb6-41d1-a215-3fca6b4bd1d2",
    "Content-Type": "application/json",
  },
});

const formValidators = {};

// enable validation
const enableValidation = (validationSettings) => {
  const formList = Array.from(
    document.querySelectorAll(validationSettings.formSelector)
  );
  formList.forEach((formElement) => {
    const validator = new FormValidator(validationSettings, formElement);

    const formName = formElement.getAttribute("name");

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationSettings);

const userInfo = new UserInfo({
  userNameSelector,
  userDescriptionSelector,
  avatarSelector,
});

let sectionInstance;
let userId;
api
  .getAppInfo()
  .then(([userData, cardData]) => {
    // set all the data
    userId = userData._id;
    userInfo.setUserInfo({
      title: userData.name,
      description: userData.about,
    });
    userInfo.setAvatartInfo(userData.avatar);
    sectionInstance = new Section(
      {
        data: cardData,
        renderer: renderCard,
      },
      cardListSelector
    );
    sectionInstance.renderItems();
  })
  .catch(console.error);

const modalWithImage = new PopupWithImage({
  popupSelector: imageModalSelector,
});

const changeProfilePopup = new PopupWithForm({
  popupSelector: modalChangeProfileSelector,
  handleFormSubmit: (data) => {
    changeProfilePopup.renderLoading(true);
    api
      .updateUserProfile({ avatar: data.url })
      .then((data) => {
        userInfo.setAvatartInfo(data.avatar);
        changeProfilePopup.close();
      })
      .catch(console.error)
      .finally(() => {
        changeProfilePopup.renderLoading(false);
      });
  },
  loadingText: "Saving...",
});

const modalWithFormUser = new PopupWithForm({
  popupSelector: profileModalSelector,
  handleFormSubmit: (data) => {
    modalWithFormUser.renderLoading(true);
    api
      .userEditProfile(data)
      .then((data) => {
        userInfo.setUserInfo({
          title: data.name,
          description: data.about,
        });
        userInfo.setAvatartInfo(data.avatar);
        modalWithFormUser.close();
      })
      .catch(console.error)
      .finally(() => {
        modalWithFormUser.renderLoading(false);
      });
  },
  loadingText: "Saving...",
});

const confirmModal = new PopupWithForm({
  popupSelector: cardDeleteModalSelector,
  loadingText: "Deleting...",
});

const modalWithFormImage = new PopupWithForm({
  popupSelector: cardModalSelector,
  handleFormSubmit: (data) => {
    modalWithFormImage.renderLoading(true);
    api
      .addCard(data)
      .then((data) => {
        renderCard(data);
        modalWithFormImage.close();
      })
      .catch(console.error)
      .finally(() => {
        modalWithFormImage.renderLoading(false);
      });
  },
  loadingText: "Saving...",
});

function renderCard(cardData) {
  const cardImage = createCard(cardData);
  sectionInstance.prependItem(cardImage);
}

// setting event listeners
modalWithFormUser.setEventListeners();
modalWithFormImage.setEventListeners();
modalWithImage.setEventListeners();
confirmModal.setEventListeners();
changeProfilePopup.setEventListeners();

function createCard(cardData) {
  const card = new Card(
    {
      cardData,
      myId: userId,
      handleImageClick: (data) => {
        modalWithImage.open(data);
      },
      handleDeleteClick: () => {
        confirmModal.open();
        confirmModal.setSubmitAction(() => {
          confirmModal.renderLoading(true);
          const id = card.getId();
          api
            .removeCard(id)
            .then(() => {
              card.handleDeleteIcon();
              confirmModal.close();
            })
            .catch(console.error)
            .finally(() => {
              confirmModal.renderLoading(false);
            });
        });
      },
      handleLikeClick: () => {
        const id = card.getId();
        if (card.isLiked()) {
          api
            .unLikeCard(id)
            .then((data) => {
              card.setLikes(data.likes);
            })
            .catch(console.error);
        } else {
          api
            .likeCard(id)
            .then((data) => {
              card.setLikes(data.likes);
            })
            .catch(console.error);
        }
      },
    },
    "#card-template"
  );
  return card.getView();
}

profileEditButton.addEventListener("click", () => {
  modalWithFormUser.open();
  const userData = userInfo.getUserInfo();
  modalNameInput.value = userData.userName;
  modalDescriptionInput.value = userData.userDescription;
  formValidators["editProfileModalForm"].resetValidation();
});
cardAddButton.addEventListener("click", () => {
  formValidators["cardModalForm"].resetValidation();
  modalWithFormImage.open();
});
editButtonAvatart.addEventListener("click", () => {
  formValidators["changeAvatarModalForm"].resetValidation();
  changeProfilePopup.open();
});
=======
  profileModalContainer,
  profileFormElement,
  titleInput,
  jobInput,
  cardAddButton,
  userProfileAvatar,
  profileAvatarEditButton,
  settings,
  submitButtonEditProfileInfo,
  submitButtonAddNewCard,
  submitButtonChangeAvatar,
  submitButtonDeleteCard,
} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupCardDeleteVerify from "../components/PopupCardDeleteVerify.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import "./index.css";

/* -------------------------------------------------------------------------- */
/*                                API Constant                                */
/* -------------------------------------------------------------------------- */
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: " 880cf664-8cb6-41d1-a215-3fca6b4bd1d2 ",
    "Content-Type": "application/json",
  },
});

let userId;

/* -------------------------------------------------------------------------- */
/*                            Render Card Function                            */
/* -------------------------------------------------------------------------- */

const renderCard = (item) => {
  const addNewCard = new Card(
    item,
    "#card-template",
    handleCardClick,
    userId,
    handleCardLike,
    cardTrashButtonVerify,
    handleDeleteCard
  );
  const cardElement = addNewCard.getCard();
  cardSection.addItem(cardElement);
};

/* -------------------------------------------------------------------------- */
/*                              Popup Card Image                              */
/* -------------------------------------------------------------------------- */
const imagePopup = new PopupWithImage(".image");
imagePopup.setEventListeners();

function handleCardClick(data) {
  imagePopup.open(data);
}

/* -------------------------------------------------------------------------- */
/*              WORK SECTION BEGINS HERE FOR REVIEWER SUBMISSION              */
/* -------------------------------------------------------------------------- */
////////////////////////////////////////////////////////////////////////////////

/* -------------------------------------------------------------------------- */
/*                               Class Instances                              */
/* -------------------------------------------------------------------------- */

const classUserInfo = new UserInfo({
  userNameSelector: ".profile__title",
  userJobSelector: ".profile__description",
  userAvatarSelector: ".profile__avatar",
});

const cardSection = new Section({ renderer: renderCard }, ".cards");

/* -------------------------------------------------------------------------- */
/*                           New Form Validators                              */
/* -------------------------------------------------------------------------- */

const formValidators = {};

function validationEabling(settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((element) => {
    const validator = new FormValidator(settings, element);
    const formName = element.getAttribute("id");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
}
validationEabling(settings);

/* -------------------------------------------------------------------------- */
/*    Initial page load: Setting User Information and Render Initial Cards    */
/* -------------------------------------------------------------------------- */

Promise.all([api.getUserInformation(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    userId = userData._id;
    classUserInfo.setUserInfo(userData);
    cardSection.renderItems(cardData);
  })
  .catch((err) => {
    console.error(err);
  });

/* -------------------------------------------------------------------------- */
/*                        Form: Changing Avatar Picture                       */
/* -------------------------------------------------------------------------- */

function handleAvatarImageServerSubmit(data) {
  avatarChangeFormPoup.renderLoading(data);
  api
    .updateProfilePicture(data)
    .then((response) => {
      classUserInfo.setUserInfo(response);
    })
    .then(() => {
      avatarChangeFormPoup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      avatarChangeFormPoup.renderLoading(false);
    });
}

const avatarChangeFormPoup = new PopupWithForm(
  ".avatar__modal",
  handleAvatarImageServerSubmit
);

profileAvatarEditButton.addEventListener("click", () => {
  formValidators["avatar-form"].toggleButtonState();
  avatarChangeFormPoup.open();
});
avatarChangeFormPoup.setEventListeners();

/* -------------------------------------------------------------------------- */
/*                           Form: Adding New Cards                           */
/* -------------------------------------------------------------------------- */

function handleNewCardServerRenderSubmit(data) {
  newCardPopupForm.renderLoading(data);
  api
    .addNewCard(data)
    .then((cardData) => {
      cardSection.renderItems([cardData]);
    })
    .then(() => {
      newCardPopupForm.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      newCardPopupForm.renderLoading(false);
    });
}

const newCardPopupForm = new PopupWithForm(
  ".card-modal",
  handleNewCardServerRenderSubmit
);

cardAddButton.addEventListener("click", () => {
  formValidators["new-card-form"].toggleButtonState();
  newCardPopupForm.open();
});
newCardPopupForm.setEventListeners();

/* -------------------------------------------------------------------------- */
/*                   Form: Editing Profile User Information                   */
/* -------------------------------------------------------------------------- */

function handleProfileFormSubmit(data) {
  profilePopupForm.renderLoading(data);
  api
    .editProfileInformation(data)
    .then((newUserData) => {
      classUserInfo.setUserInfo(newUserData);
    })
    .then(() => {
      profilePopupForm.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      profilePopupForm.renderLoading(false);
    });
}

const profilePopupForm = new PopupWithForm(
  ".profile-modal",
  handleProfileFormSubmit
);
profilePopupForm.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const userData = classUserInfo.getUserInfo();

  titleInput.value = userData.userName;
  jobInput.value = userData.userJobDescription;
  formValidators["profile-input-form"].toggleButtonState();
  profilePopupForm.open();
});

/* -------------------------------------------------------------------------- */
/*                          Card Like/Unlike Function                         */
/* -------------------------------------------------------------------------- */

function handleCardLike(card) {
  if (card.cardIsLiked()) {
    api
      .likesCountRemove(card._cardId)
      .then((res) => {
        card.updateLike(res);
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    api
      .likesCountAdd(card._cardId)
      .then((res) => {
        card.updateLike(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

/* -------------------------------------------------------------------------- */
/*                          Verify Delete Card Modal                          */
/* -------------------------------------------------------------------------- */

const cardVerifyDelete = new PopupCardDeleteVerify(
  ".card-delete-verify",
  handleDeleteCard
);
cardVerifyDelete.setEventListeners();

function handleDeleteCard(cardId, element) {
  cardVerifyDelete.setSubmitAction(() => {
    cardVerifyDelete.renderLoading(cardId);

    api
      .deleteCardRequest(cardId)
      .then(() => {
        element.remove();
      })
      .then(() => {
        cardVerifyDelete.close();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        cardVerifyDelete.renderLoading(false);
      });
  });
}

function cardTrashButtonVerify() {
  cardVerifyDelete.open();
}
>>>>>>> 52b6e823411ac1e6bb54a606afec3ecf02d57cc2
