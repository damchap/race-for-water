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

interface DateContainerProps {
    partiDuCorp: PartiDuCorp | null;
}

const DateContainer = ({ partiDuCorp }: DateContainerProps) => {
    return (
        <>
        {partiDuCorp && (
        <div className="flex w-80 p-5 flex-col items-center gap-2 rounded-2xl border-[1.4px] border-white/40 bg-[rgba(128,128,128,0.30)] bg-blend-luminosity backdrop-blur-[50px]">
            
                <div className="flex w-[270px] px-4 py-2 flex-col items-center gap-0.5">
                    <h1 className="text-2xl font-bold text-white">{partiDuCorp.titre}</h1>
                    <p className="text-sm text-white">{partiDuCorp.description}</p>
                </div>
            
        </div>
    )}
        </>
        
    );
};

export default DateContainer;