import Helper from "../../utils/Helper";

export default function Edit({ attributes, setAttributes }) {
	return (
        <div className="alignment max-w-screen-xl mx-auto px-5">
            <h2 
                className="m-0 font-primary text-3xl sm:text-5xl font-weight_primary text-primary mb-3 header"
                dangerouslySetInnerHTML={{__html: Helper.stringHighlight(attributes.heading)}}
            />
            <p className="m-0 font-secondary text-lg text-primary font-weight_primary para-width">{attributes.description}</p>
        </div>
	);
}