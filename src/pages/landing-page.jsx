import Banner from "../components/banner";
import ItemBox from "../components/item-box";
import TitleBody from "../components/title-body";
import bottomBanner from "../assets/bottom-banner.svg"

export default function LandingPage() {
    return (
        <>
            <Banner />
            <TitleBody>TRANDING</TitleBody>
            <div className="grid gap-8 sm:gap-2 grid-cols-4 p-3 mb-10 px-[10%]">
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
            </div>
            <hr class="w-3/4 h-px mx-auto bg-purple-400 border-0" />
            <TitleBody>NEWEST RAGS</TitleBody>
            <div className="grid gap-8 sm:gap-2 grid-cols-4 p-3 mb-10 px-[10%]">
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
            </div>
            <div>
                <img className="flex justify-center items-center mx-auto mb-8" src={bottomBanner}/>
            </div>
        </>
    )
}