const NavBar = () => {
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
                        <a className="inline-block py-1 text-white hover:text-accent cursor-point mr-5" href="#productCard"><strong>Productos</strong></a>    
                        <a className="inline-block py-1 text-white hover:text-accent cursor-point mr-5"><strong>Contacto</strong></a>    
                    </nav>
                    
                    <button className="inline-flex items-center bg-accent border-0 py-3 px-5  hover:bg-secondary rounded text-primary mt-5 md:mt-0"><strong>Cotiza</strong>
                        <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M3 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        <a
                            href="https://api.whatsapp.com/send?phone=573154397144&text=Hola%2C%20estoy%20interesad%40%20en%20cotizar%20un%20producto"
                            class="btn btn-xl btn-light"
                            target="_blank"
                            onclick="redirigirWhatsApp()"
                          >
                            <img
                            src="./img/whatsapp.png"
                            alt="WhatsApp"
                            width="50"
                            height="50"
                          />
                        </a>
                    </button>
                </div>
            </header>
        </>
    )
}

export default NavBar
