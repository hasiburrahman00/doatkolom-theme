export default function Style({attributes, wrapper, sheet}){
    return (
        <style id={sheet}>
            {`  
                ${wrapper} .school-image {
                    width: 560px;
                    min-width: 560px;
                }

                ${wrapper} .achivment-icons {
                    width: 50px !important;
                    height: 50px !important;
                }

                ${wrapper} .achivement-wrapper {
                    border-right: 1px solid #d1d5db;
                }
                ${wrapper} .achivement-wrapper:nth-child(2) {
                    padding-left: 28px;
                }
                ${wrapper} .achivement-wrapper:nth-child(3) {
                    padding-left: 28px;
                    border: none;
                }
            `}
        </style>
    )
}
