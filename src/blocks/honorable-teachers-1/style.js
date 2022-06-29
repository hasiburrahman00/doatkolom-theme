export default function Style({attributes, wrapper, sheet}){
    return `
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
            top: -80px;
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

        ${wrapper} .testimonial-slides .slick-slide:before{
            content: "";
            border: 2px solid #003646;
            border-radius: 50%;
            display: block;
            height: 250px;
            opacity: 0;
            pointer-events: none;
            position: absolute;
            transform: translate(-21px,-17px);
            transition: .3s;
            width: 250px;
            tranistion: all linear .3s;
        }

        ${wrapper} .testimonial-slides .slick-slide.slick-current:before {
            opacity: 1;
        }

        ${wrapper} .testimonial-slides .slick-slide.slick-current img{
            width: 220px;
            height: 220px;
           
        }

        ${wrapper} .testimonial-slides .slick-slide:first-child {
            right: 20px;
            top: 257px;
        }

        ${wrapper} .testimonial-slides .slick-slide:nth-child(2) {
            right: 42px;
            top: 13px;
        }

        ${wrapper} .testimonial-slides .slick-slide:nth-child(3) {
            left: 67px;
            top: 188px;
        }
    `
}
