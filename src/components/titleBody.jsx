export default function TitleBody({size, position , children}) {
    return(
        <h1 className={`${size} ${position} flex text-purple-600 font-extrabold py-16`}>{children}</h1>
    )
}