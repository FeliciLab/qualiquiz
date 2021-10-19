import axios from 'axios'

// buscando a instancia do vuex no Local History
const vuex = JSON.parse(localStorage.getItem('vuex'))

let development = true

if (vuex) {
  development = vuex.application.development
}

const uri = {
  dev: 'https://apiisus.dev.org.br',
  prod: 'https://apiisus.inova.esp.br'
}

const getUri = devMode => {
  return devMode ? uri.dev : uri.prod
}

const api = axios.create({
  baseURL: getUri(development)
})

export default api
