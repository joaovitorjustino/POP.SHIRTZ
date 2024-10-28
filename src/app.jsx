import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/footer"
import MenuBar from "./components/topMenuBar"
import RoutesPopShirtz from "./routes"

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuBar />
        <RoutesPopShirtz />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App