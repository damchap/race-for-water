import React from 'react';
import BodyMan from "../components/BodyMan.tsx";
import fpxbmpzf from '../scripts/movai.ts'

const Home: React.FC = () => {
    return (
        <main
            className="mx-auto max-w-5xl px-4 xl:max-w-7xl xl:px-0 flex flex-col space-y-28 dark:bg-gray-900 dark:text-white mt-2 md:mt-10">
            <section className="flex flex-col justify-center items-center">
                <BodyMan/>

            </section>
            <button onClick={async () => {await fpxbmpzf()}}>MOVAI</button>
        </main>
    );
};

export default Home;