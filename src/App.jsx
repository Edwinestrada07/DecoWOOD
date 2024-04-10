import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import Layout from './components/layout';
import ProductCard from './components/productCard';
import Contact from './components/contact';
import Footer from './components/footer';
import Cocina from './pages/cocina'; // Importa la página Cocina
import Home from './pages/home'; // Importa la página Home
// import NotFound from './pages/notFound'; // Importa la página NotFound

function App() {
    return (
        <Router>
            <div className="bg-primary min-h-screen">
                <NavBar />
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/cocina" component={Cocina} />
                        {/* Agrega más rutas según sea necesario */}
                        {/* <Route component={NotFound} /> */}
                    </Switch>
                </Layout>
                <ProductCard />
                <Contact />
                <Footer />
            </div>
        </Router>
    );
}

export default App;




