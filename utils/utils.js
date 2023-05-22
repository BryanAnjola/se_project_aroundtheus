export function openModal(modal) {
    modal.classList.add("modal_opened");
    document.addEventListener("keydown", handleEscapePress);
  }
  
  export function closeModal(modal) {
    modal.classList.remove("modal_opened");
    document.removeEventListener("keydown", handleEscapePress);
  }
  
  function handleEscapePress(e) {
    if (e.key == "Escape") {
      const popup = document.querySelector(".modal_opened");
      closePopup(popup);
    }
  }
  
 
  export function closeModalOnRemoteClick(evt) {
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains("modal__close")
    ) {
      closeModal(evt.currentTarget);
    }
  }