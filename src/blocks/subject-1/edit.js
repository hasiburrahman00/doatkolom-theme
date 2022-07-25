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

    let current = 0

    const gridSpan = (index,span)=>{
        current = index
        if(span > 1){
            current=current+span
        }
        if(current > 5){
            current=1;
        }
        return `${current} / span ${span}`;
    }

	return (
        <div className="max-w-screen-xl lg:px-0 px-5 mx-auto py-20">
            <div className="subject-box grid gap-4 lg:grid-cols-5 md:grid-cols-3 grid-cols-1">
                {
                    attributes.subjects?.map((item,index)=>(
                        <div key={index} style={{gridColumn:gridSpan(index+1,item.box_span)}} className="border border-solid border-gray-300 rounded-lg text-center py-12 px-5">
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


