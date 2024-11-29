import { FaGithub, FaLinkedin, FaPortrait } from "react-icons/fa"

const Footer = () => {
    return (

        <footer className="bg-gray-700 text-primary body-font">
            <div className="container px-5 mx-auto flex items-center text-lg">
                <a className="flex title-font font-medium items-center md:justify-start justify-center"></a>

                <p className="text-gray-400 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© Sitio creado por Edwin Estrada —
                    <p className="leading-relaxed font-semibold text-white">Deco<span className="text-tertiary">WOOD</span></p>
                </p>

                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href="https://www.linkedin.com/in/edwinestradam/" className="ml-3 text-gray-500" target="_blank">
                        <FaLinkedin className="w-7 h-7" />
                    </a>
                    <a href="https://github.com/Edwinestrada07" className="ml-3 text-gray-500" target="_blank">
                        <FaGithub className="w-7 h-7" />
                    </a>
                    <a href="https://portafolioedwinestrada.netlify.app/" className="ml-3 text-gray-500" target="_blank">
                        <FaPortrait className="w-7 h-7" />
                    </a>
                </span>  
            </div>
        </footer>
    )
}

export default Footer