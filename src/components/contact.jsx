const Contact = () => {
    return (
        <section className="bg-primary text-gray-600 body-font relative" id="contacto">
            <div className="container py-5 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 bg-gray-300 ml-5 mr-5 p-4 flex items-end">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d836.1393713066037!2d-75.6829202944816!3d4.526913928551698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38f563dbb4cd9b%3A0xb6a1b32928339bf5!2sDecoWood!5e0!3m2!1ses-419!2sco!4v1712667713766!5m2!1ses-419!2sco" width="100%" height="300" style={{ maxWidth: '600px' }}></iframe>
                </div>
                <div className="bg-primary relative flex py-6 rounded shadow-md w-full">
                    <div className="px-5">
                        <h2 className="title-font font-semibold text-white tracking-widest">DIRECCIÓN:</h2>
                        <p className="leading-relaxed font-semibold text-white">Deco<span className="text-tertiary">WOOD</span></p>
                        <p className="text-white">Cra. 19 #35-19 local 6, Armenia, Quindío</p>
                    </div>
                    <div className="px-5">
                        <h2 className="title-font font-semibold text-tertiary tracking-widest">CORREO ELECTRÓNICO</h2>
                        <p className="text-white">decowoodcol@outlook.com</p>
                        <h2 className="title-font font-semibold text-tertiary tracking-widest">TELÉFONO</h2>
                        <p className="text-white">315-439-7144 / 315-601-0042</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact



