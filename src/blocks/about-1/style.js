export default function Style({wrapper}){
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