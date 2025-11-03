import { Header, Footer, Productos, Slider } from "./components/index"

export const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Slider/>
                <Productos/>
            </main>
            <Footer/>
        </>
    )
}