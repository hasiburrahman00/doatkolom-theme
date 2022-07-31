export default function Edit({ attributes, setAttributes}) {

      wp.element.useEffect(()=>{
        if( !attributes.post_card ) {
          setAttributes({
              post_card:[
                {
                  image: doatkolom_object.blocks + 'post-card-1/img/teacher1.webp',
                  names: "Mohammad Rafiquzzaman",
                  position: "Public Administration, University of Dhaka",
                  description: "The school was established on April 19, 1959 on a small scale by the initiative of some personalities. The school was established on 19 April 1959 on a small scale by the initiative of some personalities",
                  post_btn: {
                    text: "Read More",
                    url: "#",
                    visible: true
                  }
                },

                {
                  image: doatkolom_object.blocks + 'post-card-1/img/teacher2.webp',
                  names: "Samia Rahman",
                  position: "Urdu Studies and Literature",
                  description: "The school was established on April 19, 1959 on a small scale by the initiative of some personalities. The school was established on 19 April 1959 on a small scale by the initiative of some personalities",
                  post_btn: {
                    text: "Read More",
                    url: "#",
                    visible: true
                  }
                },
              ]
          })
        }
      },[])

	return (
		    <div className="max-w-screen-xl lg:px-8 px-5 mx-auto py-12 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                  attributes.post_card?.map((item,index)=>(
                      <div key={index} className="mb-4">
                          <div className="max-h-[350px] overflow-hidden">
                              {
                                  item.post_btn.visible ?
                                  <a href="#">
                                      <picture>
                                          <img width="500" height="350" className="w-full h-full object-cover rounded-lg" src={item.image} alt="teacher-image"/>
                                      </picture>
                                  </a> :
                                  <picture>
                                      <img width="500" height="350" className="w-full h-full object-cover rounded-lg" src={item.image} alt="teacher-image"/>
                                  </picture>
                              }
                          </div>
                          <h3 className="m-0 mt-5 font-primary text-primary font-weight_tertiary text-2xl">{item.names}</h3>
                          <h4 className="m-0 mt-2 font-secondary text-black font-weight_primary text-lg">{item.position}</h4>
                          <p className="m-0 mt-4 font-secondary text-paragraph font-weight_primary text-lg">{item.description}</p>
                          {
                              item.post_btn.visible && 
                              <a className="inline-block mt-6 font-secondary font-weight_primary primary-shadow text-base no-underline bg-primary py-2 px-5 rounded-md text-white hover:text-white hover:bg-primary_dark transition ease-linear duration-150" href="#">{item.post_btn.text}</a>
                          }
                      </div>
                  ))
                }
            </div>
        </div>
	  );
}