export default function MenuButton(props){
    return(
        <a href="*" className="text-base font-medium hover:text-purple-700">
            {props.children}
        </a>
    )
}