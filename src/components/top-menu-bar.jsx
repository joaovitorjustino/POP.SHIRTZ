import MenuButton from "./button-menu";
import InputMenu from "./input-menu";
import Title from "./title";

export default function MenuBar() {
    return (
        <nav className="sticky top-0 bg-white z-30">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-5">
                <Title/>
                <MenuButton>Masculino</MenuButton>
                <MenuButton>Feminino</MenuButton>
                <MenuButton>Acessorios</MenuButton>
                <InputMenu/>
                </div>
        </nav>
    )
}