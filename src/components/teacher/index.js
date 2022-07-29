export default function Teacher(props) {
    return (
        <div className={`grid gap-5 ${props.className}`}>
            {props.children}
        </div>
    )
}

Teacher.Item = function(props) {
    const image = "https://media.istockphoto.com/photos/math-teacher-in-the-classroom-picture-id1358852926?b=1&k=20&m=1358852926&s=170667a&w=0&h=wtapRGwANxErfnJF0N-tjrixaBdDYiLNHlz_8MFdWQc=";
    return(
        <div className="teacher-card">
            <picture>
                <img className="w-full lazyload" data-src={image} alt="teacher image"/>
            </picture>
            { props.name && <h3 className="text-primary font-primary font-weight_primary text-2xl m-0 mt-4">{props.name}</h3> }
            { props.designation && <h4 className="text-primary font-secondary font-weight_primary text-sm mt-1">{props.designation}</h4> }
            { props.description && <p className="text-primary font-secondary font-weight_primary text-lg mt-4 pr-0 lg:pr-48">{props.description}</p> }
        </div>
    )
}

