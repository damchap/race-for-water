import React from 'react';
import BodyMan from "../components/BodyMan.tsx";
import DateContainer from "../components/DateContainer.tsx";

const Home: React.FC = () => {
    return (
        <main
            className="mx-auto max-w-5xl px-4 xl:max-w-7xl xl:px-0 flex flex-col space-y-28  mt-2 md:mt-10">
            <section className="flex flex-row justify-center items-center gap-8">
                <BodyMan/>
                <DateContainer/>
            </section>
        </main>
    );
};

export default Home;