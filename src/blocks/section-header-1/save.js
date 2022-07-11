export default function Save({ attributes }) {
	return (
        <div className="alignment max-w-screen-xl mx-auto">
            <h3 className="m-0 font-primary text-3xl sm:text-5xl font-normal text-primary mb-3 header">{attributes.heading}</h3>
            <p className="m-0 font-secondary text-lg text-primary font-normal para-width">{attributes.description}</p>
        </div>
	);
}