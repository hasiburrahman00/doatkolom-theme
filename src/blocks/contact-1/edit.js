export default function Edit({ attributes, setAttributes}) {

    wp.element.useEffect(()=>{
        
    },[])

	return (
		<div className="max-w-screen-xl lg:px-8 px-5 mx-auto py-12 md:py-10">
          <div className="grid grid-cols-2 gap-6">
            <form>
                <div className="form-field">
                    <label className="mb-2 inline-block" For="name">{attributes.name}</label>
                    <input className="max-w-[100%_!important] py-[8px_!important] px-[20px_!important]" id="name" type="text" />
                </div>
            </form>
          </div>
        </div>
	);
}