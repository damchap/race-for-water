import Home from './home.tsx';
import Earth from './earth.tsx';
import Magnifer from './magnifer.tsx';
import Setting from './settings.tsx';
import TeaCup from './teaCup.tsx';
import React from 'react';

export interface LogosProps {
    width?: number | string,
    height?: number | string,
    className?: string,
    style?: React.CSSProperties
}

const Logos = {
    Home,
    Earth,
    Magnifer,
    Setting,
    TeaCup

};

export default Logos;