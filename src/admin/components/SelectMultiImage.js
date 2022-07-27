import UploadIcon from "../icons/upload"

export default function SelectMultiImage() {
    return (
        <div className="flex items-center justify-center flex-col space-y-2">
            <UploadIcon className="w-10"/>
            <span className="text-base">Select Image</span>
        </div>
    )
}