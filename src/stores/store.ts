import {makeAutoObservable} from "mobx";

class AnimeStore{
    _isLoading = false
    _currentAnime: any
    _animeActive: any = []
    constructor() {
        makeAutoObservable(this)
    }
    setAnimeActive(data:any){
        this._animeActive = [...data]
    }
    resetAnimeActive(data:any){
        this._animeActive=[]
        this._animeActive=data
    }
    get animeActive(){
        return this._animeActive
    }
    setIsLoading(bool:boolean){
        this._isLoading=bool
    }
    get currentAnime(){
        return this._currentAnime
    }
    setCurrentAnime(data:any){
        this._currentAnime=data
    }
}
export default new AnimeStore()