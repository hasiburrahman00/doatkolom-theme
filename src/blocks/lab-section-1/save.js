export default function Save({ attributes }) {
	return (
        <div className="max-w-screen-xl lg:px-0 px-5 mx-auto py-20">
            <span className="hidden lg:block doatkolom-indicator shadow-[0px_24px_34px_rgba(0,0,0,0.06)_!important] bg-paste-blue-100 absolute z-0"></span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    attributes.card.map((item,index)=>(
                        <div key={index} className="px-[30px] py-12 mb-4 lg:mb-0 doatkolom-card">
                            <h3 className="font-primary text-primary font-weight_secondary text-3xl relative before:content-[''] before:absolute before:top-[-5px] before:left-[-16px] before:w-1 before:h-11 before:bg-paste-blue-400 m-0 mb-5 md:mb-7">{item.title}</h3>
                            <div className="flex justify-between flex-col md:flex-row">
                                {
                                    item.firstnumber.visible && 
                                    <div className="box-border pr-5 pb-4 md:pb-0 w-full md:w-1/2 relative md:after:content-[''] md:after:absolute md:after:top-0 md:after:right-0 md:after:w-px md:after:h-14 md:after:bg-slate-300">
                                    <h4 className="m-0 text-2xl font-primary text-primary font-weight_secondary">{item.firstnumber.number}</h4>
                                    <p className="m-0 font-secondary text-primary font-weight_secondary text-lg">{item.firstnumber.text}</p>
                                    </div>
                                }
                                {
                                    item.lastnumber.visible &&
                                    <div className="box-border md:px-5 w-full md:w-1/2">
                                    <h4 className="m-0 text-2xl font-primary text-primary font-weight_secondary">{item.lastnumber.number}</h4>
                                    <p className="m-0 font-secondary text-primary font-weight_secondary text-lg">{item.lastnumber.text}</p>
                                    </div> 
                                }
                            </div>
                            <p className="m-0 mt-5 text-justify text-primary font-secondary font-weight_secondary text-lg">{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
	);
}