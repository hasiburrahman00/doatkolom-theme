export default function Edit({ attributes, setAttributes}) {
    
    wp.element.useEffect(()=>{
        if( !attributes.subjects ) {
            setAttributes({subjects: [
                {
                    image: doatkolom_object.blocks + 'subject-1/img/subject1.webp',
                    subject: "Chemistry 1st Paper",
                    box_span: 1
                },

                {
                    image: doatkolom_object.blocks + 'subject-1/img/subject2.webp',
                    subject: "Chemistry 2nd Paper",
                    box_span: 1
                },

                {
                    image: doatkolom_object.blocks + 'subject-1/img/subject3.webp',
                    subject: "Biology 1st Paper",
                    box_span: 1
                },

                {
                    image: doatkolom_object.blocks + 'subject-1/img/subject4.webp',
                    subject: "Biology 2nd Paper",
                    box_span: 1
                },

                {
                    image: doatkolom_object.blocks + 'subject-1/img/subject5.webp',
                    subject: "Physics 1st Paper",
                    box_span: 1
                },

                {
                    image: doatkolom_object.blocks + 'subject-1/img/subject6.webp',
                    subject: "Higher Math 1st Paper",
                     box_span: 1
                },

                {
                    image: doatkolom_object.blocks + 'subject-1/img/subject7.webp',
                    subject: "Higher Math 2nd Paper",
                     box_span: 1
                },

                {
                    image: doatkolom_object.blocks + 'subject-1/img/subject8.webp',
                    subject: "English Grammar",
                     box_span: 1
                },

                {
                    image: doatkolom_object.blocks + 'subject-1/img/subject9.webp',
                    subject: "ICT",
                    box_span: 1
                },

                {
                    image: doatkolom_object.blocks + 'subject-1/img/subject10.webp',
                    subject: "Physics 2nd Paper ",
                    box_span: 1
                }
            ] })
        }
    },[])


    const boxWidthHandler = ( width ) => {
        return `((100% - var(--gap)) / var(--total)) * ${ width > 1 ? `${width} + ${(width - 1) * 20}px` : '1' }` ;
    }

	return (
        <div className="max-w-screen-xl mx-auto py-20">
            <div className="subject-box flex gap-[20px] flex-wrap px-5">
                {
                    attributes.subjects?.map((item,index)=>(
                        <div key={index} style={{ maxWidth : `calc(${boxWidthHandler(item.box_span)})` }} className="border w-full min-w-[200px] border-solid border-gray-300 rounded-lg text-center py-12 px-5">
                            <picture>
                                <img width="55" height="55" src={item.image} className="object-cover" alt="subject-image" />
                            </picture>
                            <p className="font-secondary text-black-90 font-semibold text-lg m-0 mt-4">{item.subject}</p>
                        </div>
                    ))
                }
            </div>
        </div>
	);
}


