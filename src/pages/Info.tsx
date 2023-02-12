import React, {FC, useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {AnimeContext} from "../main";
import {fetchAnimeById} from "../http/animeAPI";
import CardInfo from "../components/Main/CardInfo";

const Info: FC = () => {
    const {id} =useParams()
    const {animeList}=useContext(AnimeContext)
    useEffect(()=>{
        animeList.setIsLoading(true)
        if(id)
            fetchAnimeById(id).then(data=>{
                animeList.setCurrentAnime(data)
                animeList.setIsLoading(false)
            })
    },[])
    const anime= animeList.currentAnime
    console.log(anime)
    return (
        <CardInfo anime={anime}/>
    );
};

export default observer(Info);