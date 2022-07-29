export default function Style({attributes, wrapper}){
    return  `
        ${wrapper} .box-slider .slick-list {
            padding-bottom: 80px!important;
        }

        ${wrapper} .box-slider .slick-slide img {
            display: inline-block;
        }

        ${wrapper} .box-slider .slick-slide {
            margin: 0 12px;
        }

        ${wrapper} .main-box-slider .slick-prev-btn path,
        ${wrapper} .main-box-slider .slick-next-btn path {
            transition: all linear .1s;
        }

        ${wrapper} .main-box-slider .slick-prev-btn:hover path,
        ${wrapper} .main-box-slider .slick-next-btn:hover path {
            fill: #fff;
        }

        ${wrapper} .box-slider .slick-slide {
            transition: all linear .3s;
        }

        ${wrapper} .box-slider .slick-slide.slick-center {
            filter: drop-shadow(0px 30px 30px var(--doatkolom_primary_shadow_color));
        }

        ${wrapper} .box-slider .slick-slide.slick-center .center-text{
            color: #DB231E;
        }

        ${wrapper} .main-box-slider {
            margin-top: ${attributes.box_position}px;
        }

        @media (min-width: 1356px) {
            ${wrapper} .arrows {
                display: block;
            }
        }
    `
}
