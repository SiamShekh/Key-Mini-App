import { FaXTwitter } from "react-icons/fa6";
import lock from "../assets/lock_icon.png";
import { FaCheck, FaTelegram, FaTelegramPlane } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { initData } from "@tma.js/sdk";
import { RiAccountCircle2Line } from "react-icons/ri";
import icon from "../assets/lock_icon.png";
import mrcools from "../assets/mr_cool.svg";
import twitter_icon from "../assets/x-twitter-icon.png";
import telegram_icon from "../assets/telegram-icon.png";

const Home = () => {
    initData.restore();

    return (
        <div className="relative flex flex-col-reverse md:grid md:grid-cols-4 gap-4">
            <div className="grid md:grid-cols-2 md:gap-4 mt-5 h-fit md:col-span-3">
                <div className="col-span-2 h-fit hidden md:block">
                    <p className="text-4xl font-medium text-white font-opensans">Welcome in Key,</p>
                    <p className="text-xl font-montserrat mt-1 text-white/50">Discover the way to get financial freedom.</p>
                </div>

                <div className="md:col-span-2 mt-7 mb-3 md:mb-0 h-fit">
                    <p>Most popular</p>
                </div>

                <div className="">
                    <div className="relative overflow-hidden rounded-lg border-purple-900/35 h-60 border-2 hover:blur-lg duration-500">
                        <div className="bg-gradient-to-b from-white via-white/60 to-white/30 h-32 w-full opacity-40 blur-3xl absolute"></div>
                        <img src={twitter_icon} alt="mrcool" className="size-36 blur-sm absolute left-[50%] -translate-x-[50%]" />
                    </div>

                    <div className="p-4 relative -top-16">
                        <div className="relative bg-black border-white/10 rounded-lg font-monda h-fit border-2 p-3 w-full flex items-center gap-3 justify-between">
                            <div className="">
                                <p className="font-montserrat font-semibold">Follow on X</p>
                                <div className="p-2 bg-white/10 w-fit rounded-full">
                                    <FaXTwitter className="text-xl" />
                                </div>
                            </div>
                            <div className="bg-white/10 px-5 w-24 py-2 text-center cursor-pointer rounded-full">Go</div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="relative overflow-hidden rounded-lg border-blue-900/35 h-60 border-2 hover:blur-lg duration-500">
                        <div className="bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500 h-32 w-full opacity-40 blur-3xl absolute"></div>
                        <img src={telegram_icon} alt="mrcool" className="size-36 blur-sm absolute left-[50%] -translate-x-[50%]" />
                    </div>

                    <div className="p-4 relative -top-16">
                        <div className="relative bg-black border-blue-500 rounded-lg font-monda h-fit border-2 p-3 w-full flex items-center gap-3 justify-between">
                            <div className="">
                                <p className="font-montserrat font-semibold">Subscribe Channel</p>
                                <div className="p-2 bg-white/10 w-fit rounded-full">
                                    <FaTelegramPlane className="text-xl" />
                                </div>
                            </div>
                            <div className="bg-white/10 px-5 w-24 py-2 text-center cursor-pointer rounded-full">Go</div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 md:mt-7 mb-3 md:mb-0 h-fit">
                    <p>Genarel</p>
                </div>

                <div className="relative bg-black border-blue-500/20 rounded-lg font-monda h-fit border-2 p-3 w-full flex items-center gap-3 justify-between">
                    <div className="">
                        <p className="font-montserrat font-semibold">Watch ads</p>
                        <div className="p-2 bg-white/10 w-fit rounded-full">
                            <FaTelegramPlane className="text-xl" />
                        </div>
                    </div>
                    <div
                        onClick={async () => {

                            try {
                                //@ts-ignore
                                const ads = await show_10269970();
                                if (ads.status=== "fulfilled") {
                                    // call api and give reward to the user
                                    alert("ads watched");
                                }
                            } catch (error) {
                                alert('Unable to load a ads')
                            }

                            // Rewarded interstitial
                            //@ts-ignore



                        }}
                        className="bg-white/10 px-5 w-24 py-2 text-center cursor-pointer rounded-full">watch</div>
                </div>

                <div className="relative bg-black border-blue-500/20 rounded-lg mt-2 md:mt-0 font-monda h-fit border-2 p-3 w-full flex items-center gap-3 justify-between">
                    <div className="">
                        <p className="font-montserrat font-semibold">News Channel</p>
                        <div className="p-2 bg-white/10 w-fit rounded-full">
                            <FaTelegramPlane className="text-xl" />
                        </div>
                    </div>
                    <div className="bg-white/10 px-5 w-24 py-2 text-center cursor-pointer rounded-full">Go</div>
                </div>
            </div>

            <div className="md:col-span-1 md:bg-white/5 rounded-lg md:p-5 md:min-h-[90vh] my-5">
                <div className="md:flex items-center justify-between hidden">
                    <div className="hover:bg-white/10 hover:rounded-full duration-1000 p-2 cursor-pointer">
                        <IoMdNotificationsOutline className="text-2xl text-white" />
                    </div>
                    <div className="hover:bg-white/10 hover:rounded-full duration-1000 p-2 cursor-pointer">
                        <IoSettingsOutline className="text-2xl text-white" />
                    </div>
                </div>

                <img src={initData.user()?.photo_url} alt="profile photo" className="size-20 rounded-full mx-auto" />
                <p className="text-2xl font-bebas text-center text-white my-2 hidden md:block">Siam Sheikh</p>

                <div className="bg-white/5 hidden hover:bg-white/20 duration-1000 p-3 rounded-full md:flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div>
                            <RiAccountCircle2Line className="text-2xl" />
                        </div>
                        <p className="font-monda">219 Friends</p>
                    </div>
                    <div>
                        <MdKeyboardArrowRight className="text-2xl" />
                    </div>
                </div>

                <img src={lock} alt="lock " className="size-40 mx-auto mt-5 hidden md:block" />
                <div className="flex items-end justify-center gap-1">
                    <p className="text-5xl text-center font-monda font-bold mt-5 text-white">3,000</p>
                    <p className="text-xl font-bold font-roboto">KEY</p>
                </div>

                <div className="flex items-center justify-center mt-3 opacity-60 ">
                    <p className="uppercase font-roboto text-sm">Leaderboard</p>
                    <MdKeyboardArrowRight />
                </div>
            </div>

        </div>
    );
};

export default Home;