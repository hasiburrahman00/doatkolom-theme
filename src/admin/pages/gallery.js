import PageWrapper from "../layouts/page-wrapper";
import Panel from "../layouts/panel";
import SelectMultiImage from "../components/SelectMultiImage";
import PictureOption from "../components/PictureOption";

export default function Gallery() {

    const image = doatkolom_object.img + 'gallery-img.webp'

    return (
        <PageWrapper>
            <Panel>
                <Panel.VideoHeader url="#">Photo Gallery</Panel.VideoHeader>
                <Panel.Body>
                    <div className="grid grid-cols-6 gap-5">
                        <div className="bg-[#eee] hover:bg-[#ddd] cursor-pointer rounded-md flex items-center justify-center border border-solid border-[#ddd]">
                            <SelectMultiImage/>
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