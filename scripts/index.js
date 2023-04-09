const initialCards = [
	{
		name: 'Yosemite Valley' ,
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg" ,
	},
	{
			name: 'Lake Louise' ,
			link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg" ,
	},
	{
			name: "Bald Mountains",
			link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg" ,
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


/* elements */
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const ModalCloseButton = document.querySelector("#close-modal-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput =document.querySelector('#profile-title-input');
const profileDescriptionInput = document.querySelector('#profile-description-input');
const ProfileEditForm = profileEditModal.querySelector('.modal__form');


/* functions */
function closePopup() {
	profileEditModal.classList.remove("modal_opened");
}

/* Events Handler */
function handleProfileEditSubmit (e) {
	e.preventDefault();
	profileTitle.textContent = profileTitleInput.value;
	profileDescription.textContent = profileDescriptionInput.value;
	closePopup();
}


/* Events listeners */

profileEditButton.addEventListener("click" , () => {
	profileTitleInput.value = profileTitle.textContent;
	profileDescriptionInput.value = profileDescription.textContent;

	profileEditModal.classList.add("modal_opened");
	
});
ModalCloseButton.addEventListener("click" , closePopup);


ProfileEditForm.addEventListener('submit', handleProfileEditSubmit);

