import React, { useState } from 'react'
import Toggle from './Toggle';

const Left = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div onClick={toggleSidebar}  className=''>
      { !isOpen && 
      <> <div className='w-[100px] h-[50px] bg-black rounded-tr-[20px]' >
      </div> <div className='w-[100px] h-[500px] bg-[#FDFDFD]  rounded-b-[20px] shadow-[0px_1px_1px_0px_#00000040]'>
        <div className='m-auto mt-8 w-[60px] h-[60px] border-[1px] border-[#0029FF] rounded-[20px]'>
          <div className='mx-6 mt-4'>
            <svg width="8" height="27" viewBox="0 0 8 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.368 3.96V0.971998H7.136V27H3.824V3.96H0.368Z" fill="#0029FF" />
            </svg>
          </div>
        </div>

      </div></>
      }

      {isOpen && 
    
      <Toggle />
      }






    </div>
  )
}

export default Left
