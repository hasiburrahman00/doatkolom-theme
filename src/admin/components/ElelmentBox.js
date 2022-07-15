import React from 'react'

const ElelmentBox = (props) => {
  return (
    <div className="max-w-screen-lg bg-white mx-auto p-5">
        {props.children}
    </div>
  )
}

export default ElelmentBox