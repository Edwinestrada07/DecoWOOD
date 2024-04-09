import React from 'react'

import ProductCard from "./components/productCard"
import Header from "./components/header"
import Layout from "./components/layout"
import NavBar from "./components/navbar"
import Contact from './components/contact'

function App() {
    return (
        <div className="bg-primary min-h-screen">
            <NavBar />
            <Header />
                <Layout>
                    
                </Layout>
            <ProductCard />
            <Contact />
        </div>

    )
}

export default App

