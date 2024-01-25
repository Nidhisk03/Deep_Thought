import React from 'react'


const Three = ({ name, des }) => {
  return (
    <div className=' ml-2 w-[390px] h-[470px] shadow-[1px_1px_4px_2px_#00000040] mx-8 rounded-[15px]'>
      <p className='h-[40px] pl-8 bg-black rounded-t-[15px] text-white flex justify-center items-center'> {name}
        <div className='ml-32'>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="11" fill="white" />
          <path d="M9.752 16L9.656 15.376C10.1787 15.2693 10.4933 15.1627 10.6 15.056C10.7173 14.9387 10.776 14.7413 10.776 14.464V9.872C10.776 9.648 10.6907 9.488 10.52 9.392C10.3493 9.28533 10.0293 9.184 9.56 9.088L9.656 8.576C10.7973 8.42667 11.592 8.352 12.04 8.352L12.216 8.512V14.848C12.216 14.976 12.2427 15.0613 12.296 15.104C12.36 15.136 12.44 15.1627 12.536 15.184L13.32 15.376L13.256 16H9.752ZM12.232 5.504C12.232 5.77067 12.1467 5.99467 11.976 6.176C11.816 6.35733 11.5973 6.448 11.32 6.448C11.0533 6.448 10.8293 6.368 10.648 6.208C10.4773 6.048 10.392 5.82933 10.392 5.552C10.392 5.264 10.472 5.03467 10.632 4.864C10.8027 4.69333 11.032 4.608 11.32 4.608C11.928 4.608 12.232 4.90667 12.232 5.504Z" fill="black" />
        </svg>
        </div>

      </p>
      <div className='p-4'>

        <span className='pt-2 font-bold'>Description : </span>
        <span className='pt-2 bt-5  font-normal'> {des}</span>
      </div>

      <div className='p-4  border-t-2 border-[#D1CECE]'>
        <p className='py-4 font-medium'>Title</p>
        <input className='p-2 w-[360px] h-[35px] rounded-[5px] bg-[#FCFBFB] shadow-[-2px_2px_6px_0px_#00000026]' />

        <p className='py-4 font-medium'>Content</p>
      

        <div className=' w-[360px] h-[75px]  shadow-[0px_2px_10px_0px_#0000002E]'>

          <div className='pt-[10px] px-[15px] flex flex-wrap'>
            <p className='w-[20px] h-[18px] font-[400] text-[14px] px-2 mx-2 text-[#616161]'>File</p>
            <p className='w-[24px] h-[18px] font-[400] text-[14px] px-2 mx-2 text-[#616161]'>Edit</p>
            <p className='w-[24px] h-[18px] font-[400] text-[14px] px-2 mx-2 text-[#616161]'>View</p>
            <p className='w-[26px] h-[18px] font-[400] text-[14px] px-2 mx-2 text-[#616161]'>Insert</p>
            <p className='w-[34px] h-[18px] font-[400] text-[14px] px-2 mx-2 text-[#616161]'>Format</p>
            <p className='w-[24px] h-[18px] font-[400] text-[14px] px-2 mx-2 text-[#616161]'>Tools</p>
            <p className='w-[20px] h-[18px] font-[400] text-[14px] px-2 mx-2 text-[#616161]'>Table</p>
            <p className='w-[23px] h-[18px] font-[400] text-[14px] px-2 mx-2 text-[#616161]'>Help</p>


          </div>
          <div className='pt-[10px] px-[15px] flex flex-wrap'>
            <p className='w-[20px] h-[18px] font-[300] text-[14px] px-2 mx-2 text-[#616161]'>
              <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.79978 3.1501L3.15002 7.13561M3.15002 7.13561L7.79978 11.1211M3.15002 7.13561L13.85 7.13561C16.0592 7.13561 17.85 8.92647 17.85 11.1356V14.8501" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </p>
            <p className='w-[20px] h-[18px] font-[200] text-[14px] px-2 mx-2 text-[#616161]'>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9431 3.32505L16.15 7.53197M16.15 7.53197L11.9431 11.7389M16.15 7.53197H6.85003C4.64089 7.53197 2.85003 9.32284 2.85003 11.532V15.675" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </p>
            <p className='w-[20px] h-[18px] font-[200] text-[14px] px-2 mx-2 text-[#616161]'>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5961 1.8999H17.0995M17.0995 1.8999V7.40335M17.0995 1.8999L11.5961 7.40335M7.40397 17.0999H1.90052M1.90052 17.0999V11.5964M1.90052 17.0999L7.60052 11.3999M17.1 11.596V17.0994M17.1 17.0994H11.5966M17.1 17.0994L11.5966 11.596M1.90002 7.40385L1.90002 1.9004M1.90002 1.9004L7.40348 1.9004M1.90002 1.9004L7.60002 7.6004" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </p>
            <p className='w-[65px] h-[18px] font-[400] text-[14px] px-2 mx-2 text-[#616161]'>
              Paragraph
            </p>

            <p className='w-[30px] h-[18px] py-[4px]  font-[200] text-[14px] px-2 mx-2 text-[#616161]'>
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#616161" />
              </svg>
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#616161" />
              </svg>
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#616161" />
              </svg>


            </p>


          </div>

        </div>
        <div className='py-4 w-[360px] h-[85px]  shadow-[-2px_2px_6px_0px_#00000026]'>


        </div>


      </div>




    </div>
  )
}

export default Three
