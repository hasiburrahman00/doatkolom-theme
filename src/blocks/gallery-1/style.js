export default function Style({attributes, wrapper, sheet}){
    return (
        <style id={sheet}>
            {`  
                ${wrapper} {
                    --primary-color: #6EC1E4;
                    --secondary-color: #54595f;
                    --hover-color: #3907bb;
                }

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
