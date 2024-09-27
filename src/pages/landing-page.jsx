import Banner from "../components/banner";
import ItemBox from "../components/item-box";
import TitleBody from "../components/title-body";
import camiseta from "../mocks/camiseta1.svg"

export default function LandingPage() {
    return (
        <>
            <Banner />
            <TitleBody>TRANDING</TitleBody>
            <div className="flex flex-row justify-around px-[10%] mb-16">
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
            </div>
            <hr class="w-3/4 h-px mx-auto bg-purple-400 border-0" />
            <TitleBody>NEWEST RAGS</TitleBody>
            <div className="flex flex-row justify-around px-[10%] mb-16">
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
            </div>
        </>
    )
}