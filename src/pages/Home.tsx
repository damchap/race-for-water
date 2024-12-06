import React, { useState } from 'react';
import BodyMan from "../components/BodyMan.tsx";
import DateContainer from "../components/DateContainer.tsx";

interface PartiDuCorp {
    id: number;
    titre: string;
    description: string;
    zone: {
        x: number;
        y: number;
    };
    image: string;
}

const Home: React.FC = () => {
    const [selectedPartiDuCorps, setSelectedPartiDuCorps] = useState<PartiDuCorp | null>(null);
    const partiDuCorpsData = [
        {
            id: 1,
            titre: "Coeur de l'océan",
            description: "Le coeur de l'océan est un organe vital pour la survie de l'océan. Il est composé de plusieurs éléments qui permettent de maintenir l'équilibre de l'océan. Il est important de le protéger pour préserver la vie marine.",
            zone: {
                x: 7,
                y: 3,
            },
            image: "./assets/images/heart.png",
    
        },
    {
        id: 2,
        titre: "Poumons de l'océan",
        description: "Les poumons de l'océan sont essentiels pour la respiration des créatures marines. Ils filtrent l'eau et fournissent de l'oxygène aux organismes sous-marins.",
        zone: {
            x: 3,
            y: 3,
        },
        image: "./assets/images/lungs.png",
    },
    {
        id: 3,
        titre: "Estomac de l'océan",
        description: "L'estomac de l'océan digère les nutriments et recycle les déchets organiques, jouant un rôle crucial dans le maintien de la chaîne alimentaire marine.",
        zone: {
            x: 5,
            y: 4,
        },
        image: "./assets/images/stomach.png",
    },
    {
        id: 4,
        titre: "Foie de l'océan",
        description: "Le foie de l'océan détoxifie les polluants et aide à maintenir la santé globale de l'écosystème marin.",
        zone: {
            x: 3,
            y: 5,
        },
        image: "./assets/images/liver.png",
    },
    {
        id: 5,
        titre: "Reins de l'océan",
        description: "Les reins de l'océan filtrent les impuretés et régulent la salinité de l'eau, assurant un environnement stable pour la vie marine.",
        zone: {
            x: 6,
            y: 5,
        },
        image: "./assets/images/kidneys.png",
    },
    {
        id: 6,
        titre: "Pied de l'océan",
        description: "Le pied de l'océan permet aux créatures marines de se déplacer et de s'ancrer dans le sol marin.",
        zone: {
            x: 3,
            y: 11,
        },
        image: "./assets/images/foot.png",
    },
    {
        id: 7,
        titre: "Main de l'océan",
        description: "La main de l'océan est utilisée par certaines créatures pour attraper des proies et manipuler des objets sous-marins.",
        zone: {
            x: 8,
            y: 7,
        },
        image: "./assets/images/hand.png",
    },
    {
        id: 8,
        titre: "Mollet de l'océan",
        description: "Le mollet de l'océan aide à la propulsion et à la nage des créatures marines.",
        zone: {
            x: 3,
            y: 9,
        },
        image: "./assets/images/calf.png",
    },

    ];
    return (
        <main
            className="mx-auto max-w-5xl px-4 xl:max-w-7xl xl:px-0 flex flex-col  mt-2 md:mt-10 ">
            <section className="flex flex-row justify-center items-center gap-8">
            <BodyMan partiDuCorps={partiDuCorpsData} onSelectPartiDuCorps={setSelectedPartiDuCorps}/>
            </section>
            {selectedPartiDuCorps && (
            <div className="fixed top-0 m-0 p-0 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-[10px]">
                <div className="bg-[rgba(128,128,128,0.30)] bg-blend-luminosity p-4 rounded-2xl shadow-lg backdrop-blur-[50px]">
                    <div className="flex w-[270px] px-4 py-2 flex-col items-center gap-0.5">
                    <h1 className="text-2xl font-bold text-white">{selectedPartiDuCorps.titre}</h1>
                    <p className="text-sm text-white">{selectedPartiDuCorps.description}</p>
                    <button onClick={() => setSelectedPartiDuCorps(null)} className="mt-4 px-4 py-2 bg-[#69BFE8] text-white rounded">
                        Close
                    </button>
                    </div>
                </div>
            </div>
            )}
        </main>
    );
};

export default Home;