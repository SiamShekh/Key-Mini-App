import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Splash from "./page/Splash";
import NotFound from "./utils/NotFound";
import Introduction from "./page/Introduction";
import ContextApi from "./utils/ContextApi";
import Home from "./page/Home";
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import Leaderboard from "./page/Leaderboard";
import LandingPage from "./layout/LandingPage";

const Routes = createBrowserRouter([
    {
        path: '/app',
        element:
            <TonConnectUIProvider
                manifestUrl={"https://api.ascentraico.com/manifest"}
                restoreConnection
                actionsConfiguration={{ twaReturnUrl: "https://t.me/SiamDevBot/time" }}>
                <AppLayout />
            </TonConnectUIProvider>
        ,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'leaderboard',
                element: <Leaderboard />
            },
        ]
    },
    {
        path: '/splash',
        element: <Splash />,
        errorElement: <NotFound />
    },
    {
        index: true,
        element: <LandingPage />
    },
    {
        path: '/intro',
        element: <ContextApi><Introduction /></ContextApi>,
        errorElement: <NotFound />
    },
]);

export default Routes;