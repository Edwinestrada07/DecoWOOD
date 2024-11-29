import InstagramButton from '../components/instagramButton'

const ProductCard = () => {

    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-col">
                        <div className="h-1 bg-gray-800 rounded overflow-hidden">
                            <div className="w-24 h-full bg-tertiary"></div>
                        </div>

                        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Transformando espacios en hogares encantadores</h1>
                            <p className="sm:w-3/5 leading-relaxed text-lg sm:pl-10 pl-0">En Deco<span className="text-tertiary">WOOD</span>, nos dedicamos a ofrecer muebles de alta calidad que convierten cualquier espacio en un verdadero hogar.</p>
                        </div>
                        
                        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Diseño y funcionalidad unidos en cada pieza</h1>
                            <p className="sm:w-3/5 leading-relaxed text-lg sm:pl-10 pl-0">En nuestra empresa, trabajamos para hacer realidad los sueños de nuestros clientes, proporcionando muebles que reflejen su estilo de vida y les brinden momentos inolvidables en casa.</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:-m-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:transform hover:translate-y-1 transition-transform duration-300">
                            <div className="rounded-xl h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="./img/mueble15.jpeg" />
                            </div>
                            {/* <h2 className="text-xl font-medium title-font text-white mt-5">Shooting Stars</h2> */}
                            <p className="text-lg text-center mt-2">Transformando hogares con estilo y funcionalidad. Descubre nuestras exclusivas 
                                colecciones de muebles y soluciones de diseño, personalidad y comodidad.</p>                           
                        </div>

                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:transform hover:translate-y-1 transition-transform duration-300">
                            <div className="rounded-xl h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="./img/cocina10.jpeg" />
                            </div>
                            {/* <h2 className="text-xl font-medium title-font text-white mt-5">The Catalyzer</h2> */}
                            <p className="text-lg text-center mt-2">Innovación, calidad y belleza se unen en cada uno de nuestros productos. 
                                Desde cocinas hasta muebles de lavandería, nuestra empresa ofrece soluciones integrales para el hogar.
                            </p>
                        </div>

                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:transform hover:translate-y-1 transition-transform duration-300">
                            <div className="rounded-xl h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="./img/mueble4.jpeg" />
                            </div>
                            {/* <h2 className="text-xl font-medium title-font text-white mt-5">The 400 Blows</h2> */}
                            <p className="text-lg text-center mt-2">Creando ambientes excepcionales para vivir y disfrutar. 
                                Con una amplia gama de muebles y accesorios para cada rincón del hogar, nuestra empresa se destaca
                                en diseños innovadores.
                            </p>
                        </div>
                    </div>
                </div>
                <InstagramButton />
            </section>
        </>
    )
}

export default ProductCard
