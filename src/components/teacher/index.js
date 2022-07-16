export default function Teacher(props) {
    return (
        <div className={`grid gap-5 ${props.className}`}>
            {props.children}
        </div>
    )
}

Teacher.Item = function() {
    const image = "https://media.istockphoto.com/photos/math-teacher-in-the-classroom-picture-id1358852926?b=1&k=20&m=1358852926&s=170667a&w=0&h=wtapRGwANxErfnJF0N-tjrixaBdDYiLNHlz_8MFdWQc=";
    return(
        <div className="teacher-card">
            <picture>
                <img className="w-full lazyload" data-src={image} alt="teacher image"/>
            </picture>
        </div>
    )
}