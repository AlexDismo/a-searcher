import React, {FC} from 'react';
import Searcher from "../components/Main/Searcher";
import CardZone from "../components/Main/CardZone";
import cl from "../components/Main/Main.module.css"

const MainBlock: FC = () => {
    return (
        <>
            <Searcher/>
            <div className={cl.headTitle}>
                <span>The site was created on the basis of an unofficial open database of anime Jikan API</span>
            </div>
            <CardZone/>
        </>
    );
};

export default MainBlock;