import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-gray-700 text-primary body-font">
            <div className="container px-5 mx-auto flex items-center">
                <a className="flex title-font font-medium items-center md:justify-start justify-center"></a>

                <p className="text-gray-400 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© Sitio creado por Edwin Estrada —
                <p className="leading-relaxed font-semibold text-white">Deco<span className="text-tertiary">WOOD</span></p>
                </p>

                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href="#" className="ml-3 text-gray-500">
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="ml-3 text-gray-500">
                        <FaGithub className="w-5 h-5" />
                    </a>
                    <a href="#" className="ml-3 text-gray-500">
                        <FaInstagram className="w-5 h-5" />
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer