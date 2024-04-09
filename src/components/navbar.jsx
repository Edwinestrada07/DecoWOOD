import { useState, useEffect } from 'react'

function NavBar () {
    const [menuVisible, setMenuVisible] = useState(false)

    useEffect(() => {
        function handleClickOutside(event) {
            // Verifica si el clic fue fuera del menú de productos
            if (!event.target.closest('.menu-container')) {
                // Si el menú está visible, lo oculta
                if (menuVisible) {
                    setMenuVisible(false)
                }
            }
        }

        // Agrega un event listener para el clic fuera del menú
        document.addEventListener('click', handleClickOutside)
        
        // Remueve el event listener cuando el componente se desmonta
        return () => {
            document.removeEventListener('click', handleClickOutside)
        };
    }, [menuVisible])

    const toggleMenu = () => {
        // Cambia el estado de visibilidad del menú
        setMenuVisible(!menuVisible)
    }
    
    return (
        <>
            <header className=" bg-gray-900 ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <img src="./img/logo.png" className="h-10 w-10" alt="" />
                        <span className="ml-3 text-xl">DecoWOOD</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="inline-block py-1 text-white hover:text-accent cursor-point mr-5" href="#navbar"><strong>Inicio</strong></a>
                        <div className="relative inline-block text-left menu-container">
                            <div>
                                <span className="rounded-md shadow-sm">
                                    <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-transparent font-medium text-white focus:outline-none focus:ring-2 hover:text-accent" onClick={toggleMenu}>
                                        <strong>Productos</strong>
                                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10 15a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 15z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </span>
                            </div>
                            {/* Opciones del selector de productos */}
                            <div className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ${menuVisible ? 'block' : 'hidden'}`}>
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-accent" role="menuitem">Cocinas</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-accent" role="menuitem">Vestiers</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-accent" role="menuitem">Closets</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-accent" role="menuitem">Muebles de lavamanos</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-accent" role="menuitem">Muebles de lavadero</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-accent" role="menuitem">Comedores</a>
                                    {/* Agrega más opciones según las categorías de tus productos */}
                                </div>
                            </div>
                        </div>
                        <a className="inline-block py-1 text-white hover:text-accent cursor-point mr-5" href="#contact"><strong>Contacto</strong></a>    
                    </nav>
                    
                    <button className="inline-flex items-center bg-accent border-0 py-3 px-5 hover:bg-secondary rounded text-white mt-5 md:mt-0"><strong>Cotiza</strong>
                        <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M3 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        <a
                            href="https://api.whatsapp.com/send?phone=573154397144&text=Hola%2C%20estoy%20interesad%40%20en%20cotizar%20un%20producto"
                            className="btn btn-xl btn-light"
                            target="_blank"
                          >
                            <img
                            src="./img/whatsapp.png"
                            alt="WhatsApp"
                            width="40"
                            height="40"
                          />
                        </a>
                    </button>
                </div>
            </header>
        </>
    )
}

export default NavBar
