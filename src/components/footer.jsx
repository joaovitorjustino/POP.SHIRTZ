import Title from "./title";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import Newsletter from "./newsletter";

export default function Footer() {
    return (
        <footer>
            <div>
                <Newsletter />
            </div>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="grid gap-4 lg:grid-cols-2">
                    <div className="mb-6 md:mb-0">
                        <Title/>
                        <p className="mb-4 mt-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                            atque ea quis molestias. Fugiat pariatur maxime quis culpa
                            corporis vitae repudiandae aliquam voluptatem veniam, est atque
                            cumque eum delectus sint!
                        </p>
                        <div className="mb-6 flex justify-center space-x-2">
                            <a href="*">
                                <img className="size-6" src={facebook} alt="facebook" />
                            </a>
                            <a href="*">
                                <img className="size-6" href="*" src={twitter} alt="twitter" />
                            </a>
                            <a href="*">
                                <img className="size-6" href="*" src={instagram} alt="instagram" />
                            </a>
                            <a href="*">
                                <img className="size-6" href="*" src={github} alt="github" />
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 sm:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Resources</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="*" className="hover:text-purple-700">Flowbite</a>
                                </li>
                                <li className="mb-4">
                                    <a href="*" className="hover:text-purple-700">Tailwind CSS</a>
                                </li>
                                <li className="mb-4">
                                    <a href="*" className="hover:text-purple-700">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Follow us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="*" className="hover:text-purple-700 ">Github</a>
                                </li>
                                <li className="mb-4">
                                    <a href="*" className="hover:text-purple-700">Tailwind CSS</a>
                                </li>
                                <li className="mb-4">
                                    <a href="*" className="hover:text-purple-700">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:text-purple-700">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="*" className="hover:text-purple-700">Tailwind CSS</a>
                                </li>
                                <li className="mb-4">
                                    <a href="*" className="hover:text-purple-700">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:text-purple-700">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="*" className="hover:text-purple-700">Tailwind CSS</a>
                                </li>
                                <li className="mb-4">
                                    <a href="*" className="hover:text-purple-700">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}