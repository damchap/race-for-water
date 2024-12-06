import React from 'react';
import Logo from './logo/index.ts';

const Navbar: React.FC = () => {
    return (
        <div className="mx-auto max-w-5xl px-4 xl:max-w-7xl xl:px-0 flex flex-col space-y-28  mt-2 md:mt-10">
            <div className="flex flex-col justify-center items-center">
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
        </div>
    );
};

export default Navbar;