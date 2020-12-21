import {http} from '../config/http'

const auth = (data) => http.post('/auth', data)
// const auth = (data) => console.log('no serviço',data)

export {auth}