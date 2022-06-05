export default function Style({attributes, wrapper, sheet}){
    return (
        <style id={sheet}>
            {`  
                ${wrapper} {
                    --primary-color: #6EC1E4;
                    --secondary-color: #54595f;
                    --hover-color: #3907bb;
                    text-align: ${attributes.alignment};
                }

                ${wrapper} .page-list-title-url, 
                ${wrapper} a {
                    cursor: pointer
                }

                ${wrapper} svg {
                    width: 15px;
                    margin-right: 8px;
                    position: relative;
                    top: 2px;
                    color: var(--primary-color);
                }

                ${wrapper} h2{
                    margin: 0 0 16px 0;
                    color: var(--primary-color);
                    font-size: 27px;
                    font-weight: 700;
                    display: inline-block;
                    text-align: ${attributes.alignment};
                }

                ${wrapper} ul{
                    margin: 0;
                    padding: 0;
                }

                ${wrapper} li, 
                ${wrapper} a{
                    list-style: none;
                    text-decoration: none;
                }

                ${wrapper} li {
                    padding: 3px 0;
                }

                ${wrapper} li a {
                    color: var(--secondary-color);
                    font-size: 16px;
                    display: inline-flex;
                    align-items: baseline;
                    justify-content: ${attributes.alignment};
                }

                ${wrapper} .page-list-title-url:hover,
                ${wrapper} a:hover,
                ${wrapper} a:hover svg {
                    color: var(--hover-color);
                }

            `}
        </style>
    )
}
