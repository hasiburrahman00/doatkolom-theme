import Update from "../icons/update"
import Trash from "../icons/trash"
import Select from "../icons/select"
export default function PictureOption(props) {

    const clickHandler = action => {
        if( props.onClick && typeof props.onClick === 'function' ) {
            props.onClick(action)
        }
    }

    return (
        <span className="absolute hidden bottom-[5px] left-[5px] w-[calc(100%_-_10px)] group-hover:flex justify-center items-center">
            <span onClick={() => clickHandler('mark')} className="h-[30px] bg-[#fff]/80 px-3 flex items-center rounded-tl-md rounded-bl-md cursor-pointer hover:bg-white">
                <Select className="w-4"/>
            </span>
            <span onClick={() => clickHandler('update')} className="h-[30px] border-l bg-[#fff]/80 border-solid border-[#ddd] border-y-0 border-r-0 px-3 flex items-center cursor-pointer hover:bg-white">
                <Update className="w-4"/>
            </span>
            <span onClick={() => clickHandler('delete')} className="h-[30px] bg-[#fff]/80 border-l bg-[#fff].80 border-solid border-[#ddd] border-y-0 border-r-0 px-3 flex items-center rounded-tr-md rounded-br-md cursor-pointer hover:bg-white">
                <Trash className="w-4"/>
            </span>
        </span>
    )
}