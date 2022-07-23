export default function Style({wrapper}){
    return `
        ${wrapper} .testimonials-slides .slick-slide img {
            display: inline-block;
        }

        ${wrapper} .main-teachers-slider .slick-prev-btn path,
        ${wrapper} .main-teachers-slider .slick-next-btn path {
            transition: all linear .1s;
        }

        ${wrapper} .main-teachers-slider .slick-prev-btn:hover path,
        ${wrapper} .main-teachers-slider .slick-next-btn:hover path {
            fill: #fff;
        }

        ${wrapper} .slider-dots .slick-dots {
            padding-left: 0px;
            list-style-type: none;
            display: flex;
            align-items: center;
            justify-content: center
        }

        ${wrapper} .slider-dots .slick-dots li {
            display: inline-block;
            width: 15px;
            height: 15px;
            background-color: #FDF4F4;
            border-radius: 50%;
            margin-right: 5px;
        }

        ${wrapper} .slider-dots .slick-dots li button {
            color: transparent;
            width: 15px;
            height: 15px;
            line-height: 26px;
            background-color: #DB231E;
            border: none;
            border-radius: 50%;
            opacity: 0;
            transition: .4s;
        }

        ${wrapper} .slider-dots .slick-dots li.slick-active button {
            opacity: 1;
        }
    `
}
