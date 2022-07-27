export default function Save({ attributes }) {
	return (
        <div className="banner-wrapper bg-cover bg-no-repeat">
            <div className="py-24 md:py-52 px-5">
                <div className="max-w-screen-xl mx-auto">
                    <div className="max-w-[620px]">
                        <h1 className="m-0 text-4xl md:text-6xl font-secondary font-bold text-white leading-[60px] md:leading-[74px]">{attributes.institution_name}</h1>
                        <p className="m-0 text-base md:text-lg font-secondary font-normal text-white mt-4">{attributes.description}</p>
                        <a className="no-underline font-bold text-white py-3 px-8 bg-red-500 font-secondary inline-block mt-7 rounded-md hover:text-white text-base" href="#">{attributes.banner_btn.text}</a>
                    </div>
                </div>
            </div>
        </div>
	);
}