import React from 'react'
import {SiDiscord,SiYoutube} from 'react-icons/si';
import {FaMoneyCheckAlt} from 'react-icons/fa'
import {HiDocumentText} from 'react-icons/hi'
import {BsUiChecksGrid} from 'react-icons/bs'
import {CgWebsite} from 'react-icons/cg'

function TopNavigation() {
  return (
    <div className="w-full p-2 sticky top-0 bg-gray-100 flex flex-row justify-center opacity-95">
          <div className="flex flex-row justify-center ml-auto">
          <button className="mx-2  duration-300 hover:bg-gray-600 hover:text-gray-100 hover:shadow-xl text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center">
              <HiDocumentText className="text-xl text-blue-700 hover:text-blue-500"></HiDocumentText>
              <span className="pl-2">Docs</span>
         </button>
         <button className="mx-2 duration-300 hover:bg-gray-600 hover:text-gray-100 hover:shadow-xl text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center">
              <BsUiChecksGrid className="text-xl text-blue-700 hover:text-blue-500"></BsUiChecksGrid>
              <span className="pl-2">Components</span>
         </button>
         <button className="mx-2 duration-300 hover:bg-gray-600 hover:text-gray-100 hover:shadow-xl text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center">
              <CgWebsite className="text-xl text-blue-700 hover:text-blue-500"></CgWebsite>
              <span className="pl-2">Blogs</span>
         </button>
          </div>
          <div className="flex flex-row justify-left ml-auto">
               <SiDiscord className="m-2 text-2xl text-blue-700 hover:text-blue-500 cursor-pointer"></SiDiscord>
               <SiYoutube className="m-2 text-2xl text-blue-700 hover:text-blue-500 cursor-pointer"></SiYoutube>
               <FaMoneyCheckAlt className="m-2 text-2xl text-blue-700 hover:text-blue-500 cursor-pointer"></FaMoneyCheckAlt>
          </div>
         
    </div>
  )
}

export default TopNavigation