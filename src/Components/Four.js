import React from 'react'

const Four = ({ name, des }) => {
  return (
    <div className=' ml-2 w-[390px] h-[470px] shadow-[1px_1px_4px_2px_#00000040] mx-8 rounded-[15px]'>
      <p className='h-[40px] pl-32 bg-black rounded-t-[15px] text-white flex justify-center items-center'> {name}
        <div className='ml-32'>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="11" fill="white" />
          <path d="M9.752 16L9.656 15.376C10.1787 15.2693 10.4933 15.1627 10.6 15.056C10.7173 14.9387 10.776 14.7413 10.776 14.464V9.872C10.776 9.648 10.6907 9.488 10.52 9.392C10.3493 9.28533 10.0293 9.184 9.56 9.088L9.656 8.576C10.7973 8.42667 11.592 8.352 12.04 8.352L12.216 8.512V14.848C12.216 14.976 12.2427 15.0613 12.296 15.104C12.36 15.136 12.44 15.1627 12.536 15.184L13.32 15.376L13.256 16H9.752ZM12.232 5.504C12.232 5.77067 12.1467 5.99467 11.976 6.176C11.816 6.35733 11.5973 6.448 11.32 6.448C11.0533 6.448 10.8293 6.368 10.648 6.208C10.4773 6.048 10.392 5.82933 10.392 5.552C10.392 5.264 10.472 5.03467 10.632 4.864C10.8027 4.69333 11.032 4.608 11.32 4.608C11.928 4.608 12.232 4.90667 12.232 5.504Z" fill="black" />
        </svg>
        </div>

      </p>
      <div className='p-6'>

        <span className='pt-2 font-bold'>Description : </span>
        <span className='pt-2  font-normal'> {des}</span>
      </div>

      <div className=' border-t-2 border-[#D1CECE] '>
        <div className='flex mx-4 pt-2 w-[355px] h-[40px] bg-[#F2F2F2]'>
          <div className='mt-2 mx-2'>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.1003 9.59961L7.98895 3.66593L1.87761 9.59961L0 7.77285L7.98895 -0.000391006L15.9779 7.77285L14.1003 9.59961Z" fill="black" />
              <path d="M7.95412 3.63006L7.98895 3.59624L8.02378 3.63006L14.1002 9.52988L15.9062 7.77285L7.98895 0.0693722L0.0717001 7.77285L1.87765 9.52988L7.95412 3.63006Z" stroke="black" stroke-opacity="0.4" stroke-width="0.1" />
            </svg>
          </div>
          <p className='mx-4 font-[600]'>Introduction</p>

        </div>
        <p className='text-[14px] mx-6 mt-2'>The 4SA Method , How to bring a idea into progress ?</p>
        <p className='ml-[300px] text-[14px] font-[600] pt-[25px] p-[10px]'>See More</p>

        <div className='flex mx-4 pt-[4px] w-[355px] h-[35px] border border-[#D9D7D7]'>
          <div className='mt-[4px] mx-2'>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.1003 9.59961L7.98895 3.66593L1.87761 9.59961L0 7.77285L7.98895 -0.000391006L15.9779 7.77285L14.1003 9.59961Z" fill="black" />
              <path d="M7.95412 3.63006L7.98895 3.59624L8.02378 3.63006L14.1002 9.52988L15.9062 7.77285L7.98895 0.0693722L0.0717001 7.77285L1.87765 9.52988L7.95412 3.63006Z" stroke="black" stroke-opacity="0.4" stroke-width="0.1" />
            </svg>
          </div>
          <p className='mx-4 font-[600]'>Thread A</p>

        </div>
        <p className='text-[12px] p-[4px] font-[400] w-[355px] mx-4'>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
        <p className='ml-[300px] text-[14px] font-[600] pt-[25px] p-[10px]'>See More</p>

        <div className='flex mx-16 pt-[4px] w-[315px] h-[35px] border border-[#D9D7D7]'>

          <p className='mx-4 font-[600]'>Example 1</p>

        </div>

        <p className='text-[12px] p-[4px] font-[400] w-[355px] mx-16'>You have a concept , How will you put into progress?</p>

      </div>

    </div>
  )
}

export default Four
