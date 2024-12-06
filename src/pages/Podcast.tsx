

const Podcast: React.FC = () => {
    const podcasts = [
        {
            id: 1,
            title: 'Podcast 1',
            videoUrl: ""
        },
        {
            id: 2,
            title: 'Podcast 2',
            videoUrl: ""
        },
        // Ajoutez plus de podcasts ici
    ];

    return (
        <div>
            <h1>Podcasts Vidéo</h1>
            {podcasts.map((podcast) => (
                <div key={podcast.id}>
                    <h2>{podcast.title}</h2>
                    <video width="600" controls src={podcast.videoUrl}>
                        Votre navigateur ne supporte pas la balise vidéo.
                    </video>
                </div>
            ))}
        </div>
    );
};

export default Podcast;