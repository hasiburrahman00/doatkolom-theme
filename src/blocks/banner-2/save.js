export default function Save({ attributes }) {
	return (
        <div className="banner-wrapper bg-cover bg-no-repeat">
            <div className="py-24 lg:py-52 px-5">
                <div className="max-w-screen-xl mx-auto">
                    <div className="max-w-[620px]">
                        <h1 className="m-0 mb-6 md:mb-9 text-4xl md:text-6xl font-primary font-weight_tertiary text-white leading-[60px] md:leading-[74px]"
                            dangerouslySetInnerHTML={{__html: attributes.institution_name}}
                        />
                        <p className="m-0 text-base md:text-lg font-secondary font-weight_primary text-white mt-4">{attributes.description}</p>
                        { attributes.banner_btn.visible && 
                            <a className="transition duration-200 ease-linear no-underline font-weight_primary text-white py-3 px-8 bg-primary hover:bg-primary_dark font-secondary inline-block mt-7 rounded-md hover:text-white primary-shadow text-base" 
                            href={attributes.banner_btn.url}>
                                {attributes.banner_btn.text}</a>
                        }
                    </div>
                </div>
            </div>
        </div>
	);
}