export default function Style({attributes, wrapper}){
    return  `  
        ${wrapper} .banner-wrapper {
            background-image: url(${attributes.background});
        }
    `
}