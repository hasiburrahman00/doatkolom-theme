export default function Style({attributes, wrapper}){
    return  `
        ${wrapper} .box-slider .slick-slide img {
            display: inline-block;
        }

        ${wrapper} .box-slider .slick-slide {
            margin: 0 12px;
        }

        ${wrapper} .main-box-slider {
            margin-top: ${attributes.box_position}px;
        }

        ${wrapper} .slick-track {
            display: flex !important;
        }
          
        ${wrapper} .slick-slide {
            height: auto !important;
        }

        ${wrapper} .slick-slide > div {
            height: 100%;
        }

        @media (min-width: 1350px) {
            ${wrapper} .arrows {
                display: block;
            }
        }

    `
}
