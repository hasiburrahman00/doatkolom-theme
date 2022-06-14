export default function Style({attributes, wrapper, sheet}){
    return (
        <style id={sheet}>
            {`  
                ${wrapper} {
                    --primary-color: #6EC1E4;
                    --secondary-color: #54595f;
                    --hover-color: #3907bb;
                }

            `}
        </style>
    )
}
