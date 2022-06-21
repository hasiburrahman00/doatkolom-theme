const { useBlockProps } = wp.blockEditor
import { BlockWrapper, BlockWrapperContent, BlockWrapperStyle } from '../block-wrapper/index.js';
import { ArrowRight } from './icons.js';


import Style from './style.js';

export default function Save({ attributes }) {
	return (
        <BlockWrapper attributes={attributes} props={useBlockProps.save()}>

            <BlockWrapperStyle>
                <Style/>
            </BlockWrapperStyle>

            <BlockWrapperContent>

                <div className="banner-wrapper bg-cover bg-no-repeat">
                    <div className="bg-white/90 py-16 md:py-24">
                        <div className="max-w-screen-xl lg:px-0 px-5 mx-auto">

                            <div className="header text-center">
                                <h2 className="font-primary m-0 mb-3 font-normal text-primary text-3xl md:text-5xl leading-9">{attributes.heading}</h2>
                                <p className="sub-header font-secondary font-normal text-primary leading-6 text-lg lg:text-lg mb-7 ">{attributes.sub_heading}</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
                                {
                                    attributes.priority_box.map((item,index)=>(
                                        <div key={index} className="main-prioritybox mb-3 bg-white p-5 shadow-lg last: ml-0">
                                            <span className="font-secondary font-bold text-slate-200 text-5xl mb-5 inline-block">{index+1 > 9 ? index+1 : `0${index+1}`}</span>

                                            <h3 className="font-secondary font-bold text-primary text-2xl sm:text-3xl m-0 mb-0 md:leading-10">{item.title}</h3>
                                            <p className="font-secondary m-0 mt-5 font-normal text-primary text-lg leading-7">{item.description}</p>

                                            <div className="mt-7">
                                                <a href="#" className="flex items-center text-primary group no-underline">
                                                    <span className="arrows w-12 h-12 flex items-center justify-center bg-slate-100 rounded-full mr-3 group-hover:bg-primary group-hover:text-white ease-linear duration-200 transition">
                                                        <ArrowRight/>
                                                    </span>
                                                    <span className="group-hover:text-primary group-hover:underline">{item.button.text}</span>
                                                </a>
                                            </div>
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