import React, {FC, useContext, useState} from 'react';
import cl from './Main.module.css'
import {AnimeContext} from "../../main";
import {fetchAnimeSearch} from "../../http/animeAPI";

const Searcher: FC = () => {
    const {animeList} = useContext(AnimeContext)
    const [value,setValue]=useState('')
    const renderSearch = ()=>{
        setValue('')
        fetchAnimeSearch(value).then(data=> {
            animeList.resetAnimeActive(data)
        })}

    return (
        <div className={cl.searcher}>
            <input onKeyDown={(e)=>{e.key==="Enter"&&renderSearch()}} value={value} onChange={(e)=>setValue(e.target.value)} className={[cl.container, cl.animated].join(' ')}/>
            <button onClick={()=>renderSearch()}>Search Anime</button>
        </div>
    );
};

export default Searcher;