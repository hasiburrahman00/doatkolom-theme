import LinearProgress from '@mui/material/LinearProgress';
import PageWrapper from "../layouts/page-wrapper";
import Panel from "../layouts/panel";
import SelectMultiImage from "../components/SelectMultiImage";
import PictureOption from "../components/PictureOption";
import API from "../api";
import { useState } from 'react';

export default function Gallery() {

    const [ loading, setLoading ] = useState(false);
    const image = doatkolom_object.img + 'gallery-img.webp'

    const imageSelectHandler = ({id, url}) => {
        setLoading(true)
        API.add_gallery({image_ids: id}).then( res => {
            setLoading(false)
            console.log(res)

        })
    }

    return (
        <PageWrapper>
            { loading && <LinearProgress/> }
            <Panel>
                <Panel.VideoHeader url="#">Photo Gallery</Panel.VideoHeader>
                <Panel.Body>
                    <div className="grid grid-cols-6 gap-5">
                        <div className="bg-[#eee] hover:bg-[#ddd] cursor-pointer rounded-md flex items-center justify-center border border-solid border-[#ddd]">
                            <SelectMultiImage disabled={loading} onSelect={imageSelectHandler}/>
                        </div>
                        <picture className="relative">
                            <img className="lazyload w-full rounded-md object-cover border border-solid border-[#ddd]" data-src={image} alt="gallery image"/>
                            <PictureOption/>
                        </picture>
                        <picture className="relative">
                            <img className="lazyload w-full rounded-md object-cover border border-solid border-[#ddd]" data-src={image} alt="gallery image"/>
                            <PictureOption/>
                        </picture>
                        <picture className="relative">
                            <img className="lazyload w-full rounded-md object-cover border border-solid border-[#ddd]" data-src={image} alt="gallery image"/>
                            <PictureOption/>
                        </picture>
                        <picture className="relative">
                            <img className="lazyload w-full rounded-md object-cover border border-solid border-[#ddd]" data-src={image} alt="gallery image"/>
                            <PictureOption/>
                        </picture>
                        <picture className="relative">
                            <img className="lazyload w-full rounded-md object-cover border border-solid border-[#ddd]" data-src={image} alt="gallery image"/>
                            <PictureOption/>
                        </picture>
                        <picture className="relative">
                            <img className="lazyload w-full rounded-md object-cover border border-solid border-[#ddd]" data-src={image} alt="gallery image"/>
                            <PictureOption/>
                        </picture>
                        <picture className="relative">
                            <img className="lazyload w-full rounded-md object-cover border border-solid border-[#ddd]" data-src={image} alt="gallery image"/>
                            <PictureOption/>
                        </picture>
                    </div>
                    <ul className="pagination">
                        <li></li>
                    </ul>
                </Panel.Body>
            </Panel>
        </PageWrapper>
    )
}