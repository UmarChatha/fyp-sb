import React from 'react'
import ReactLivePreview from '../LivePreview/ReactLivePreview'
function MiddlePanel() {
  return (
    <div className="w-full h-full items-center">
       <ReactLivePreview props={{title:"TextField",description:"lorem lorem lorem ipsumlo lorenasdbkabisd" ,code:"<input ></input>"}}></ReactLivePreview>
       <ReactLivePreview props={{title:"TextField",description:"lorem lorem lorem ipsumlo lorenasdbkabisd" ,code:"<input ></input>"}}></ReactLivePreview>
       <ReactLivePreview props={{title:"TextField",description:"lorem lorem lorem ipsumlo lorenasdbkabisd" ,code:"<input ></input>"}}></ReactLivePreview>
       <ReactLivePreview props={{title:"TextField",description:"lorem lorem lorem ipsumlo lorenasdbkabisd" ,code:"<input ></input>"}}></ReactLivePreview>

    </div>
  )
}

export default MiddlePanel