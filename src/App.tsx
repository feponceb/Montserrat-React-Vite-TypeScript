import { Header, Footer, Productos, Slider } from "./components"
import { productosDestacados } from "./data/productosDestacados"

export const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Slider/>
                <Productos productos={productosDestacados} />               
            </main>
            <Footer/>
        </>
    )
}