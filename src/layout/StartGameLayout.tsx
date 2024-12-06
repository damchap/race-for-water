import React from 'react';
import Logo from '../assets/images/race4water.png';
import Background from '../assets/images/ocean.png';
import { Button } from '@mui/material';
import fpxbmpzf from '../scripts/movai.ts'

const StartGameLayout: React.FC = () => {
    return (
        <div className='fixed w-screen h-screen bg-cover bg-center' style={{ backgroundImage: `url(${Background})` }}>
            {/* Semi-transparent overlay */}
            <div className='absolute top-0 left-0 w-full h-full bg-[#16275BB2] z-0' />
            
            {/* Content */}
            <div className='relative z-10 flex flex-col gap-8 items-center justify-center h-full'>
                <img src={Logo} alt='Race4Water' className='max-w-3/5'/>
                <Button variant='contained' href='/home' color='primary'>Start Game</Button>
            </div>
        </div>
    );
};

export default StartGameLayout;
