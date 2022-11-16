import { makeAutoObservable } from "mobx"

export default class StatsStorage {
    constructor() {
        this._element = []
        this._ptype = []
        this._stype = []
        this._selectedPType = {}
        this._selectedSType = {}
        this._page = 1
        this._totalCount = 0
        this._limited = 3
        makeAutoObservable(this)
    }

    setElement(element) {
        this._element = element
    }
    get element() {
        return this._element
    }
    
    setId(id) {
        this._id = id
    }
    get id() {
        return this._id
    }

    setName(name) {
        this._name = name
    }
    get name() {
        return this._name
    }

    setPType(ptype) {
        this._ptype = ptype
    }
    get ptype() {
        return this._ptype
    }

    setSType(stype) {
        this._stype = stype
    }
    get stype() {
        return this._stype
    }

    setValue(value) {
        this._value = value
    }
    get value() {
        return this._value
    }

    setStatSteamId(statSteamId) {
        this._statSteamId = statSteamId
    }
    get statSteamId() {
        return this._statSteamId
    }

    setAchievementSteamId(achievementSteamId) {
        this._achievementSteamId = achievementSteamId
    }
    get achievementSteamId() {
        return this._achievementSteamId
    }

    setSelectedPType(ptype) {
        this.setPage(1)
        this._selectedPType = ptype
    }
    get selectedPType() {
        return this._selectedPType
    }

    setSelectedSType(stype) {
        this.setPage(1)
        this._selectedSType = stype
    }
    get selectedSType() {
        return this._selectedSType
    }

    setPage(page) {
        this._page = page
    }
    get page() {
        return this._page
    }

    setTotalCount(count) {
        this._totalCount = count
    }
    get totalCount() {
        return this._totalCount
    }

    get limited() {
        return this._limited
    }

}