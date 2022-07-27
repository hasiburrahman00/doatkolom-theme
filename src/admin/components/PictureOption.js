import SettingsIcon from "../icons/settings"
export default function PictureOption() {
    return (
        <span className="absolute h-[30px] items-center bottom-[15px] left-[15px] w-[calc(100%_-_30px)] bg-[#fff]/80 flex justify-between rounded-md">
            <span className="h-[30px] rounded-tl-md rounded-bl-md flex items-center justify-center text-center w-full hover:bg-white cursor-pointer">Select</span>
            <span className="h-[30px] border-l border-solid border-[#ddd] border-y-0 border-r-0 px-3 flex items-center rounded-tr-md rounded-br-md cursor-pointer hover:bg-white">
                <SettingsIcon className="w-4"/>
            </span>
        </span>
    )
}