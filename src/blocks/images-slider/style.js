export default function Style({attributes, wrapper, sheet}){
    return `
        ${wrapper} .bottom-image-wrapper .slick-slide.slick-center .overlay{
           background-color: transparent;
        }

        ${wrapper} .slick-prev-btn {
           position: absolute;
           top: 50px;
           left: -17px;
        }

        ${wrapper} .slick-next-btn {
           position: absolute;
           top: 50px;
           right: -17px;
        }
    `
}
