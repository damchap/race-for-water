import React from 'react';
import Logo from './logo/index.ts';

const Navbar: React.FC = () => {
    return (
        <div className="fixed bottom-2 md:bottom-10 flex w-full px-9 flex-col items-center justify-center gap-2">
            <div className="inline-flex px-5 py-0.5 justify-center self-center items-center gap-2 rounded-full border-4 border-white/40 bg-gray-500/17 shadow-[0px_0px_41.3px_13.168px_rgba(0,0,0,0.45)] backdrop-blur-[50px]">
                <div className="flex p-2.5 justify-center items-center gap-2.5">
                    <Logo.Magnifer className={"w-8 h-8"}/>
                </div>
                <div className="flex p-2.5 justify-center items-center gap-2.5">
                    <Logo.Earth className={"w-8 h-8"}/>
                </div>
                <div className="flex p-0.5 justify-center items-center rounded-full border-4 border-white/40 bg-[#69BFE8]">
                    <Logo.Home className="flex w-16 h-16 p-1 justify-center items-center flex-shrink-0" />
                </div>
                <div className="flex p-2.5 justify-center items-center gap-2.5">
                    <Logo.TeaCup className={"w-8 h-8"}/>
                </div>
                <div className="flex p-2.5 justify-center items-center gap-2.5">
                    <Logo.Setting className={"w-8 h-8"}/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;