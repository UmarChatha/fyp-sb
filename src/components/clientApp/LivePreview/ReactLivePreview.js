import React from "react";
import { LivePreview, LiveError, LiveProvider, LiveEditor } from "react-live";
import { RiFileCopyFill } from "react-icons/ri";
import { FcRefresh } from "react-icons/fc";
import { BsFileCodeFill } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import {AiFillEye} from "react-icons/ai";
import './style.css'

function ReactLivePreview(prop) {
  const {  props, children } = prop;

  const [copySuccess, setCopySuccess] = React.useState('');
  const [currentCode,setCurrentCode] = React.useState(props.code);
  const textAreaRef = React.useRef(null);
  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  const dataObj= {
             title:"",
             description:"",
             code:"",
  }

  return (
    <div className="items-center px-4 flex flex-col justify-left w-full">
      <h1 className="text-3xl text-gray-700 font-bold w-full ">{props.title}</h1>
      <br></br>
      <b className="w-full text-gray-700 font-medium">
        {props.description}
      </b>
      <br></br>
      <div class="w-full float-left">
      <div className="inline-flex px-2 py-1 bg-blue-100 items-center border-2 rounded-lg border-blue-400 ">
      <h2 className="text-blue-500">Live Preview</h2>
      <AiFillEye className="text-blue-500 ml-2 text-lg"></AiFillEye>
      </div>
      </div>
      <LiveProvider code={props.code}>
        <div className="w-full p-4 border-2 border-gray-200 rounded my-2">
          <LivePreview />
        </div>
        <div className=" w-full my-2 flex flex-col">
          <div className="bg-blue-100 border-blue-300 border-2 rounded shadow-xl p-2 mb-2 float-right">
            <SiJavascript className="mx-2 shadow-lg text-blue-700 border-2 rounded border-blue-400 text-2xl float-left cursor-pointer hover:text-blue-500" />
            <RiFileCopyFill className="mx-2 text-blue-700 border-2 rounded border-blue-400 text-2xl float-right cursor-pointer hover:text-blue-500" onClick={copyToClipBoard} />
            <FcRefresh className="mx-2 text-blue-700 border-2 rounded border-blue-400 text-2xl float-right cursor-pointer hover:text-blue-500" />
            <BsFileCodeFill className="mx-2 text-blue-700 border-2 rounded border-blue-400 text-2xl float-right cursor-pointer hover:text-blue-500" />
          </div>
          <div className="border-blue-500 border-4 rounded ">
            <LiveEditor  onFocusCapture={(e)=>console.log("assssa")} className="editor scrollbar p-4 max-h-64 overflow-hidden overflow-y-auto" />
          </div>
        </div>
        <LiveError className="bg-gray-800 text-red-400 font-bold w-full p-4" />
      </LiveProvider>
    </div>
  );
}

export default ReactLivePreview;
