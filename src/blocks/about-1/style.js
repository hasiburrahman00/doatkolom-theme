export default function Style({attributes, wrapper}){
    return  `  
        @media (min-width: 600px){
            ${wrapper} .school-image {
                width: 560px;
                min-width: 560px;
            }

            ${wrapper} .school-image {
                width: 560px;
                min-width: 560px;
            }
            
            ${wrapper} .achivement-wrapper:first-child {
                position: relative;
            }

            ${wrapper} .achivement-wrapper:first-child:after {
                content: "";
                position: absolute;
                right: 22px;
                top: 0;
                width: 1px;
                height: 100%;
                background-color: #d1d5db;
            }

            ${wrapper} .achivement-wrapper:last-child {
                padding-left: 27px;
            }
            
            ${wrapper} .achivement-wrapper {
                width: 208px;
            }

        }

        @media (max-width: 599px){
            ${wrapper} .school-image img {
                width: calc(100% - 32px);
                min-width: 280px;
                border-radius: 10px;
            }

            ${wrapper} .achivement-wrapper:not(:first-child,:last-child) {
                padding: 28px 0px;
                border-width: 1px 0px 1px 0px;
                border-style: solid;
                border-color: #d1d5db;
                margin: -1px 0px;
            }

            ${wrapper} .achivement-wrapper:first-child {
                padding-bottom: 28px;
            }

            ${wrapper} .achivement-wrapper:last-child {
                padding-top: 28px;
            }
            
        }
    
        ${wrapper} .school-image img {
            border-radius: 10px;
        }
        
        ${wrapper} .achivment-icons {
            width: 50px !important;
            height: 50px !important;
        }
        
    `
}


// ${wrapper} .achivement-wrapper:not(:first-child,:last-child) {
//     padding: 0 27px;
//     border-width: 0 1px 0 1px;
//     border-style: solid;
//     border-color: #d1d5db;
//     margin: 0 -1px;
// }

// ${wrapper} .achivement-wrapper:first-child {
//     padding-right: 27px;
//     position: relative;
// }
