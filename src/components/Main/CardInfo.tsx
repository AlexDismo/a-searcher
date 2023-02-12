import React, {FC} from 'react';
import cl from "./Main.module.css";
import {NavLink} from "react-router-dom";

interface CardInfoProps{
    anime: any
}
const CardInfo: FC<CardInfoProps> = ({anime}) => {
    return (
        <>
            {anime?
                <div className={cl.cardInfo}>
                    <div className={cl.cardHead}>
                        <div className={cl.cardHead_img}>
                            <img src={anime.images.jpg.image_url} width={350} alt=''/>
                        </div>
                        <div className={cl.cardHead_titles}>
                            <span style={{fontSize:30, border: "2px solid white", padding:5, borderRadius:5}}>{anime.title}</span>
                            <div className={cl.cardHead_characteristic}>
                                <div className={cl.characteristic}>
                                    <span>Original: </span>
                                    <span>{anime.title_japanese}</span>
                                </div>
                                <div className={cl.characteristic}>
                                    <span>Rating: </span>
                                    <span style={{color:"pink"}}>{anime.score} | votes ({anime.scored_by})</span>
                                </div>
                                <div className={cl.characteristic}>
                                    <span>Season: </span>
                                    <span>{anime.season}</span>
                                </div>
                                <div className={cl.characteristic}>
                                    <span>Type: </span>
                                    <span>{anime.type}</span>
                                </div>
                                <div className={cl.characteristic}>
                                    <span>Status: </span>
                                    <span>{anime.status}</span>
                                </div>
                                <div className={cl.characteristic}>
                                    <span>Trailer: </span>
                                    <span><NavLink style={{color:"red"}} to={anime.trailer.url}>YOUTUBE</NavLink></span>
                                </div>
                                <div className={cl.characteristic}>
                                    <span>Episodes: </span>
                                    <span>{anime.episodes}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cl.cardMain}>
                        <span>{anime.synopsis}</span>
                    </div>
                </div>
                :
                <></>
            }</>
    );
};

export default CardInfo;