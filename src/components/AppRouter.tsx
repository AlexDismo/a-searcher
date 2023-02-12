import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import cl from './Main/Main.module.css'
import Navbar from "./Header/Navbar";
import Main from "../pages/Main";
import Info from "../pages/Info";
import Random from "../pages/Random";


const AppRouter: FC = () => {
    return (
        <div className={cl.Main}>
            <Navbar/>
            <Routes>
                    <Route path={'/' }  element={<Main/>}></Route>
                    <Route path={'/anime/:id' }  element={<Info/>}></Route>
                    <Route path={'/anime/random' }  element={<Random/>}></Route>
            </Routes>
        </div>
    );
};

export default AppRouter;