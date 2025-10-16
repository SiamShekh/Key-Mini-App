import { miniApp } from "@telegram-apps/sdk";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import BottomDock from "../components/bottomDock";
import Header from "../components/header";

const AppLayout = () => {

    useEffect(() => {
        if (miniApp.mountSync.isAvailable() && !miniApp.isMounted()) {
            miniApp.mountSync();
        }

        if (miniApp.setHeaderColor.isAvailable()) {
            miniApp.setHeaderColor('#FEE685');
        }

        if (miniApp.setBottomBarColor.isAvailable()) {
            miniApp.setBottomBarColor('#000000');
        }
    }, [])

    return (
        <div data-theme="black" className="min-h-screen relative">
            <Header />
            <div className="px-3">
                <Outlet />
            </div>
            <BottomDock />
        </div>
    );
};

export default AppLayout;