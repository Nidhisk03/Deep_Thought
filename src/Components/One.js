import React from 'react'

const One = ({ name, des, video }) => {
  return (
    <div className=' ml-2 w-[390px] h-[470px] shadow-[1px_1px_4px_2px_#00000040] mx-8 rounded-[15px]'>
      <p className='h-[40px] pl-8 bg-black rounded-t-[15px] text-white flex justify-center items-center'> {name}
        <div className='ml-20'>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="11" fill="white" />
          <path d="M9.752 16L9.656 15.376C10.1787 15.2693 10.4933 15.1627 10.6 15.056C10.7173 14.9387 10.776 14.7413 10.776 14.464V9.872C10.776 9.648 10.6907 9.488 10.52 9.392C10.3493 9.28533 10.0293 9.184 9.56 9.088L9.656 8.576C10.7973 8.42667 11.592 8.352 12.04 8.352L12.216 8.512V14.848C12.216 14.976 12.2427 15.0613 12.296 15.104C12.36 15.136 12.44 15.1627 12.536 15.184L13.32 15.376L13.256 16H9.752ZM12.232 5.504C12.232 5.77067 12.1467 5.99467 11.976 6.176C11.816 6.35733 11.5973 6.448 11.32 6.448C11.0533 6.448 10.8293 6.368 10.648 6.208C10.4773 6.048 10.392 5.82933 10.392 5.552C10.392 5.264 10.472 5.03467 10.632 4.864C10.8027 4.69333 11.032 4.608 11.32 4.608C11.928 4.608 12.232 4.90667 12.232 5.504Z" fill="black" />
        </svg>
        </div>

      </p>



      <div className='p-4'>

        <span className='pt-2 font-bold'>Description : </span>
        <span className='pt-2  font-normal'> {des}</span>
      </div>




      <iframe width="390"
        height="280"
        src="https://www.youtube.com/embed/TiMRwri1xJ8?si=PjZ9ZH6RCW-P7STJ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>

      </iframe>


    </div>
  )
}

export default One
