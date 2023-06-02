export default class Section {
  constructor({ items, renderer} , containerSelector) {
    this._renderer = renderer;
    this._items = items;
    this._container = document.querySelector(containerSelector);
  }
  renderItems() {
   this._items.forEach((item) => {
      const renderedItem = this._renderer(item);
      this._container.append(renderedItem);
    });
  }
  addItem(cardListEl) {
    this._container.append(cardListEl);
  }
}
