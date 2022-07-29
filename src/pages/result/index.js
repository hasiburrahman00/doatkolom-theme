import updateBreadcrumb from "../../utils/breadcrumb"
export default function Result() {
    updateBreadcrumb('Result');
    return(
        <div className="max-w-screen-xl px-5 py-16 mx-auto">
            <div className="max-w-[785px] m-auto p-7 md:p-14 box-border bg-light_gray rounded-md">
                <form>
                    <div>
                        <label For="certificate" className="w-full lg:w-[221px] text-primary font-secondary font-weight_primary text-lg block md:inline-block" >Birth Certificate Number :</label>
                        <input type="number" id="certificate" className="w-full lg:w-[440px] ml-0 lg:ml-[12px] p-4 rounded-md bg-gray-200 border-1 border-primary border-solid text-primary font-secondary font-weight_primary text-base focus:outline-none" />
                    </div>
                    <div className="lg:text-right mt-8">
                        <label For="roll" className="w-full lg:w-[221px] block md:inline-block text-primary font-secondary font-weight_primary text-lg" >Roll Number :</label>
                        <input type="number" id="roll" className="w-full lg:w-[440px] ml-0 lg:ml-[12px] p-4 rounded-md bg-gray-200 border-1 border-primary border-solid text-primary font-secondary font-weight_primary text-base focus:outline-none" />
                    </div>
                    <div className="lg:text-right mt-5">
                        <button className="w-52 bg-gray-200 text-primary font-secondary font-weight_primary text-lg py-4 rounded-md cursor-pointer hover:bg-primary hover:text-white transition ease-linear duration-200 border-1 border-primary border-solid" type="reset">Reset</button>
                        <button className="w-52 bg-gray-200 text-primary font-secondary font-weight_primary text-lg py-4 rounded-md cursor-pointer hover:bg-primary hover:text-white transition ease-linear duration-200 border-1 border-primary border-solid ml-5" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}