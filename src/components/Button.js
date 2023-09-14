import "./buttonstyle.css"
export default function Button ({butt ="click", children}) {
    return (
        <button className ={"butstyle"}>
            {butt}
            {children}
        </button>
    )
}