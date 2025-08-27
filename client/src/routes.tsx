import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Splash from "./page/Splash";
import NotFound from "./utils/NotFound";
import Introduction from "./page/Introduction";

const Routes = createBrowserRouter([
    {
        path: '/app',
        element: <AppLayout />
    },
    {
        path: '/',
        element: <Splash />,
        errorElement: <NotFound />
    },
    {
        path: '/intro',
        element: <Introduction />,
        errorElement: <NotFound />
    },
]);

export default Routes;