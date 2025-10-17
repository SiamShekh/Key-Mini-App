import { initData } from '@telegram-apps/sdk';
import React from 'react';

const Leaderboard = () => {
    // const = initDataUser()
    initData.restore()
    console.log(initData.user());

    function rndColor() {
        const randomNum = Math.random() * 3;
        console.log(randomNum);
        
        switch (Math.round(randomNum)) {
            case 0:
                return `bg-cyan-300`;
            case 1:
                return `bg-yellow-300`;
            case 2:
                return `bg-blue-300`;
            case 3:
                return `bg-purple-300`;
        }
    }

    return (
        <div>
            <img src={initData.user()?.photo_url} alt="photo picture" className='size-20 rounded-full mx-auto mt-5' />
            <p className="text-2xl text-center font-monda font-bold text-white mt-1">3,000</p>
            <p className='font-montserrat text-center mt-1 opacity-70 text-xs'>Level 1 - 🌟 1 Place</p>
            <div className="flex items-center justify-center mt-4">
                <button className='text-sm bg-white/10 px-3 py-1 rounded-md border border-yellow-500/50 font-monda'>✨ Invite Friends</button>
            </div>

            <div className="flex items-center justify-between mt-4">
                <p className='font-roboto font-medium'>All Leaderboards</p>
                <p className='text-sm font-montserrat text-blue-400'>See all</p>
            </div>

            <div className="bg-white/10 p-3 rounded-xl mt-2 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className={`size-10 rounded-full mx-auto text-black flex items-center justify-center ${rndColor()}`}>
                        SA
                    </div>
                    <div>
                        <p className='font-monda'>Siam Sheikh</p>
                        <p className='text-xs opacity-50'>1231 - Lvl 10</p>
                    </div>
                </div>
                <p className='text-2xl font-opensans'>#1</p>
            </div>

            <div className="bg-white/10 p-3 rounded-xl mt-2 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <img src={initData.user()?.photo_url} alt="photo picture" className='size-10 rounded-full mx-auto' />
                    <div>
                        <p className='font-monda'>Iqbal Labit</p>
                        <p className='text-xs opacity-50'>1231 - Lvl 10</p>
                    </div>
                </div>
                <p className='text-2xl font-opensans'>#2</p>
            </div>

            <div className="bg-white/10 p-3 rounded-xl mt-2 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <img src={initData.user()?.photo_url} alt="photo picture" className='size-10 rounded-full mx-auto' />
                    <div>
                        <p className='font-monda'>Karim jannat</p>
                        <p className='text-xs opacity-50'>1231 - Lvl 10</p>
                    </div>
                </div>
                <p className='text-2xl font-opensans'>#3</p>
            </div>
        </div>
    );
};

export default Leaderboard;