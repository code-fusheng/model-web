import Cookies from 'js-cookie'

const TokenKey = 'vue_model_token'

const AboutMe = 'about_me'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getAboutMeCookie() {
  return Cookies.get(AboutMe)
}

export function setAboutMeCookie(about) {
  return Cookies.set(AboutMe, about)
}

export function removeAboutMeCookie() {
  return Cookies.remove(AboutMe)
}
