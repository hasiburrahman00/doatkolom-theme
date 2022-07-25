export default function Save({ attributes }) {
	return (
        <div className="max-w-screen-xl lg:px-0 px-5 mx-auto py-20">
            <div className="subject-box grid gap-4">
                {
                    attributes.subjects?.map((item,index)=>(
                        <div key={index} className="border border-solid border-gray-300 rounded-lg text-center py-12 px-5">
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