import React, {FC, useContext, useEffect, useState} from 'react';
import cl from './Main.module.css'
import cls from '../Header/Header.module.sass'
import {fetchAnimeBasic} from "../../http/animeAPI";
import {observer} from "mobx-react-lite";
import {AnimeContext} from "../../main";
import Card from "./Card";


const CardZone: FC = () => {
    const [page, setPage]=useState(1)
    const pag=[page, page+1, page+2, page+3, page+4]
    const {animeList} = useContext(AnimeContext)
    useEffect(()=>{
        animeList.setIsLoading(true)
        fetchAnimeBasic(page,12).then(data=> {
            animeList.setAnimeActive(data)
            animeList.setIsLoading(false)
            if(!pag.includes(1)){pag.unshift(1)}
            window.scrollTo(0, 0)
        })
    }, [page])
    return (
        <div className={cl.mainPage}>
        <main className={cl.cardZone}>
                    {animeList.animeActive.map((anime:any)=>
                        <Card
                            key={anime.title}
                            id={anime.mal_id}
                            img={anime.images.jpg.image_url}
                            title={anime.title}
                            score={anime.score}
                            year={anime.year}
                        />
                    )}
        </main>
            <div className={cl.pagination}>
                <nav>
                    <ul>
                        <li><a onClick={()=>{setPage(1)}}> {"<<"} </a></li>
                        {
                            pag.map((id)=>
                                <li key={id} className={page==id ? cls[`pagActive`]: cls.invalidStyle}><a onClick={()=>{setPage(id)}}>{id}</a></li>)
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default observer(CardZone);