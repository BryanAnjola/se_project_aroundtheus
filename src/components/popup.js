export default class popup {
    constructor({popupSelector}){
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);// binded handleescclose
    }
    open(){
        //open popup
        this._popupElement.classList.add("modal__opened");
        document.addEventListener("keydown", this._handleEscClose);
    };
    close(){
        //close popup
        this._popupElement.classList.remove("modal__opened");
        document.removeEventListener("keydown", this._handleEscClose);
    };
   _handleEscClose(e){
    //listens for esc button
    if (e.key == "Escape") {
        this.close();

    };
    };
    setEventListeners() {
        this._popupElement.addEventListener("click", () =>
         {
            this.close();
         });

         this._popupElement.addEventListener("mousedown", (evt) => {
            if (evt.target === evt.currentTarget) {
              this.close(evt.target);
            }


      });
    } 
}
