import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import ProductCard from '../components/productCard'
import Contact from '../components/contact'
import Footer from '../components/footer'

function Layout() {
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <Outlet />
                <div className="bg-primary flex-1 px-20 pt-20 text-center">
                    <p className="text-gray-300 mb-5 text-lg"><strong className="text-xl hover:text-accent">Diseño y funcionalidad unidos en cada pieza</strong> 
                        <br></br>Nos enorgullece ofrecer muebles que no solo son visualmente atractivos, sino también funcionales y diseñados 
                        para mejorar la vida diaria de nuestros clientes.
                    </p>
                </div>
            <ProductCard />
            <Contact />
            <Footer />
        </div>
    )
}

export default Layout


