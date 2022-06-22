const { useBlockProps } = wp.blockEditor
import { BlockWrapper, BlockWrapperContent, BlockWrapperStyle } from '../block-wrapper/index.js';


import Style from './style.js';

export default function Save({ attributes }) {
	return (
        <BlockWrapper attributes={attributes} props={useBlockProps.save()}>

            <BlockWrapperStyle>
                <Style/>
            </BlockWrapperStyle>

            <BlockWrapperContent>

            <div className="max-w-screen-xl lg:px-0 px-5 mx-auto py-32">
                    <div className="lg:flex lg:space-x-24 lg:items-start">

                        {/* About image */}

                        <div className="school-image flex-auto">
                            <div className="relative z-0 before:content-[''] before:absolute before:left-0 before:top-8 before:rounded-xl before:w-full before:h-full before:bg-gray-200">
                                <picture>
                                    <img width= "560" height= "560" className="lazyload relative z-10 w-full h-auto left-8 object-cover" data-src={attributes.school_image} alt="school-image"/>
                                </picture>
                            </div>
                        </div>

                        {/* About-content */}
                        
                        <div className="lg:flex-auto lg:mt-0 md:mt-16 mt-20">
                            <h2 className="font-primary text-3xl md:text-5xl text-primary font-normal mt-0 mb-10">{attributes.heading}</h2>

                            <div>
                                {attributes.paragraphs.map((item,index)=>(
                                    <div key={index}>
                                        <h3 className="font-primary m-0  font-normal text-primary  lg:text-2xl md:text-2xl leading-9">{item.title}</h3>
                                        <p className="font-secondary font-normal text-primary text-sm lg:text-lg m-0 mt-3 mb-7 ">{item.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="md:flex md:flex-wrap">
                                {
                                    attributes.achivments.map((item,index)=>(
                                        <div className="achivement-wrapper" key={index}>
                                            <picture>
                                                <img width= "50" height= "50" className="lazyload achivment-icons" data-src={item.icon} alt="achivements" />
                                            </picture>
                                            <h3 className="m-0 mt-3 font-primary font-normal text-primary text-2xl">{item.number}</h3>
                                            <p className="m-0 mt-1 font-secondary font-normal text-primary text-xl leading-4">{item.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </BlockWrapperContent>
            
        </BlockWrapper>
	);
}