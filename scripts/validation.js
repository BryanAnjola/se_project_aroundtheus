// enabling validation byid calling enableValidation()
// pass all the settings on call

function showInputError(formEl, inputEL, { inputErrorClass, errorClass}){
const errorMessageEL = formEl.querySelector(`#${inputEL.id}-error`)
inputEL.classList.add(inputErrorClass);
errorMessageEL.textContent = inputEL.validationMessage;
errorMessageEL.classList.add(errorClass)


}
function hideInputError(formEl, inputEL, { inputErrorClass, errorClass}){
    const errorMessageEL = formEl.querySelector(`#${inputEL.id}-error`)
    inputEL.classList.remove(inputErrorClass);
    errorMessageEL.textContent = '';
    errorMessageEL.classList.remove(errorClass)
    
    
    }

function checkInputValidity(formEl, inputEL, config) {
if (!inputEL.validity.valid) {
  return  showInputError(formEl, inputEL, config);
} 
    hideInputError(formEl, inputEL, config);

}

function hasInvalidInput(inputList) {
    return !inputList.every((inputEL) => inputEL.validity.valid)
}

function toggleButtonState(inputList, submitButton, inactiveButtonClass) {
   
if(hasInvalidInput(inputList)){
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
    return;
}
 

submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;

}

function setEventListeners(formEl, config){
 const {inputSelector, inactiveButtonClass} = config
     const inputList = [...formEl.querySelectorAll(inputSelector)];
     const  submitButton = formEl.querySelector('.modal__button')
    inputList.forEach(inputEL => {
        inputEL.addEventListener('input', (e) => {
    checkInputValidity(formEl, inputEL, config);
    toggleButtonState(inputList, submitButton, inactiveButtonClass)
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