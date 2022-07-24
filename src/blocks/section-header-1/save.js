import Helper from "../../utils/Helper";

export default function Save({ attributes }) {
	return (
        <div className="alignment max-w-screen-xl mx-auto px-5">
            <h2 
                className="m-0 font-primary text-3xl sm:text-5xl font-normal text-primary mb-3 header"
                dangerouslySetInnerHTML={{__html: Helper.stringHighlight(attributes.heading)}}
            />
            <p className="m-0 font-secondary text-lg text-primary font-normal para-width">{attributes.description}</p>
        </div>
	);
}