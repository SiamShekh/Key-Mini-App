import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import BottomDock from "../components/bottomDock";
import Header from "../components/header";
import { miniApp } from "@tma.js/sdk";

const AppLayout = () => {

    useEffect(() => {
        if (!miniApp.isMounted()) {
            miniApp.mount();
        }

        if (miniApp.setHeaderColor.supports('rgb')) {
            miniApp.setHeaderColor('#FEE685');
        }

        if (miniApp.setBottomBarColor.isSupported()) {
            miniApp.setBottomBarColor('#000000');
        }
    }, [])

    return (
        <div data-theme="black" className="min-h-screen relative">
            <Header />
            <div className="px-3 pb-16">
                <Outlet />
            </div>
            <BottomDock />
        </div>
    );
};

export default AppLayout;