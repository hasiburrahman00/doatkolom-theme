export default function Style({attributes, wrapper, sheet}){
    return (
        <style id={sheet}>
            {`  
                ${wrapper} img{
                    display: block;
                    width: 100%;
                    height: 380px;
                    object-fit: cover;
                }
            `}
        </style>
    )
}
