export default function Style({wrapper}){
    return `
        ${wrapper} {
            --total: 5;
            --gap: 80px;
        }
        @media (max-width: 575px) {
            ${wrapper} {
                --total: 1;
                --gap: 0px;
            }  
        }

        @media (min-width: 576px) and (max-width: 767px) {
            ${wrapper} {
                --total: 2;
                --gap: 20px;
            }  
        }

        @media (min-width: 768px) and (max-width: 991px) {
            ${wrapper} {
                --total: 3;
                --gap: 40px;
            }  
        }

        @media (min-width: 992px) and (max-width: 1199px) {
            ${wrapper} {
                --total: 4;
                --gap: 60px;
            }  
        }
    `
}