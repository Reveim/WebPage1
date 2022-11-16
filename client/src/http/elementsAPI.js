import { $authHost } from "./index";
import jwt_decode from "jwt-decode"

export const fetchPType = async () => {
    const { data } = await $authHost.get('elements/ptypes')
    return data
}
export const fetchSType = async () => {
    const { data } = await $authHost.get('elements/stypes')
    return data
}
export const check = async (steam_id) => {
    const { data } = await $authHost.post('user/auth', { steam_id })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const fetchElements = async (steam_id, ptype, stype) => {
    const { data } = await $authHost.get('stats/', {
        params: {
            steam_id, ptype, stype
        }
    })
    return data
}
export const fetchAchievements = async (steam_id) => {
    const { data } = await $authHost.get('achievements/', { params: { steam_id } })
    return data
}