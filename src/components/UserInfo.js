export default class UserInfo {
    constructor( userName, userDesc, userAvatar ) {
        this._userName = document.querySelector(userName)
        this._userDesc = document.querySelector(userDesc)
        this._userAvatar = document.querySelector(userAvatar)
    }

    getUserInfo() {
        this._userData = {
            name: this._userName.textContent,
            about: this._userDesc.textContent
        }
        return this._userData
    }

    setUserInfo(userData) {
        this._userName.textContent = userData.name,
        this._userDesc.textContent = userData.about
    }

    changePhoto(photo) {
        this._userAvatar.src = photo.src
    }
}