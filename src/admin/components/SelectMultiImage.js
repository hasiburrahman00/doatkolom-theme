import UploadIcon from "../icons/upload"
export default function SelectMultiImage(props) {

    const frame = wp.media({
        title: 'Select Gallery Images',
        button: {
            text: 'Use the images',
        },
        library: {
            type: [ 'image' ]
        },
        multiple: 'add'
      })
    
      frame.on( 'select', function() {

          const selection = frame.state().get('selection');
          const data = selection.reduce((total, current) => {
                current = current.toJSON();
                const id  = [...total.id, current.id];
                const url = [...total.url, current.url];
                return {...total, id, url}
          }, {id: [], url: []})

          if( props.onSelect && typeof props.onSelect === 'function' ) {
            props.onSelect(data);
          }

      });

    return (
        <div onClick={() => frame.open() } className={`${props.disabled ? 'opacity-70 select-none bg-[red]/10 pointer-events-none' : ''} flex items-center w-full h-full justify-center flex-col space-y-2`}>
            <UploadIcon className="w-10"/>
            <span className="text-base">Select Image</span>
        </div>
    )
}