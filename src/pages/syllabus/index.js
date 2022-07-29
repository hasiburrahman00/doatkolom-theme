import updateBreadcrumb from "../../utils/breadcrumb";
import AllSyllabus from "../../components/syllabus";
import SearchIcon from "../../Icons/search-icon";
import MenuIcon from "../../Icons/menu-icon";
import PdfIcon from "../../Icons/pdf-icon";
import DownloadIcon from "../../Icons/download-icon";

export default function Syllabus () {
    updateBreadcrumb( 'All Syllabus' )

    return (
        <div className="max-w-screen-xl px-5 py-20 mx-auto">
            <div className="flex justify-between">
                <div className="bg-gray-100 flex items-center px-4 py-4 w-[400px] rounded-md">
                    <SearchIcon/>
                    <input className="w-full border-none bg-gray-100 focus:outline-none placeholder:text-primary font-secondary font-weight_primary text-base ml-4" type="search" placeholder="Search Your Syllabus"/>
                </div>
                <button type="button" className="rounded-md p-4 border-none cursor-pointer hidden md:block"><MenuIcon/></button>
            </div>
            <div className="mt-10">
                <AllSyllabus className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <AllSyllabus.Item icons={<PdfIcon/>} topic="English For Today or Department Of English" download={<DownloadIcon/>} title="Download"/>
                    <AllSyllabus.Item icons={<PdfIcon/>} topic="English For Today or Department Of English" download={<DownloadIcon/>} title="Download"/>
                    <AllSyllabus.Item icons={<PdfIcon/>} topic="English For Today or Department Of English" download={<DownloadIcon/>} title="Download"/>
                    <AllSyllabus.Item icons={<PdfIcon/>} topic="English For Today or Department Of English" download={<DownloadIcon/>} title="Download"/>
                </AllSyllabus>
                <AllSyllabus className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3">
                    <AllSyllabus.Item icons={<PdfIcon/>} topic="English For Today or Department Of English" download={<DownloadIcon/>} title="Download"/>
                    <AllSyllabus.Item icons={<PdfIcon/>} topic="English For Today or Department Of English" download={<DownloadIcon/>} title="Download"/>
                    <AllSyllabus.Item icons={<PdfIcon/>} topic="English For Today or Department Of English" download={<DownloadIcon/>} title="Download"/>
                    <AllSyllabus.Item icons={<PdfIcon/>} topic="English For Today or Department Of English" download={<DownloadIcon/>} title="Download"/>
                </AllSyllabus>
                <AllSyllabus className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3">
                    <AllSyllabus.Item icons={<PdfIcon/>} topic="English For Today or Department Of English" download={<DownloadIcon/>} title="Download"/>
                    <AllSyllabus.Item icons={<PdfIcon/>} topic="English For Today or Department Of English" download={<DownloadIcon/>} title="Download"/>
                    <AllSyllabus.Item icons={<PdfIcon/>} topic="English For Today or Department Of English" download={<DownloadIcon/>} title="Download"/>
                    <AllSyllabus.Item icons={<PdfIcon/>} topic="English For Today or Department Of English" download={<DownloadIcon/>} title="Download"/>
                </AllSyllabus>
            </div>
        </div>
    )
}