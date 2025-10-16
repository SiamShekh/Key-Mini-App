import { FaXTwitter } from "react-icons/fa6";
import lock from "../assets/lock_icon.png";
import { FaCheck, FaTelegram } from "react-icons/fa";

const Home = () => {
    return (
        <div className="relative">
            <img src={lock} alt="lock " className="size-40 mx-auto mt-14" />
            <p className="text-4xl text-center font-opensans mt-5">3,000 <span className="text-xl opacity-50">🔑</span></p>

            <div className="bg-white/3 rounded-xl mt-14 font-monda border-white/2 border px-3 py-2 w-full flex items-center gap-3 justify-between">
                <div className="flex items-center gap-3 ">
                    <FaXTwitter className="text-2xl" />
                    <div>
                        <p>Follow on X</p>
                        <p className="text-xs opacity-50">1,000 🔑</p>
                    </div>
                </div>
                <div className="bg-white/3 px-5 py-2 rounded-full">
                    <FaCheck />
                </div>
            </div>

            <div className="bg-white/3 rounded-xl mt-2 font-monda border-white/2 border px-3 py-2 w-full flex items-center gap-3 justify-between">
                <div className="flex items-center gap-3 ">
                    <FaTelegram className="text-2xl" />
                    <div>
                        <p>Subscribe telegram channel</p>
                        <p className="text-xs opacity-50">1,000 🔑</p>
                    </div>
                </div>
                <div className="bg-white text-black px-5 py-2 rounded-full">
                    <p className="text-xs">Go</p>
                </div>
            </div>
        </div>
    );
};

export default Home;