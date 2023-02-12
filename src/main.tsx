import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import animeStore from './stores/store'


export const AnimeContext = createContext({} as any)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <AnimeContext.Provider value={{animeList: animeStore}}>
        <App />
    </AnimeContext.Provider>
)
