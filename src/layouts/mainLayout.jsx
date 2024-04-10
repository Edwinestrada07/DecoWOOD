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
                <div className="bg-primary flex-1 px-20 pt-20">
                    <p className="text-gray-400 mb-5"><strong>Diseño y funcionalidad unidos en cada pieza:</strong> Nos enorgullece ofrecer muebles 
                        que no solo son visualmente atractivos, sino también funcionales y diseñados para mejorar la vida diaria de nuestros 
                        clientes.
                    </p>
                </div>
            <ProductCard />
            <Contact />
            <Footer />
        </div>
    )
}

export default Layout


