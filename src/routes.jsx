import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/landingPage"
import ShoppingPage from "./pages/shoppingPage"
import Cart from "./pages/cartPage"
import ProductPage from "./pages/productPage"


export default function RoutesPopShirtz() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/shopping" element={<ShoppingPage />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
    )
}