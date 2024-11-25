import { Routes, Route, useLocation } from "react-router-dom"
import LandingPage from "./pages/landingPage"
import ShoppingPage from "./pages/shoppingPage"
import Cart from "./pages/cartPage"
import ProductPage from "./pages/productPage"
import { useLayoutEffect } from "react"


export default function RoutesPopShirtz() {
    const location = useLocation()

    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, [location.pathname]);

    
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/shopping" element={<ShoppingPage />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
    )
}