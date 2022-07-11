const { TextControl } = wp.components
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {

    const imageChangeHandler = (url, index) => {
        attributes.images[index] = url;
        setAttributes({
            images: [...attributes.images]
        })
    }

    return (
        <div className="space-y-5">
            
            <ImagePicker
                label="Select Background Image"
                value={attributes.images[0]}
                onChange={ url => imageChangeHandler(url, 0) }
            />
            
            <ImagePicker
                label="Select Background Image"
                value={attributes.images[1]}
                onChange={url => imageChangeHandler(url, 1)}
            />
            
            <ImagePicker
                label="Select Background Image"
                value={attributes.images[2]}
                onChange={url => imageChangeHandler(url, 2)}
            />
            
            <ImagePicker
                label="Select Background Image"
                value={attributes.images[3]}
                onChange={url => imageChangeHandler(url, 3)}
            />
            
            <ImagePicker
                label="Select Background Image"
                value={attributes.images[4]}
                onChange={url => imageChangeHandler(url, 4)}
            />

            <TextControl
                className="w-full"
                label="Gallery Page URL"
                value={attributes.gallery_page_url}
                onChange={ gallery_page_url => setAttributes({gallery_page_url}) }
            />
        </div>
    )
}