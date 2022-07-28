import { Megaphone, ArrowRight } from "./icons";
export default function Save({ attributes }) {
	return (
        <div className="banner-wrapper bg-cover bg-no-repeat">
            <div className="bg-gradient-to-b from-primary-80 md:via-primary-60 to-[#ffffff_!important] pt-24 md:pt-40 pb-8 px-5">
                <div className="max-w-screen-xl mx-auto">
                    <h1 className="font-primary text-white mt-0 mb-6 text-center font-weight_secondary text-4xl sm:text-5xl lg:text-6xl">{attributes.institution_name}</h1>
                    <p className="max-w-3xl text-white text-center font-secondary text-base sm:text-lg mx-auto m-0 leading-7">{attributes.description}</p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-8 mt-8">
                        {   
                            // primary button 
                            attributes.primary_btn.visible && 
                            <a className="bg-primary transition ease-linear duration-200 font-secondary text-lg rounded-full py-3 px-9 text-white no-underline hover:text-primary hover:bg-white" href={attributes.primary_btn.url}>
                                {attributes.primary_btn.text}
                            </a>
                        }
                        {
                            // secondary button
                            attributes.secondary_btn.visible && 
                            <a className="bg-white transition ease-linear duration-200 font-secondary text-lg rounded-full py-3 px-9 text-primary no-underline hover:text-white hover:bg-primary" href={attributes.secondary_btn.url}>
                                {attributes.secondary_btn.text}
                            </a>
                        }
                    </div>

                    <div className="flex flex-col md:flex-row items-baseline justify-between mt-20">

                        <div className="md:w-1/2 border-l-2 border-y-0 border-r-0 border-solid border-primary pl-8 pt-10">
                            <h2 className="font-primary text-primary text-3xl m-0 mb-5 font-weight_secondary">{attributes.history_title}</h2>
                            <p className="font-secondary text-primary text-base sm:text-lg m-0">
                                {attributes.history_description}
                                {attributes.history_read_more_btn.visible && 
                                    <a className="inline-block text-secondary ml-1 no-underline hover:underline" href={attributes.history_read_more_btn.url}>
                                        {attributes.history_read_more_btn.text}
                                    </a>
                                } 
                            </p>
                        </div>

                        <div className="flex items-center space-x-4 md:self-end mt-10 md:mt-0">
                            <div>
                                <Megaphone/>
                            </div>
                            <a className="inline-block text-primary no-underline group cursor-pointer" href={attributes.notice_url}>
                                <h2 className="m-0 font-primary font-weight_secondary text-2xl sm:text-4xl inline-flex items-center space-x-2 group-hover:text-primary group-hover:underline">
                                    {attributes.notice_title}
                                    <ArrowRight/>
                                </h2>
                                <p  className="m-0 font-secondary text-base">{attributes.notice_description}</p>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
	);
}