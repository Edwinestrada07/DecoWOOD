import Bloques from "./components/bloques"
import Header from "./components/header"
import Layout from "./components/layout"
import NavBar from "./components/navbar"

function App() {
    return (
        <>
            <div className="bg-primary min-h-screen">
                <NavBar></NavBar>
                <Header></Header>
                    <Layout>
                        <p></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat adipisci ratione dolorum modi aspernatur incidunt delectus commodi! Non atque, aliquid ipsa perspiciatis, nemo eveniet quae a doloremque sunt corporis consequuntur?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat adipisci ratione dolorum modi aspernatur incidunt delectus commodi! Non atque, aliquid ipsa perspiciatis, nemo eveniet quae a doloremque sunt corporis consequuntur?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat adipisci ratione dolorum modi aspernatur incidunt delectus commodi! Non atque, aliquid ipsa perspiciatis, nemo eveniet quae a doloremque sunt corporis consequuntur?</p>
                    </Layout>
                <Bloques />
            </div>
        </>
    )
}

export default App
