import React from 'react';
import fpxbmpzf from '../scripts/movai'

const Home: React.FC = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <button onClick={async () => {await fpxbmpzf()}}>MOVAI</button>
        </div>
    );
};

export default Home;