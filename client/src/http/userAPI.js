import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode"

export const login = async (steam_id) => {
    const {data} = await $host.post('user/login', {steam_id})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const check = async () => {
    const {data} = await $authHost.post('user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
// export const getSteamId = async() => {
//     var decoded = jwt_decode(localStorage.getItem('token'))
//     const steam_id = Object.getOwnPropertyDescriptor(decoded, 'steam_id')
//     return steam_id.value
// }