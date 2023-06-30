export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`).catch((err) => {
      console.error(err);
    });
  }
  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }
  getIntialCards() {
    return fetch(`${this._baseUrl}/users/me`, { headers: this._headers }).then(
      this._checkResponse
    );
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, { headers: this._headers }).then(
      this._checkResponse
    );
  }
  editProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._checkResponse);
  }
  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._checkResponse);
  }
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
  addLike(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getLikesCount(cardId) {
    return this._request(`${this._baseURL}/cards/${cardId}/likes`, {
      method: "GET",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json",
      },
    });
  }
  removeLike(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
  updateAvatar(avatarLink) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarLink,
      }),
    }).then(this._checkResponse);
  }
  loadData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]).then(
      ([userInfo, initialCards]) => {
        return { userInfo, initialCards };
      }
    );
  }
}
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: " 880cf664-8cb6-41d1-a215-3fca6b4bd1d2 ",
    "Content-Type": "application/json",
  },
});
