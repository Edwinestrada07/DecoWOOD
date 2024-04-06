const NavBar = () => {
    return (
        <>
            <header className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">DecoWOOD</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="block inline-block py-1 text-white hover:text-accent cursor-point mr-4">Inicio</a>
                        <a className="block inline-block py-1 text-white hover:text-accent cursor-point mr-4">Galería</a>
                        <select className="block inline-block py-1 text-white hover:text-accent cursor-point mr-4">
                            <a>Productos</a>
                            <a>Detalles</a>
                        </select>    
                        <a className="block inline-block py-1 text-white hover:text-accent cursor-point mr-4">Contacto</a>    
                    </nav>
                    <button className="inline-flex items-center bg-accent border-0 py-3 px-5  hover:bg-secondary rounded text-primary mt-5 md:mt-0">Cotiza
                        <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M3 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    )
}

export default NavBar
