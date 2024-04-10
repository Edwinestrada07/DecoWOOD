import { useState } from 'react';
import Contact from "../components/contact"
import Footer from "../components/footer"
import NavBar from "../components/navbar"

const Lavadero = () => {
    const [expandedImage, setExpandedImage] = useState(null);

    const handleImageClick = (imageUrl) => {
        setExpandedImage(imageUrl);
    }

    return ( 
        <>
            <NavBar />
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex w-full mb-20 flex-wrap">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably heard of them man bun deep jianbing selfies heirloom.</p>
                    </div>
                    LAVADERO
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/500x300" onClick={() => handleImageClick("https://dummyimage.com/500x300")} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/501x301" onClick={() => handleImageClick("https://dummyimage.com/501x301")} />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block rounded-lg" src="https://dummyimage.com/600x360" onClick={() => handleImageClick("https://dummyimage.com/600x360")} />
                            </div>
                        </div>

                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block rounded-lg" src="https://dummyimage.com/601x361" onClick={() => handleImageClick("https://dummyimage.com/601x361")} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/502x302" onClick={() => handleImageClick("https://dummyimage.com/502x302")} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/503x303" onClick={() => handleImageClick("https://dummyimage.com/503x303")} />
                            </div>
                        </div>

                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/500x300" onClick={() => handleImageClick("https://dummyimage.com/500x300")} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/501x301" onClick={() => handleImageClick("https://dummyimage.com/501x301")} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/500x300" onClick={() => handleImageClick("https://dummyimage.com/500x300")} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/501x301" onClick={() => handleImageClick("https://dummyimage.com/501x301")} />
                            </div>
                        </div>

                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block rounded-lg" src="https://dummyimage.com/601x361" onClick={() => handleImageClick("https://dummyimage.com/601x361")} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/502x302" onClick={() => handleImageClick("https://dummyimage.com/502x302")} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/503x303" onClick={() => handleImageClick("https://dummyimage.com/503x303")} />
                            </div>
                        </div>

                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/500x300" onClick={() => handleImageClick("https://dummyimage.com/500x300")} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/501x301" onClick={() => handleImageClick("https://dummyimage.com/501x301")} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/500x300" onClick={() => handleImageClick("https://dummyimage.com/500x300")} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/501x301" onClick={() => handleImageClick("https://dummyimage.com/501x301")} />
                            </div>
                        </div>

                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/500x300" onClick={() => handleImageClick("https://dummyimage.com/500x300")} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/501x301" onClick={() => handleImageClick("https://dummyimage.com/501x301")} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/502x302" onClick={() => handleImageClick("https://dummyimage.com/502x302")} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/503x303" onClick={() => handleImageClick("https://dummyimage.com/503x303")} />
                            </div>
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

export default Lavadero
