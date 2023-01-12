import { Outlet } from "react-router-dom"
import { MainNavigation } from "../components";

import './ReQiew.scss';

export const ReQiew = () => {
    return (
        <main className="app">
            <MainNavigation />
            <Outlet/>
        </main>
    );
    };
