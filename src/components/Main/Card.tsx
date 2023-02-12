import React, {FC} from 'react';
import cl from './Main.module.css'
import {NavLink} from "react-router-dom";


interface CardProps {
    title: string
    img: string
    score: number,
    year:number,
    id:number
}
const Card: FC<CardProps> = ({id,title, img, year}) => {
    return (
        <NavLink to={`anime/${id}`}>
        <div className={cl.card}>
            <div className={cl.imgCard}>
                <img src={img} alt=""/>
            </div>
            <div className={cl.infoCard}>
                <p>{title}</p>
                <p>{year}</p>
            </div>
        </div>
        </NavLink>
    );
};

export default Card;