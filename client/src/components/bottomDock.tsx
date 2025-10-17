import { FaGamepad, FaHome, FaPeopleCarry, FaEye, FaMoneyBillWave } from 'react-icons/fa';
import { MdLeaderboard } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

const BottomDock = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const dock = [
        {
            href: "/app",
            title: "Home",
            icon: <FaHome />
        },
        {
            href: "/app/game",
            title: "Game",
            icon: <FaGamepad />
        },
        {
            href: "/app/leaderboard",
            title: "Leaderboard",
            icon: <MdLeaderboard />
        },
        {
            href: "/app/identity",
            title: "Identity",
            icon: <FaEye />
        },
        {
            href: "/app/wallet",
            title: "Wallet",
            icon: <FaMoneyBillWave />
        },
    ]
    return (
        <div className="dock bg-white/2 text-neutral-content backdrop-blur-xs">
            {dock.map((item, i) => (
                <button
                    onClick={() => navigate(item?.href)}
                    type='button'
                    key={i}
                    className={`${location?.pathname === item?.href ? `opacity-100` : 'opacity-20'}`}>
                    <div>
                        {item?.icon}
                    </div>
                    <span className="dock-label font-montserrat">{item?.title}</span>
                </button>
            ))}
        </div>
    );
};

export default BottomDock;