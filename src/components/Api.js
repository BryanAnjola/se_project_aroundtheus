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
    return this._request(`${this._baseUrl}/cards`, { headers: this._headers })
      .then((result) => {
        return result;
      })
      .finally(() => {
        console.log("Done with getting initial cards");
      });
  }
  getUserInfo() {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).finally(() => {
      console.log("Done with getting user info");
    });
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
