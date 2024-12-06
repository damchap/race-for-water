import React from 'react';
import {Outlet} from "react-router";
import Navbar from "../components/Navbar.tsx";
// import BackgrougVideo from '../assets/video/background/MovingOcean.mp4'

const HomeLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    console.log('HomeLayout');
    console.log(children);
    return (
        <div>
            {/*<video autoPlay muted loop id="myVideo" className='fixed w-screen h-screen object-cover -z-10'>*/}
            {/*    <source src={BackgrougVideo} type="video/mp4" />*/}
            {/*</video>*/}
            <Outlet />
            <Navbar />
        </div>
    );
};

export default HomeLayout;
