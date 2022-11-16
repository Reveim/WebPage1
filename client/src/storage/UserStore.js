import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._steam_id = ''
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }
    setSteam_Id(steam_id){
        this._steam_id = steam_id
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
    get steam_id(){
        return this._steam_id
    }
}