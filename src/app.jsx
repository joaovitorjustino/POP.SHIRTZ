import Footer from "./components/footer"
import MenuBar from "./components/top-menu-bar"
import LandingPage from "./pages/landing-page"
import ShoppingPage from "./pages/shopping-page"

function App() {
  return (
    <>
      <MenuBar />
      {/*<LandingPage/>*/}
      <ShoppingPage />
      <Footer />
    </>
  )
}

export default App
