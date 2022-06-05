export default function Style({attributes, wrapper, sheet}){
    return (
        <style id={sheet}>
            {`  
                ${wrapper} {
                    --primary-color: #6EC1E4;
                    --secondary-color: #3907bb;
                    text-align: ${attributes.alignment};
                }

                ${wrapper} a {
                    cursor: pointer;
                }

                ${wrapper} svg {
                    display: inline-block;
                    color: #fff;
                }

                ${wrapper} .icon {
                    width: 60px;
                    height: 60px;
                    background-color: var(--primary-color);
                    border-radius: 50%;
                    text-align: center;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                ${wrapper} p {
                    text-align: ${attributes.alignment};
                    font-weight: 700;
                    font-size: 17px;
                    margin: 25px 0 0 0;
                    color: #7a7a7a;
                }

                ${wrapper} p a {
                    color: var(--secondary-color);
                    text-decoration: none;
                }

                ${wrapper} p a:hover {
                    text-decoration: underline;
                }

                .edit-icons {
                    display: flex;
                    column-gap: 11px;
                    margin-top: 25px;
                }

                .edit-icons  > * {
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }

            `}
        </style>
    )
}
