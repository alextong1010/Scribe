import React from 'react';
import { FaMicrophone } from "react-icons/fa";


const Translator = () => {
  return (
    // Say I have a file.txt. Make a platform for the text file in which the translation will be displayed. Add the FaMicrophone icon below the iframe as a button so users know to record into it Can I space the items too
    <div className="bg-white flex flex-row items-center justify-center">
        <div className = "px-16">
            <iframe src="/dummy.txt" className="w-full h-full bg-white"></iframe>
        </div>
        <div className="px-16">
            <button className="text-8xl text-blue-500">
                <FaMicrophone size = {35}/>
            </button>
        </div>
    </div>
  );
};

export default Translator;