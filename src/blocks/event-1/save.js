import { RightArrow } from './icons.js';
export default function Save({ attributes }) {
	return (
        <div className="max-w-screen-xl mx-auto px-5 py-3">
            <div className="grid md:grid-cols-3">
                { attributes.event_list.map((item,index)=>(
                    <div className="border border-solid border-gray-200 py-6 px-3.5" key={index}>
                        <div className="font-secondary text-6xl text-primary font-weight_primary">
                            <span className="block">{item.event_date} </span>
                            <span className="text-lg font-weight_primary m-0 -mt-2 block capitalize pl-1.5">{item.event_month}</span>
                        </div>
                        <a href={item.reademore_link} className="no-underline hover:underline">
                            <h3 className="font-secondary text-xl md:text-3xl text-primary font-weight_primary m-0 my-3.5">{item.event_name}</h3>
                        </a>
                        <p className="font-secondary text-lg text-primary font-weight_primary m-0 mb-9">{item.event_details}</p>
                        <a href={item.reademore_link} className="group inline-flex items-center font-secondary text-lg font-weight_primary text-primary no-underline hover:text-primary hover:underline">
                            <span className="w-12 h-12 rounded-full bg-light_gray inline-flex justify-center items-center mr-4 group-hover:bg-primary group-hover:text-white transition duration-200 ease-linear">
                                <RightArrow/>
                            </span> Read More
                        </a>
                    </div>               
                ))}
            </div>
        </div>
	);
}