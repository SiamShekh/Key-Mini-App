import { FaXTwitter } from "react-icons/fa6";
import lock from "../assets/lock_icon.png";
import { FaCheck, FaTelegram } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    return (
        <div className="relative">
            <img src={lock} alt="lock " className="size-40 mx-auto mt-5" />
            <div className="flex items-end justify-center gap-1">
                <p className="text-5xl text-center font-monda font-bold mt-5 text-white">3,000</p>
                <p className="text-xl font-bold font-roboto">KEY</p>
            </div>

            <div className="flex items-center justify-center mt-3 opacity-60 ">
                <p className="uppercase font-roboto text-sm">Leaderboard</p>
                <MdKeyboardArrowRight />
            </div>

            <div className="bg-white/3 rounded-xl mt-10 font-monda border-white/2 border px-3 py-2 w-full flex items-center gap-3 justify-between">
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