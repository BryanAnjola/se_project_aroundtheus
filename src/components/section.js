export default class Section {
  constructer({ items, renderer }, containerSelector) {
    this._renderer = renderer;
    this._items = items;
    this._container = document.querySelector(".${containerSelector}");
  }
  renderItems() {
    this._items.forEach((item) => {
      const newCard = this._renderer(item);
      this._container.append(newCard);
    });
  }
  addItem(cardListEl) {
    this._container.append(cardListEl);
  }
}
