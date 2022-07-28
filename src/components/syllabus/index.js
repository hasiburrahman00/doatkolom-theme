export default function AllSyllabus (props) {
    return (
        <div className={`grid gap-3 ${props.className}`}>
            {props.children}
        </div>
    )
}

AllSyllabus.Item = function (props) {
    return (
        <div className="bg-gray-100 border border-gray-500 border-solid py-7 px-5 hover:bg-primary-blue-100 hover:border-secondary transition duration-100 ease-linear">
            <div className="flex items-center mb-3">
                {props.icons && props.icons}
                <div className="ml-5">
                    <span className="text-primary font-secondary font-weight_secondary text-base">Uploaded on</span>
                    <h5 className="text-primary font-secondary font-weight_secondary text-lg">3th June 2022</h5>
                </div>
            </div>
            {props.topic && <h2 className="text-primary font-secondary font-weight_primary text-xl">{props.topic}</h2>}
            <p className="text-primary font-secondary font-weight_secondary text-base mt-3">The school was established on a small scale on 19th</p>
            <button className="flex items-center mt-6 py-3 px-7 rounded-md border-none bg-primary text-white cursor-pointer">
                {props.download && props.download}
                {props.title && <span className="ml-2 font-secondary font-medium text-base">{props.title}</span>}
            </button>
        </div>
    ) 
}