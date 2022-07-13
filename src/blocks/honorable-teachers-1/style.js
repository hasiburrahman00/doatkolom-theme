export default function Style({wrapper}){
    return `

        @media (min-width: 1196px) {
            ${wrapper} .slider-dots .slick-dots {
                padding-left: 0px;
                list-style-type: none;
                display: flex;
                align-items: center;
            }
    
            ${wrapper} .slider-dots .slick-dots li {
                display: inline-block;
                width: 15px;
                height: 15px;
                background-color: #E5EBEC;
                border-radius: 50%;
                margin-right: 5px;
            }
    
            ${wrapper} .slider-dots .slick-dots li button {
                color: transparent;
                width: 15px;
                height: 15px;
                line-height: 26px;
                background-color: #003646;
                border: none;
                border-radius: 50%;
                opacity: 0;
                transition: .4s;
            }
    
            ${wrapper} .slider-dots .slick-dots li.slick-active button {
                opacity: 1;
            }
    
            ${wrapper} .teachers{
                margin-left: -16px;
            }
    
            ${wrapper} .testimonial {
                top: -18px;
            }
    
            ${wrapper} .testimonial-slides {
                position: static;
            }
    
            ${wrapper} .testimonial-slides .slick-list.draggable {
                height: 100%;
                overflow: unset!important;
                position: absolute;
                top: 0;
                width: 100%;
            }
    
            ${wrapper} .testimonial-slides .slick-slide {
                border-radius: 50%;
                cursor: pointer;
                position: absolute;
                top: 0;
            }
    
            ${wrapper} .testimonial-slides .slick-slide img {
                display: inline-block;
            }
    
            ${wrapper} .testimonial-slides .slick-slide:first-child {
                right: 87px;
                top: 257px;
                width: 140px !important;
                height: 140px;
                border-radius: 50%;
            }
    
            ${wrapper} .testimonial-slides .slick-slide:first-child:before {
                content: "";
                border: 2px solid #003646;
                border-radius: 50%;
                opacity: 0;
                pointer-events: none;
                position: absolute;
                transform: translate(-82px,-12px);
                width: 160px;
                height: 160px;
                transition: all ease .2s
            }
    
            ${wrapper} .testimonial-slides .slick-slide.slick-current:first-child:before {
                opacity: 1;
            }
    
            ${wrapper} .testimonial-slides .slick-slide:nth-child(2) {
                right: 105px;
                top: 13px;
                width: 140px !important;
                height: 140px;
                border-radius: 50%;
            }
    
            ${wrapper} .testimonial-slides .slick-slide:nth-child(2):before {
                content: "";
                border: 2px solid #003646;
                border-radius: 50%;
                opacity: 0;
                pointer-events: none;
                position: absolute;
                transform: translate(-82px,-12px);
                width: 160px;
                height: 160px;
                transition: all ease .2s
            }
    
            ${wrapper} .testimonial-slides .slick-slide.slick-current:nth-child(2):before {
                opacity: 1;
            }
    
            ${wrapper} .testimonial-slides .slick-slide:nth-child(3) {
                left: 59px;
                top: 153px;
                width: 220px !important;
                height: 220px;
                border-radius: 50%;
            }
    
            ${wrapper} .testimonial-slides .slick-slide:nth-child(3):before {
                content: "";
                border: 2px solid #003646;
                border-radius: 50%;
                opacity: 0;
                pointer-events: none;
                position: absolute;
                transform: translate(-127px,-18px);
                width: 250px;
                height: 250px;
                transition: all ease .2s
            }
    
            ${wrapper} .testimonial-slides .slick-slide.slick-current:nth-child(3):before {
                opacity: 1;
            }
        }

        @media (max-width: 1195px){

            ${wrapper} .slider-dots .slick-dots {
                padding-left: 0px;
                list-style-type: none;
                display: flex;
                align-items: center;
            }
    
            ${wrapper} .slider-dots .slick-dots li {
                display: inline-block;
                width: 15px;
                height: 15px;
                background-color: #E5EBEC;
                border-radius: 50%;
                margin-right: 5px;
            }
    
            ${wrapper} .slider-dots .slick-dots li button {
                color: transparent;
                width: 15px;
                height: 15px;
                line-height: 26px;
                background-color: #003646;
                border: none;
                border-radius: 50%;
                opacity: 0;
                transition: .4s;
            }
    
            ${wrapper} .slider-dots .slick-dots li.slick-active button {
                opacity: 1;
            }
    
            ${wrapper} .teachers{
                margin-left: -16px;
            }
    
            ${wrapper} .testimonial {
                top: -18px;
            }
    
            ${wrapper} .testimonial-slides {
                position: static;
            }
    
            ${wrapper} .testimonial-slides .slick-list.draggable {
                height: 100%;
                overflow: unset!important;
                position: absolute;
                top: 0;
                width: 100%;
            }
    
            ${wrapper} .testimonial-slides .slick-slide {
                border-radius: 50%;
                cursor: pointer;
                position: absolute;
                top: 0;
            }
    
            ${wrapper} .testimonial-slides .slick-slide img {
                display: inline-block;
            }

            ${wrapper} .testimonial-slides .slick-slide:first-child {
                right: 35px;
                top: 257px;
                width: 140px !important;
                height: 140px;
                border-radius: 50%;
            }

            ${wrapper} .testimonial-slides .slick-slide:first-child:before {
                content: "";
                border: 2px solid #003646;
                border-radius: 50%;
                opacity: 0;
                pointer-events: none;
                position: absolute;
                transform: translate(-82px,-12px);
                width: 160px;
                height: 160px;
                transition: all ease .2s
            }
    
            ${wrapper} .testimonial-slides .slick-slide.slick-current:first-child:before {
                opacity: 1;
            }
    
            ${wrapper} .testimonial-slides .slick-slide:nth-child(2) {
                right: 105px;
                top: 13px;
                width: 140px !important;
                height: 140px;
                border-radius: 50%;
            }
    
            ${wrapper} .testimonial-slides .slick-slide:nth-child(2):before {
                content: "";
                border: 2px solid #003646;
                border-radius: 50%;
                opacity: 0;
                pointer-events: none;
                position: absolute;
                transform: translate(-82px,-12px);
                width: 160px;
                height: 160px;
                transition: all ease .2s
            }
    
            ${wrapper} .testimonial-slides .slick-slide.slick-current:nth-child(2):before {
                opacity: 1;
            }
    
            ${wrapper} .testimonial-slides .slick-slide:nth-child(3) {
                left: 59px;
                top: 153px;
                width: 220px !important;
                height: 220px;
                border-radius: 50%;
            }
    
            ${wrapper} .testimonial-slides .slick-slide:nth-child(3):before {
                content: "";
                border: 2px solid #003646;
                border-radius: 50%;
                opacity: 0;
                pointer-events: none;
                position: absolute;
                transform: translate(-127px,-18px);
                width: 250px;
                height: 250px;
                transition: all ease .2s
            }
    
            ${wrapper} .testimonial-slides .slick-slide.slick-current:nth-child(3):before {
                opacity: 1;
            }

        }
    `
}
