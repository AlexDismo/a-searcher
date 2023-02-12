import React, {FC, useContext, useEffect} from 'react';
import {AnimeContext} from "../main";
import {fetchAnimeRandom} from "../http/animeAPI";
import CardInfo from "../components/Main/CardInfo";
import {observer} from "mobx-react-lite";

const Random: FC = () => {
    const {animeList}=useContext(AnimeContext)
    useEffect(()=>{
            animeList.setIsLoading(true)
            fetchAnimeRandom().then(data=>{
                animeList.setCurrentAnime(data)
                animeList.setIsLoading(false)
            })
    },[])
    const anime= animeList.currentAnime
    console.log(anime)
    return (
        <>
            <button onClick={()=>location. reload()}>Next Random</button>
        <CardInfo anime={anime}/>
        </>
    );
};
export default observer(Random);