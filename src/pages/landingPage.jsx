import Banner from "../components/banner";
import TitleBody from "../components/titleBody";
import bottomBanner from "../assets/bottom-banner.svg"
import SuggestionItens from "../components/suggestionItens";

export default function LandingPage() {
    return (
        <>
            <Banner />
            <TitleBody size={'text-4xl'} position={'justify-center'}>TRANDING</TitleBody>
            <SuggestionItens />
            <hr class="w-3/4 h-px mx-auto bg-purple-400 border-0" />
            <TitleBody size={'text-4xl'} position={'justify-center'}>NEWEST RAGS</TitleBody>
            <SuggestionItens />
            <div>
                <img className="flex justify-center items-center mx-auto mb-8" src={bottomBanner} />
            </div>
        </>
    )
}