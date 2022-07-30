export default function Style({wrapper}){
    return `
        ${wrapper} .history-box {
            background-color: var(--doatkolom_primary_light_color);
        }

        ${wrapper} .histories:last-child a {
            color: var(--doatkolom_white_color);
        }
    `
}
