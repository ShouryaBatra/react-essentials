

export default function TabButton(props) {

     function handleClick() {
        console.log('Hello there')
     }

    return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
    )
}