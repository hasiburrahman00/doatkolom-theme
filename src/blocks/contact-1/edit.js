export default function Edit({ attributes, setAttributes}) {

    wp.element.useEffect(()=>{
        
    },[])

	return (
		<div className="max-w-screen-xl lg:px-8 px-5 mx-auto py-12 md:py-10">
          <div className="grid grid-cols-2 gap-5">
            <form>
                <div className="form-field">
                    <label For="name">{attributes.name}</label>
                    <input type="text" />
                </div>
            </form>
          </div>
        </div>
	);
}