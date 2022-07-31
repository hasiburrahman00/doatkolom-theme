export default function Style({attributes, wrapper}){
    return  `
        ${wrapper} .form-field input {
            background: var(--doatkolom_light_gray_color);
            border: none;
        }

        ${wrapper} .form-field input:focus {
            border: 1px solid var(--doatkolom_secondary_color) 
        }
    `
}
