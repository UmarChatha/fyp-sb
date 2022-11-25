import React from 'react'
import SimpleForm from '../../Form/SimpleForm'
import MiddlePanel from '../middlePanel/MiddlePanel'
import RightPanel from '../rightPanel/RightPanel'
function MainPanel() {
  return (
        <div className="h-screen p-4 flex flex-row">
           <MiddlePanel></MiddlePanel>
           <RightPanel className=""></RightPanel>
        </div>
  )
}

export default MainPanel