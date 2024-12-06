import React from 'react';
import fpxbmpzf from '../scripts/movai.ts'
import BodyMan from "../components/BodyMan.tsx";

const Home: React.FC = () => {
    return (
        <main
            className="mx-auto max-w-5xl px-4 xl:max-w-7xl xl:px-0 flex flex-col space-y-28 dark:bg-gray-900 dark:text-white mt-2 md:mt-10">
            <section className="flex flex-col justify-center items-center">
                <BodyMan/>

            </section>
            <button onClick={fpxbmpzf}>MOVAI CODE</button>
        </main>
    );
};

export default Home;