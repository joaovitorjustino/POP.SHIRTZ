import banner from "../assets/banner.svg"
import starSpark from "../assets/star-spark.svg"

export default function Banner() {
    return (
        <div className="relativa justify-center object-cover">
            <img className="w-screen" src={banner} />

            <div className="absolute inset-0 grid grid-cols-2 py-48 pl-6">
                <div className="items-center justify-center">
                    <h2 className="text-black text-8xl font-extrabold text-wrap mb-4">FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
                    <h3 className="text-gray-600 text-lg text-wrap">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</h3>  
                    <img className="mx-auto mt-12" src={starSpark}/>
                </div>
            </div>
        </div>
    )
}