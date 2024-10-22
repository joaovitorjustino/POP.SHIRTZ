import Footer from "./components/footer"
import MenuBar from "./components/top-menu-bar"
import Cart from "./pages/cart-page"
import LandingPage from "./pages/landing-page"
import ShoppingPage from "./pages/shopping-page"

function App() {
  return (
    <>
      <MenuBar />
      {/*<LandingPage/>*/}
      {/*<ShoppingPage />*/}
      <Cart />
      <Footer />
    </>
  )
}

export default App
