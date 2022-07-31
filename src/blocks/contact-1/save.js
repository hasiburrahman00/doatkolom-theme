export default function Save({ attributes }) {
	return (
        <div className="max-w-screen-xl lg:px-8 px-5 mx-auto py-12 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <form>
                <div className="form-field">
                    <label className="mb-2 inline-block font-primary text-title text-lg font-weight_primary" For="name">{attributes.name}</label>
                    <input className="w-[100%_!important] bg-light_gray_!important border-none focus:border-secondary py-[8px_!important] px-[20px_!important] font-primary text-black font-weight_primary text-base" id="name" type="text" />
                </div>
                <div className="form-field mt-7">
                    <label className="mb-2 inline-block font-primary text-title text-lg font-weight_primary" For="gmail">{attributes.email}</label>
                    <input className="w-[100%_!important] bg-light_gray_!important border-none focus:border-secondary py-[8px_!important] px-[20px_!important] font-primary text-black font-weight_primary text-base" id="gmail" type="email" placeholder="mdathikfoisal@gmail.com" />
                </div>
                <div className="form-field mt-7">
                    <label className="mb-2 inline-block font-primary text-title text-lg font-weight_primary" For="number">{attributes.number}</label>
                    <input className="w-[100%_!important] bg-light_gray_!important border-none focus:border-secondary py-[8px_!important] px-[20px_!important] font-primary text-black font-weight_primary text-base" id="number" type="number" />
                </div>
                <div className="form-field mt-7">
                    <label className="mb-2 inline-block font-primary text-title text-lg font-weight_primary" For="location">{attributes.location}</label>
                    <input className="w-[100%_!important] bg-light_gray_!important border-none focus:border-secondary py-[8px_!important] px-[20px_!important] font-primary text-black font-weight_primary text-base" id="location" type="text" />
                </div>
                <div className="form-field mt-7">
                    <label className="mb-2 inline-block font-primary text-title text-lg font-weight_primary" For="message">{attributes.message}</label>
                    <textarea rows="6" className="w-[100%_!important] bg-light_gray border-none focus:border-secondary py-[8px_!important] px-[20px_!important] font-primary text-black font-weight_primary text-base" id="message" type="text" />
                </div>
                <div className="mt-5">
                    <button type="submit" className="block w-full py-3 border-none rounded-md bg-secondary text-white font-secondary font-weight_primary text-lg cursor-pointer">{attributes.submit}</button>
                </div>
            </form>
            <div className="rounded-md p-10 bg-light_gray">
                <h3 className="m-0 text-title font-primary font-weight_secondary text-2xl mb-6">{attributes.quick_response.title}</h3>
                <a href={`tel:${attributes.quick_response.number}`} className="text-black font-secondary font-weight_primary text-lg no-underline hover:text-black block focus:shadow-none">{attributes.quick_response.number}</a>
                <a href="#" className="text-black font-secondary font-weight_primary text-lg no-underline hover:text-black block mt-1 focus:shadow-none">{attributes.quick_response.web_site}</a>
                <div className="py-10 relative before:content-[''] before:absolute before:top-[22px] before:left-0 before:w-full before:h-[1px] before:bg-gray">
                    <h3 className="m-0 text-title font-primary font-weight_secondary text-2xl mb-6">{attributes.key_title}</h3>
                    {
                        attributes.Key_contacts?.map((item,index)=>(
                            <div key={index} className="flex mb-5 items-start sm:flex-row flex-col">
                                <div className="max-w-20 max-h-20 overflow-hidden rounded-md">
                                    <picture>
                                        <img width="80" height="80" className="w-full object-cover lazyload" data-src={item.image} alt="teacher-images" />
                                    </picture>
                                </div>
                                <div className="max-w-4/5 mt-4 sm:ml-5 sm:mt-0">
                                    <h4 className="m-0 font-primary text-title text-lg font-weight_tertiary">{item.name}</h4>
                                    <a href={`tel:${item.phone}`} className="text-black font-secondary font-weight_primary text-base no-underline hover:text-black block focus:shadow-none">{item.phone}</a>
                                    <a href="#" className="text-black font-secondary font-weight_primary text-base no-underline hover:text-black block focus:shadow-none">{item.email}</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
          </div>
        </div>
	);
}