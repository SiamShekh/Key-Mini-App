import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div data-theme="black" className="min-h-screen px-3">
            <Outlet/>
        </div>
    );
};

export default AppLayout;