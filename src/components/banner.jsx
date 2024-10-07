import banner from "../assets/banner.svg"
import starSpark from "../assets/star-spark.svg"

export default function Banner() {
    return (
        <div className="flex justify-center object-cover">
            <img className="w-screen" src={banner} />
        </div>
    )
}