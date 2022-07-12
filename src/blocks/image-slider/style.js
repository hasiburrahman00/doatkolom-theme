export default function Style({wrapper}){
    return `
         ${wrapper} .image-slider {
            max-height: 630px;
         }

        ${wrapper} .bottom-image-wrapper .slick-slide.slick-center .overlay{
           background-color: transparent;
        }

        ${wrapper} .slick-prev-btn {
           position: absolute;
           top: 58px;
           left: -17px;
        }

        ${wrapper} .slick-next-btn {
           position: absolute;
           top: 58px;
           right: -17px;
        }
    `
}
