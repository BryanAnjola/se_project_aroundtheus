export default class UserInfo {
  constructor(nameSelector, titleSelector) {
    this._userName = nameSelector;
    this._userTitle = titleSelector;
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userTitle: this._userTitle.textContent,
    };
  }

  setUserInfo({ name, title }) {
    this._userName.textContent = name;
    this._userTitle.textContent = title; //does it want this exact function the user info on index.js
  }
}
