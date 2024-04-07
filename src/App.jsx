import Bloques from "./components/productCard"
import Header from "./components/header"
import Layout from "./components/layout"
import NavBar from "./components/navbar"

function App() {
    return (
        <>
            <div className="bg-primary min-h-screen">
                <NavBar />
                <Header />
                    <Layout>

                    </Layout>
                <Bloques />
            </div>
        </>
    )
}

export default App
