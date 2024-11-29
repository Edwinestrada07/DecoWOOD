import { useState } from 'react'
import Contact from '../components/contact'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import InstagramButton from '../components/instagramButton'

const Lavadero = () => {
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
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-tertiary lg:w-1/3 lg:mb-0 mb-4">MUEBLES LAVADERO</h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-lg">Facilitando la vida cotidiana con nuestros prácticos y duraderos muebles de lavadero, diseñados para hacer que la tarea del lavado sea más eficiente y placentera.</p>
                    </div>
               
                    <div className="bg-gray-700 p-5 rounded-2xl shadow-xl">
                        <div className="grid grid-cols-6 gap-5">
                            {Array.from({ length: 2 }).map((_, idx) => (
                            <div
                                key={idx}
                                className={`relative ${
                                idx % 1 === 0 ? "col-span-2 row-span-2" : ""
                                } rounded-3xl overflow-hidden cursor-pointer`}
                                onClick={() => handleImageClick(`./img/lavaderos/lavadero${idx + 1}.jpeg`)}
                            >
                                <img
                                src={`./img/lavaderos/lavadero${idx + 1}.jpeg`}
                                alt={`lavadero ${idx + 1}`}
                                className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
                                />
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                <InstagramButton />
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
