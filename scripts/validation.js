// enabling validation byid calling enableValidation()
// pass all the settings on call

function showInputError(formEl, inputEL, { inputErrorClass, errorClass}){
const errorMessageEL = formEl.querySelector(`#${inputEL.id}-error`)
inputEL.classList.add(inputErrorClass);
errorMessageEL.textcontent = inputEL.validationMessage;
errorMessageEL.classList.add(errorClass)
console.log(inputErrorClass);

}
function hideInputError(){

}

function checkInputValidity(formEl, inputEL, config) {
if (!inputEL.validity.valid) {
    showInputError(formEl, inputEL, config);
} else {
    hideInputError(formEl, inputEL, config);
}
}


function setEventListeners(formEl, config){
 const {inputSelector} = config
     const inputEL = [...formEl.querySelectorAll(inputSelector)];
    inputEL.forEach(inputEL => {
        inputEL.addEventListener('input', (e) => {
    checkInputValidity(formEl, inputEL, config);
        });
    } );
    
    }


function enableValidation(config) {
const formElm = [...document.querySelectorAll(config.formSelector)];
formElm.forEach((formEl) => {
formEl.addEventListener("submit", (e) => {
    e.preventDefault();

});

setEventListeners(formEl, config);
// look for all inputs inside of form

//loop through all the inputs to see if all are valid

//if input is not valid 

//get validation message

//add error class to input

//show display error message

// butttons disable button

//if all inputs are valid

//enable buttton

//reset error message


});
}


const config = {   
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible",
}
enableValidation(config);