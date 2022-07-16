import { useReducer } from "react"
import MenuButton from "./components/Button";
import ElelmentBox from "./components/ElelmentBox";
import ImageUpload from "./components/ImageUpload";
import InputBox from "./components/InputBox";
import SectionTip from "./components/SectionTip";

const initialState = {
    logo: doatkolom_object.img + 'doatkolom-logo.webp',
    uploaded_img: doatkolom_object.img + 'logo.webp',
    site_name: "Savar Girls High School"
}

const stateHandler = (state, action) => {
  // if it is a function, allow to modify full state
    if( typeof action === 'function' ) {
        return action( state );
    }

    // update individual state
    if( typeof action === 'object' ) {
        return {
            ...state,
            ...action
        } 
    }

    return state
}

export default function Home() {

    const [ attribute, setAttribute ] = useReducer(stateHandler, initialState)

    return (
        <div className="m-5">
            <div className="bg-white py-3 px-6">
                <div className="flex">
                    <div className="w-2/6">
                        <img src={attribute.logo}/>
                    </div>
                    <div className="w-4/6 flex justify-end items-center">
                        <div>
                            <MenuButton variant="contained" text="Get Support" bg="#DFE9F1" textcolor="#0E1F36" />
                        </div>
                        <div className="ml-5">
                            <MenuButton variant="contained" text="Get Support" bg="#1879C7" textcolor="#fff"/>
                        </div>
                    </div>
                </div>
            </div>

            <SectionTip title="Site Settings"/>
            
            <ElelmentBox>
                <div className="flex justify-between flex-wrap">
                    <div className="w-[431px] flex justify-between">
                        <div className="w-[151px]">
                            <ImageUpload img={attribute.uploaded_img}/>
                        </div>
                        <div className="w-[151px]">
                            <ImageUpload img={attribute.uploaded_img}/>
                        </div>
                    </div>
                    <div className="w-[424px]">
                        <InputBox title="Site Title"/>
                        <InputBox title="Site Description"/>
                        <InputBox title="Site Keywords"/>
                    </div>
                </div>
            </ElelmentBox>

            <SectionTip title="Information"/>
            
            <ElelmentBox>
                <div className="flex justify-between flex-wrap">
                    <div className="w-[470px]">
                        <InputBox title="Institution Type"/>
                    </div>
                    <div className="w-[470px]">
                        <InputBox title="Institution Code"/>
                    </div>
                    <div className="w-[470px]">
                        <InputBox title="Official Email Address"/>
                    </div>
                    <div className="w-[470px]">
                        <InputBox title="EIIN Code"/>
                    </div>
                    <div className="w-[470px]">
                        <InputBox title="Official Phone Number"/>
                    </div>
                    <div className="w-[470px]">
                        <InputBox title="Full Address"/>
                    </div>
                </div>
            </ElelmentBox>

            <SectionTip title="Quick Menu URL"/>

            <ElelmentBox>
                <div className="flex justify-between flex-wrap">
                    <div className="w-[470px]">
                        <InputBox title="Notice Board"/>
                    </div>
                    <div className="w-[470px]">
                        <InputBox title="Upcoming Events"/>
                    </div>
                    <div className="w-[470px]">
                        <InputBox title="Exam Result"/>
                    </div>
                    <div className="w-[470px]">
                        <InputBox title="Syllabus"/>
                    </div>
                    <div className="w-[470px]">
                        <InputBox title="Class Routine"/>
                    </div>
                    <div className="w-[470px]">
                        <InputBox title="Exam Routine"/>
                    </div>
                    <div className="w-[470px]">
                        <InputBox title="Photo Gallery"/>
                    </div>
                    <div className="w-[470px]">
                        <InputBox title="Applicationn/Support"/>
                    </div>
                    <div className="w-[470px]">
                        <InputBox title="Our Teachers"/>
                    </div>
                </div>
            </ElelmentBox>
        </div>
    )
}