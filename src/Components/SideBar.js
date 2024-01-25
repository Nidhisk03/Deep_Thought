import React from 'react'

const SideBar = () => {
  return (
    <div className='flex ml-[70px]'>
      <div className='mt-[20px] h-[334px] ml-[30px] w-[40px] 
        shadow-[0px_4px_4px_0px_#00000040]'>



      </div>
      <div className='absolute mt-[20px] text-white   p-[5px]    shadow-[0px_-4px_4px_0px_#00000040] h-[334px] w-[40px] border border-black bg-black rounded-l-[30px] ' >
        <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.8333 17L7 36.8333M26.8333 36.8333L7 17" stroke="white" stroke-width="2" stroke-linecap="round" />
        </svg>

        <p className='font-[400] p-[8px]'>N
o
t
i
c
e

B
o
a
r
d</p>
      </div>
    </div>
  )
}

export default SideBar
