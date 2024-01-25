import React from 'react'

const Header = () => {
  return (
    <div className='w-[1197px] bg-[#F0F0F0] h-[90px] flex justify-between items-center'>

      <img className='h-[49px] w-[311px] ml-[83px] ' src='https://deepthought.education/assets/images/logo/logo.svg' />


      <div className=''>
        <ul className='flex  text-white mr-[83px]'>

          <div class="m-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#3683F0]">
            <p><i class="fa-solid fa-house"></i></p>
          </div>
          <div class="m-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#3683F0]">
            <p>  <i class="fa-solid fa-screwdriver-wrench"></i></p>
          </div>
          <div class="m-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#3683F0]">
            <p><i class="fa-solid fa-bell"></i></p>
          </div>
          <div class="m-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-300">
            <p className=''></p>
          </div>
          <div class="m-3 flex h-8 w-8 items-center justify-center rounded-full text-[#3683F0]">
            <p className='font-lg'><i class="fa-solid fa-ellipsis-vertical"></i></p>
          </div>
        </ul>
      </div>

    </div>
  )
}

export default Header
