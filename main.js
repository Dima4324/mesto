(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function r(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(r)?r:String(r)}var n=function(){function t(e,r,n,o,i,c){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._handleCardClick=e,this._name=n.name,this._link=n.link,this._likes=n.likes,this._cardId=n._id,this._id=o,this._api=i,this._callback=r,this._selector=c}var r,n;return r=t,(n=[{key:"_getElement",value:function(){return document.querySelector(this._selector).content.querySelector(".cards__card").cloneNode(!0)}},{key:"_numLikes",value:function(){this._element.querySelector(".count-likes").textContent=this._likes.length}},{key:"deleteCard",value:function(){this._element.closest(".cards__card").remove()}},{key:"_setEventListenerLike",value:function(){var t=this;this._element.querySelector(".cards__like").addEventListener("click",(function(){var e=t._element.querySelector(".cards__like"),r=t._element.querySelector(".count-likes");e.classList.contains("cards__like-active")?t._api.removeLike(t._cardId).then((function(t){e.classList.remove("cards__like-active"),r.textContent=t.likes.length})).catch((function(t){return console.log(t)})):t._api.addLike(t._cardId).then((function(t){e.classList.add("cards__like-active"),r.textContent=t.likes.length})).catch((function(t){return console.log(t)}))}))}},{key:"_setEventListenerDelete",value:function(){var t=this;this._element.querySelector(".trash").addEventListener("click",(function(){t._callback()}))}},{key:"_setEventListenerClickImg",value:function(){this._element.querySelector(".cards__photo").addEventListener("click",this._handleCardClick)}},{key:"generate",value:function(t){this._element=this._getElement(),this._element.querySelector(".cards__photo").src=this._link,this._element.querySelector(".cards__photo").alt=this._name,this._element.querySelector(".cards__name").textContent=this._name;var e=this._likes.map((function(t){return t._id}));return e.includes(this._id)?this._element.querySelector(".cards__like").classList.add("cards__like-active"):this._element.querySelector(".cards__like").classList.remove("cards__like-active"),this._setEventListenerDelete(),this._numLikes(),this._setEventListenerLike(),this._setEventListenerClickImg(),t.owner._id!=this._id&&this._element.querySelector(".trash").remove(),this._element}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,a(n.key),n)}}function c(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t,e,r){return(e=a(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(e)?e:String(e)}var s=c((function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"_showInputError",(function(t,e,r){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n._inputErrorClass),o.textContent=r,o.classList.add(n._errorClass)})),u(this,"_hideInputError",(function(t,e){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(n._inputErrorClass),r.classList.remove(n._errorClass),r.textContent=""})),u(this,"_hasInvalidInput",(function(t){return t.some((function(t){return!t.validity.valid}))})),u(this,"_toggleButtonState",(function(t,e){n._hasInvalidInput(t)?(e.classList.add(n._inactiveButtonClass),e.disabled=!0):(e.classList.remove(n._inactiveButtonClass),e.disabled=!1)})),u(this,"_isValid",(function(t,e){e.validity.valid?n._hideInputError(t,e):n._showInputError(t,e,e.validationMessage)})),u(this,"_setEventListeners",(function(t){var e=Array.from(t.querySelectorAll(n._inputSelector)),r=t.querySelector(n._submitButtonSelector);n._toggleButtonState(e,r),e.forEach((function(o){o.addEventListener("input",(function(){n._isValid(t,o),n._toggleButtonState(e,r)}))}))})),u(this,"enableValidation",(function(){n._setEventListeners(n._selector)})),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._selector=r}));function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,p(n.key),n)}}function p(t){var e=function(t,e){if("object"!=l(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==l(e)?e:String(e)}var y=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,h(n.key),n)}}function h(t){var e=function(t,e){if("object"!=v(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==v(e)?e:String(e)}var b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._selector=document.querySelector(e)}var e,r;return e=t,(r=[{key:"open",value:function(){var t=this;this._selector.classList.add("popup__open"),document.body.classList.add("scroll-lock"),document.addEventListener("keydown",(function(e){return t._handlEscClose(e)}))}},{key:"close",value:function(){this._selector.classList.remove("popup__open"),document.body.classList.remove("scroll-lock")}},{key:"_handlEscClose",value:function(t){27===t.keyCode&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._selector.addEventListener("click",(function(e){e.target.classList.contains("popup")&&t.close(),e.target.classList.contains("popup__img")&&t.close()}))}}])&&d(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,S(n.key),n)}}function S(t){var e=function(t,e){if("object"!=_(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==_(e)?e:String(e)}function g(t,e,r){return e=E(e),function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,k()?Reflect.construct(e,r||[],E(t).constructor):e.apply(t,r))}function k(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(k=function(){return!!t})()}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},w.apply(this,arguments)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}var O=function(t){function e(t,r){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=g(this,e,[t]))._src=r.link,n._alt=r.name,n._imgName=r.name,n}var r,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(e,t),r=e,(n=[{key:"open",value:function(){w(E(e.prototype),"open",this).call(this);var t=document.querySelector(".popup__photo"),r=document.querySelector(".popup__img-name");t.src=this._src,t.alt=this._alt,r.textContent=this._imgName}}])&&m(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}(b);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,C(n.key),n)}}function C(t){var e=function(t,e){if("object"!=P(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==P(e)?e:String(e)}function q(t,e,r){return e=R(e),function(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,I()?Reflect.construct(e,r||[],R(t).constructor):e.apply(t,r))}function I(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(I=function(){return!!t})()}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},T.apply(this,arguments)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}var B=function(t){function e(t){var r,n=t.selector,o=t.callback;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=q(this,e,[n]))._callback=o,r._form=r._selector.querySelector(".popup__form"),r._inputList=r._selector.querySelectorAll(".popup__input"),r}var r,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(e,t),r=e,(n=[{key:"_getInputvalues",value:function(){var t=this;return this._inputValues={},this._inputList.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"close",value:function(){T(R(e.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var t=this;T(R(e.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._callback(t._getInputvalues())}))}}])&&L(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}(b);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function A(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,U(n.key),n)}}function U(t){var e=function(t,e){if("object"!=D(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==D(e)?e:String(e)}var N=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(e),this._userDesc=document.querySelector(r),this._userAvatar=document.querySelector(n)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return this._userData={name:this._userName.textContent,about:this._userDesc.textContent},this._userData}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userDesc.textContent=t.about}},{key:"changePhoto",value:function(t){this._userAvatar.src=t.src}}])&&A(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function J(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,z(n.key),n)}}function z(t){var e=function(t,e){if("object"!=V(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=V(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==V(e)?e:String(e)}var H=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers}var e,r;return e=t,(r=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Произошла ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"editProfile",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._checkResponse(t)}))}},{key:"addCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return e._checkResponse(t)}))}},{key:"removeCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"updateAvatar",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((function(t){return e._checkResponse(t)}))}},{key:"addLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"removeLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}}])&&J(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),M=document.querySelector(".user__edit"),$=document.querySelector(".user__add"),F=document.querySelector(".user__edit-container"),G=".add-place",K=".profile-edit",Q={inputSelector:".popup__input",submitButtonSelector:".popup__btn",inactiveButtonClass:"popup__btn-inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input__error_active"};function W(t){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(t)}function X(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Y(n.key),n)}}function Y(t){var e=function(t,e){if("object"!=W(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=W(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==W(e)?e:String(e)}function Z(t,e,r){return e=rt(e),function(t,e){if(e&&("object"===W(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,tt()?Reflect.construct(e,r||[],rt(t).constructor):e.apply(t,r))}function tt(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(tt=function(){return!!t})()}function et(){return et="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=rt(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},et.apply(this,arguments)}function rt(t){return rt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},rt(t)}function nt(t,e){return nt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},nt(t,e)}var ot=function(t){function e(t){var r,n=t.selector,o=t.callback;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=Z(this,e,[n]))._callback=o,r._form=r._selector.querySelector(".popup__form"),r}var r,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&nt(t,e)}(e,t),r=e,(n=[{key:"setEventListeners",value:function(){var t=this;et(rt(e.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._callback(t._cardId,t._card)}))}},{key:"open",value:function(t,r){et(rt(e.prototype),"open",this).call(this),this._cardId=t,this._card=r}}])&&X(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}(b);function it(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var ct,ut=new N(".user__name",".user__description",".user__photo"),at=function(t){var e=document.querySelector(t);new s(Q,e).enableValidation()},st=new H({baseUrl:"https://nomoreparties.co/v1/cohort-64",headers:{authorization:"3e25cf54-975f-4847-af07-471e48c9313d","Content-Type":"application/json"}}),lt=new B({selector:".edit-avatar",callback:function(t){var e=document.querySelector(".edit-avatar").querySelector(".popup__submit");e.disabled=!0,e.classList.add("popup__btn-inactive"),e.textContent="Изменяем фотографию...",st.updateAvatar(t.src).then((function(){ut.changePhoto(t)})).finally((function(){e.disabled=!1,e.classList.remove("popup__btn-inactive"),e.textContent="Сохранить",lt.close()})).catch((function(t){return console.log(t)}))}});lt.setEventListeners(),F.addEventListener("click",(function(){document.querySelector(".edit-avatar").style.zIndex="3",at(".edit-avatar"),lt.open()}));var ft=new B({selector:K,callback:function(t){var e=document.querySelector(K).querySelector(".popup__submit");e.disabled=!0,e.classList.add("popup__btn-inactive"),e.textContent="Редактируем данные...",st.editProfile(t).then((function(){ut.setUserInfo(t)})).finally((function(){e.disabled=!1,e.classList.remove("popup__btn-inactive"),e.textContent="Сохранить",ft.close()})).catch((function(t){return console.log(t)}))}});ft.setEventListeners(),M.addEventListener("click",(function(){var t=ut.getUserInfo();ft.setInputValues(t),at(K),ft.open()}));var pt=new ot({selector:".delete-card",callback:function(t,e){st.removeCard(t).then((function(){e.deleteCard(),pt.close()})).catch((function(t){return console.log(t)}))}});pt.setEventListeners();var yt=function(t,e){var r=new n((function(){return function(t){var e=new O(".full-photo",t);e.setEventListeners(),e.open()}(t)}),(function(e){pt.open(t._id,r)}),t,e,st,"#cards");return r.generate(t)},vt=new y({renderer:function(t){vt.addItem(yt(t,ct))}},".cards");Promise.all([st.getUserInfo(),st.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,c,u=[],a=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{if(!a&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(s)throw o}}return u}}(e,r)||function(t,e){if(t){if("string"==typeof t)return it(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?it(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];ut.setUserInfo(o),document.querySelector(".user__photo").src=o.avatar,ct=o._id,vt.renderItems(i.reverse())})).catch((function(t){return console.log(t)}));var dt=new B({selector:G,callback:function(t){var e={name:t.name,link:t.link},r=document.querySelector(G).querySelector(".popup__submit");r.disabled=!0,r.classList.add("popup__btn-inactive"),r.textContent="Загружаем карточку...",st.addCard(e).then((function(t){vt.addItem(yt(t,ct))})).finally((function(){r.disabled=!1,r.classList.remove("popup__btn-inactive"),r.textContent="Создать",dt.close()})).catch((function(t){return console.log(t)}))}});dt.setEventListeners();var ht=new b(G);$.addEventListener("click",(function(){at(G),ht.open()}))})();