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
    `
}
