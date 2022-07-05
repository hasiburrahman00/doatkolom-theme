export default function Style({attributes, wrapper, sheet}){
    return (
        <style id={sheet}>
            {`  
                ${wrapper} {
                    --primary-color: #6EC1E4;
                    --secondary-color: #54595f;
                    --hover-color: #3907bb;
                }

                ${wrapper} .img-bg-shape{
                    width: 455px;
                    height: 455px;
                    background: #E9E9E9;
                    border-radius: 10px;
                }

                ${wrapper} .headmaster-image img{
                    height: 458px;
                    object-fit: cover;
                    border-radius: 10px
                }

                ${wrapper} .teacher-image{
                    width: 48px;
                    height: 48px;
                    border-radius: 50%
                }

            `}
        </style>
    )
}
