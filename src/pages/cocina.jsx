import { useState } from 'react'
import Contact from '../components/contact'
import Footer from '../components/footer'
import NavBar from '../components/navbar'

const Cocina = () => {
    const [expandedImage, setExpandedImage] = useState(null)

    const handleImageClick = (imageUrl) => {
        setExpandedImage(imageUrl)
    }

    return (
        <>
            <NavBar />
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex w-full mb-20 flex-wrap">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-tertiary lg:w-1/3 lg:mb-0 mb-4">COCINAS</h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Transformando espacios en hogares encantadores con nuestras exquisitas cocinas, donde el diseño se fusiona con la funcionalidad para crear experiencias culinarias inolvidables.</p>
                    </div>

                    <div className="bg-gray-700 p-10 rounded-2xl shadow-xl">
                        <div className="grid grid-cols-6 gap-5">
                            {Array.from({ length: 21 }).map((_, idx) => (
                            <div
                                key={idx}
                                className={`relative ${
                                idx % 1 === 0 ? "col-span-2 row-span-2" : ""
                                } rounded-xl overflow-hidden cursor-pointer bg-white shadow-xl`}
                                onClick={() => handleImageClick(`./img/cocinas/cocina${idx + 1}.jpeg`)}
                            >
                                <img
                                src={`./img/cocinas/cocina${idx + 1}.jpeg`}
                                alt={`closet ${idx + 1}`}
                                className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
                                />
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="text-center">
                    <button className="inline-flex items-center bg-accent border-0 py-3 px-5 hover:bg-secondary rounded text-white mb-9">
                        <strong>Visita nuestras redes</strong>
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
            </section>
            
            {expandedImage && (
                <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-80 flex justify-center items-center" onClick={() => setExpandedImage(null)}>
                    <img src={expandedImage} alt="expanded" className="max-w-full max-h-full" />
                </div>
            )}
            <Contact />
            <Footer />
        </>
    )
}

export default Cocina
