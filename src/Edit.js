import React from 'react'

const Edit = (props) => {
    console.log(props)
  return (
    <div>
      <button onClick={()=>props.add(props.data,"io")}>Edit</button>
    </div>
  )
}

export default Edit
