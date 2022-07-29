import Helper from "../../utils/Helper";

export default function Save({ attributes }) {
	return (
        <div className="alignment max-w-screen-xl mx-auto px-5">
            <h2 
                className="m-0 font-primary text-3xl sm:text-5xl font-weight_tertiary text-title mb-3 header"
                dangerouslySetInnerHTML={{__html: Helper.stringHighlight(attributes.heading)}}
            />
            <p className="m-0 font-secondary text-lg text-title_description font-weight_primary para-width">{attributes.description}</p>
        </div>
	);
}