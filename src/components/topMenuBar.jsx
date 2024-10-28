import { Link } from "react-router-dom";
import MenuButton from "./buttonMenu";
import InputMenu from "./inputMenu";
import Title from "./title";
import cart from "../assets/cart.svg"

export default function MenuBar() {
    return (
        <nav className="sticky top-0 bg-white z-30">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-5">
                <Link to={'/'}>
                    <Title />
                </Link>
                <Link to={'/shopping'}>
                    <MenuButton>Masculino</MenuButton>
                </Link>
                <Link to={'/shopping'}>
                    <MenuButton>Feminino</MenuButton>
                </Link>
                <Link to={'/shopping'}>
                    <MenuButton>Acessorios</MenuButton>
                </Link>
                <InputMenu />
                <Link to={'/carrinho'}>
                    <button><img src={cart} /></button>
                </Link>
            </div>
        </nav>
    )
}