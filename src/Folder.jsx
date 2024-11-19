import React, { useState } from 'react'

function Folder({files}) {
    const [expand,setExpand]=useState(false)
    const handleToggle = (e) => {
        e.stopPropagation();
        setExpand(prev => !prev);
    };
  return (
    <>
       <div onClick={handleToggle}>
        {files.isFolder?<button className={expand?'expand':''}>{'>'}</button>:null}
        {files.name}
        {files.isFolder && files.children.length>0 && expand && files.children.map((item,index)=>{
            return <div key={index} style={{paddingLeft:'20px'}}>
                <Folder files={item}/>
            </div>

        })}
       </div>
    </>
  )
}

export default Folder
