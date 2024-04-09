const ProductCard = () => {
    return (
        <>
            <section class="text-gray-400 bg-gray-900 body-font mt-10" id="productCard">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col">
                        <div class="h-1 bg-gray-800 rounded overflow-hidden">
                            <div class="w-24 h-full bg-tertiary"></div>
                        </div>
                        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 class="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Transformando espacios en hogares encantadores</h1>
                            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">En Deco<span className="text-tertiary">WOOD</span>, nos dedicamos a ofrecer muebles de alta calidad que convierten cualquier espacio en un verdadero hogar.</p>
                        </div>
                        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 class="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Diseño y funcionalidad unidos en cada pieza</h1>
                            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">En nuestra empresa, trabajamos para hacer realidad los sueños de nuestros clientes, proporcionando muebles que reflejen su estilo de vida y les brinden momentos inolvidables en casa.</p>
                        </div>
                    </div>

                    <div class="flex flex-wrap sm:-m-4">
                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-64 overflow-hidden">
                                <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" />
                            </div>
                            <h2 class="text-xl font-medium title-font text-white mt-5">Shooting Stars</h2>
                            <p class="text-base leading-relaxed mt-2">Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>                           
                        </div>

                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-64 overflow-hidden">
                                <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" />
                            </div>
                            <h2 class="text-xl font-medium title-font text-white mt-5">The Catalyzer</h2>
                            <p class="text-base leading-relaxed mt-2">Swag shoindxigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                        </div>

                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-64 overflow-hidden">
                                <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" />
                            </div>
                            <h2 class="text-xl font-medium title-font text-white mt-5">The 400 Blows</h2>
                            <p class="text-base leading-relaxed mt-2">Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button className="inline-flex items-center bg-accent border-0 py-3 px-5 hover:bg-secondary rounded text-primary mb-9">
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
        </>
    )
}

export default ProductCard
