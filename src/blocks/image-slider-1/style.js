export default function Style({wrapper}){
    return `
         ${wrapper} .image-slider {
            max-height: 630px;
         }

         ${wrapper} .left-arrow{
            top: 50% !important;
            left: 4px !important;
            transform: translateY(-50%);
         }

         ${wrapper} .right-arrow{
            top: 50% !important;
            right: 4px !important;
            transform: translateY(-50%);
         }

        ${wrapper} .bottom-image-wrapper .slick-slide.slick-center img{
           opacity: 1;
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
