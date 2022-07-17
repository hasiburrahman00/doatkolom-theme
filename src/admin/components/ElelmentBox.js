import React from 'react'

const ElelmentBox = (props) => {
  return (
    <>
      {props.size == 'lg' 
        ?
        <div className="max-w-screen-lg bg-white mx-auto p-5">
          {props.children}
        </div> 
        : 
        <div className="max-w-screen-xl bg-white mx-auto p-12">
          {props.children}
        </div>
      }
    </>
  )
}

export default ElelmentBox