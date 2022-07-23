import React from 'react'
import { Play } from '../icons/play'
const SectionTip = (props) => {
  return (
    <div className="max-w-screen-lg bg-teal-100 mx-auto p-5 mt-8 flex">
        <div className="w-6/12">
            <h2 className="text-2xl font-bold m-0">{props.title}</h2>
        </div>
        <div className="w-6/12 text-right flex justify-end align-center">
            <p className="text-base m-0 mr-2 mt-1">Watch tutorial</p>
            <Play/>
        </div>
    </div>
)
}

export default SectionTip