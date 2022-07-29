export default function PageWrapper(props) {
    return (
        <div className="max-w-screen-lg mx-auto">
            {props.children}
        </div>
    )
}