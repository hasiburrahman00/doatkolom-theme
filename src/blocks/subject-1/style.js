export default function Style({attributes,wrapper}){
    return `
        // @media (max-width:776px) {
        //     ${wrapper} .subject-box {
        //         grid-template-columns: repeat(auto-fit,minmax(200px,1fr))
        //     }
        // }

        // @media (max-width:992px) {
        //     ${wrapper} .subject-box {
        //         grid-template-columns: repeat(${attributes.box_width},minmax(200px,1fr))
        //     }
        // }
    `
}