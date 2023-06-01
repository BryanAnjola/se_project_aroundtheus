export default class popup {
    constructor({popupSelector}){
        this._popupElement = document.querySelector(popupSelector);
    }
    open(popup){
        //open popup
        popup.classList.add("popup_opened");
        document.addEventListener("keydown", handleEscapePress);
    };
    close(popup){
        //close popup
        popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", handleEscapePress);
    };
   _handleEscClose(e){
    //listens for esc button
    if (e.key == "Escape") {
        const popup = document.querySelector(".popup_opened");
        close(popup);

    };
    };
    setEventListeners() {
        this._popupElement.addEventListener("click", () => this.close());
      }
    };