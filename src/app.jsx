import { BrowserRouter } from "react-router-dom"
import Footer from "./components/footer"
import MenuBar from "./components/topMenuBar"
import RoutesPopShirtz from "./routes"
import CarrinhoProvider from "./context/carrinhoProvider"

function App() {
  return (
    <>
      <CarrinhoProvider>
        <BrowserRouter>
          <MenuBar />
          <RoutesPopShirtz />
          <Footer />
        </BrowserRouter>
      </CarrinhoProvider>
    </>
  )
}

export default App