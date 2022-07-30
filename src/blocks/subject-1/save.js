export default function Save({ attributes }) {

    const boxWidthHandler = ( width ) => {
        return `((100% - var(--gap)) / var(--total)) * ${ width > 1 ? `${width} + ${(width - 1) * 20}px` : '1' }` ;
    }
    
	return (
        <div className="max-w-screen-xl mx-auto py-20">
            <div className="subject-box flex gap-[20px] flex-wrap px-5">
                {
                    attributes.subjects?.map((item,index)=>(
                        <div key={index} style={{ maxWidth : `calc(${boxWidthHandler(item.box_span)})` }} className="border w-full min-w-[200px] border-solid border-border rounded-lg text-center py-12 px-5">
                            <picture>
                                <img width="55" height="55" src={item.image} className="object-cover" alt="subject-image" />
                            </picture>
                            <p className="font-primary text-title font-weight_tertiary text-lg m-0 mt-4">{item.subject}</p>
                        </div>
                    ))
                }
            </div>
        </div>
	);
}