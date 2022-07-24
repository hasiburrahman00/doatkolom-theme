import { Button } from '@mui/material'
export default function ImageUpload (props) {
  
  const value = props.value || doatkolom_object.img + 'institution-logo.webp'
  const label = props.label || "Image Picker";

  const frame = wp.media({
    title: 'Select Image',
    button: {
        text: 'Use This Image',
    },
    multiple: false,
  })

  frame.on( 'select', function() {
      const attachment = frame.state().get('selection').first().toJSON();
      if( props.onChange && typeof props.onChange === 'function' ) {
        props.onChange(attachment)
      }
  });

  const buttonStyle = {
    boxShadow: 'none',
    width: '9rem',
    fontSize: '14px',
    backgroundColor: '#DFE9F1',
    color: '#0E1F36',
    textTransform: 'capitalize',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#1879C7',
      boxShadow: 'none'
    }
  }

  return (
    <div>
        <label className="text-[#2C2C2C] text-base block mb-2">{label}</label>
        <div className='w-36 h-36 mb-2 border border-solid border-[#DFE9F1] bg-[#FAFAFA] overflow-hidden rounded-lg'>
            <picture>
              <img width="140" height="140" className='w-full h-full object-contain' src={value}/>
            </picture>
        </div>
        <Button onClick={() => frame.open() } sx={buttonStyle} variant="contained">Select Image</Button>
    </div>
  )
}
