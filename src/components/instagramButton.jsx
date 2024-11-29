const instagramButton = () => {
    return (
        <div className="text-center">

            <button className="inline-flex items-center bg-accent border-0 py-1 px-2  hover:bg-secondary rounded text-white mb-9">
                <strong className="text-xl">Visita nuestras redes</strong>
                <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M3 12h14M12 5l7 7-7 7"></path>
                </svg>
                <a
                    href="https://www.instagram.com/deco.woodcol/?hl=es-la"
                    className="btn btn-xl btn-light"
                    target="_blank"
                >
                    <img
                        src="./img/instagram.png"
                        alt="Instagram"
                        width="50"
                        height="50"
                    />
                </a>
            </button>
        </div>
    )
}

export default instagramButton;