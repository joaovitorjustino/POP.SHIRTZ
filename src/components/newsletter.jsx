import NewsletterInput from "./inputNewslatter";

export default function Newsletter() {
    return (
        <div className="grid mx-auto py-6 lg:py-8 gap-4 lg:grid-cols-2 flex-col max-w-6xl rounded-lg bg-black">
            <div className="text-white antialiased text-6xl font-bold flex justify-center items-center">
                <ul>
                    <li>
                        STAY POP
                    </li>
                    <li>
                        STAY COOL
                    </li>
                </ul>
            </div>
            <div className="flex justify-around items-center">
                <NewsletterInput />
            </div>
        </div>
    )
}