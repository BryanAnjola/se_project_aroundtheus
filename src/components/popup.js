export default class popup {
    constructor({ popupSelector }){
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);// binded handleescclose
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
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
    _setEventListeners() {
        const modalCloseButton = this._popupElement.querySelector('.modal__close');
        modalCloseButton.addEventListener('click', () => this.close());
        this._popupElement.addEventListener('click', (event) => {
            if (event.target === this._popupElement) {
                this.close();
    } 
});
    }
}