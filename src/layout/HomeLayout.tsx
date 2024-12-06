import React from 'react';
import {Outlet} from "react-router";
import Navbar from "../components/Navbar.tsx";
import VideoBackground from "../components/VideoBackground.tsx";
// import BackgrougVideo from '../assets/video/background/MovingOcean.mp4'

const HomeLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    console.log('HomeLayout');
    console.log(children);
    return (
        <div>
            <VideoBackground>
                <Outlet />
                <Navbar />
            </VideoBackground>
        </div>
    );
};

export default HomeLayout;
