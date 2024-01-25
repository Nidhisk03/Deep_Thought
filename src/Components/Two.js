import React from 'react'

const Two = ({ name, des }) => {
  return (
    <div className=' ml-2 w-[390px] h-[470px] shadow-[1px_1px_4px_2px_#00000040] mx-8 rounded-[15px]'>
      <p className='h-[40px] pl-24 bg-black rounded-t-[15px] text-white flex justify-center items-center'> {name}
        <div className='ml-32'>
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

      <div className='flex p-2 font-medium  bg-[#FEFFC033]'>
        <svg width="17" height="24" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0593 9.59961L8.94793 3.66593L2.8366 9.59961L0.958984 7.77285L8.94793 -0.000391006L16.9369 7.77285L15.0593 9.59961Z" fill="black" />
          <path d="M8.9131 3.63006L8.94793 3.59624L8.98276 3.63006L15.0592 9.52988L16.8652 7.77285L8.94793 0.0693722L1.03068 7.77285L2.83663 9.52988L8.9131 3.63006Z" stroke="black" stroke-opacity="0.4" stroke-width="0.1" />
        </svg>

        <p className='pl-16 font-[700]'>Thread A</p>
      </div>

      <div className='flex'>
        <div className=' w-[180px] h-[80px] m-4  bg-slate-100 shadow-[1px_3px_8px_0px_#00000040] rounded-t-[10px]'>
          <p className=' rounded-t-[10px] p-[5px] h-[28px] bg-slate-100 text-[12px] font-[400]'>Sub thread here</p>
          <div className='h-[60px] bg-white rounded-[10px] shadow-[1px_3px_8px_0px_#00000040] '>
            <input className='bg-white w-[140px] p-[5px] rounded-[10px] text-[12px] font-[400]' placeholder='Enter text here' />
          </div>
        </div>
        <div className=' w-[180px] h-[80px] m-4 bg-slate-100 shadow-[1px_3px_8px_0px_#00000040] rounded-t-[10px]'>
          <p className=' rounded-t-[10px] p-[5px] h-[28px] bg-slate-100 text-[12px] font-[400]'>Sub Interpretation 1</p>
          <div className='h-[60px] bg-white rounded-[10px] shadow-[1px_3px_8px_0px_#00000040] '>
            <input className='bg-white w-[140px] p-[5px] rounded-[10px] text-[12px] font-[400]' placeholder='Enter text here' />
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='flex px-12 mt-2 w-[170px] h-[30px] mx-4 '>
          <p className='mx-[4px]'>
            <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.2236 19C4.2236 19.5 4.64596 20 5.2795 20H9.50311C10.1366 20 10.559 19.5 10.559 19V18H4.2236V19ZM7.3913 0C3.27329 0 0 3.1 0 7C0 9.4 1.26708 11.5 3.1677 12.7V15C3.1677 15.5 3.59006 16 4.2236 16H10.559C11.1925 16 11.6149 15.5 11.6149 15V12.7C13.5155 11.4 14.7826 9.3 14.7826 7C14.7826 3.1 11.5093 0 7.3913 0Z" fill="#323232" />
            </svg>
          </p>
          <p className='mx-[4px]'>
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.7727 2C21.7727 0.9 20.8382 0 19.6832 0H2.8832C1.7282 0 0.783203 0.9 0.783203 2V14C0.783203 15.1 1.7282 16 2.8832 16H17.5832L21.7832 20L21.7727 2ZM17.5832 12H4.9832V10H17.5832V12ZM17.5832 9H4.9832V7H17.5832V9ZM17.5832 6H4.9832V4H17.5832V6Z" fill="#323232" />
            </svg>
          </p>
          <p className='mx-[4px]'>
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.4499 0H3.11654C1.82154 0 0.783203 0.857143 0.783203 1.90476V15.2381C0.783203 16.2857 1.82154 17.1429 3.11654 17.1429H7.7832L11.2832 20L14.7832 17.1429H19.4499C20.7332 17.1429 21.7832 16.2857 21.7832 15.2381V1.90476C21.7832 0.857143 20.7332 0 19.4499 0ZM12.4499 15.2381H10.1165V13.3333H12.4499V15.2381ZM14.8649 7.85714L13.8148 8.73338C12.9748 9.42861 12.4499 10 12.4499 11.4286H10.1165V10.9524C10.1165 9.90476 10.6414 8.95242 11.4814 8.25718L12.9281 7.05718C13.3598 6.71432 13.6165 6.2381 13.6165 5.71429C13.6165 4.66667 12.5665 3.80952 11.2832 3.80952C9.99987 3.80952 8.94987 4.66667 8.94987 5.71429H6.61654C6.61654 3.60952 8.70487 1.90476 11.2832 1.90476C13.8615 1.90476 15.9499 3.60952 15.9499 5.71429C15.9499 6.55238 15.5299 7.31429 14.8649 7.85714Z" fill="#323232" />
            </svg>
          </p>
          <p className='mx-[4px]'>
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.4044 6.867C13.236 4.356 12.1786 1.908 10.1952 0C8.19305 1.926 7.08879 4.374 6.87361 6.867C8.07115 7.479 9.17535 8.27101 10.139 9.23401C11.1026 8.28001 12.2069 7.488 13.4044 6.867ZM7.32312 9.25203C7.19214 9.16203 7.04227 9.08099 6.90193 8.99099C7.04227 9.08999 7.19214 9.16203 7.32312 9.25203ZM13.3295 9.02703C13.2078 9.10803 13.0765 9.17103 12.9549 9.26103C13.0765 9.17103 13.2078 9.10803 13.3295 9.02703ZM10.139 12.105C8.1275 9.15296 4.69393 7.2 0.783203 7.2C0.783203 11.988 3.92655 16.038 8.29571 17.541C8.88512 17.748 9.50281 17.901 10.139 18C10.7752 17.892 11.3835 17.739 11.9823 17.541C16.3515 16.038 19.4948 11.988 19.4948 7.2C15.5841 7.2 12.1505 9.15296 10.139 12.105Z" fill="#323232" />
            </svg>

          </p>
        </div>


        <div className='flex w-[130px] h-[30px]'>
          <select className='p-[2px] text-[10px] mx-[4px] font-[600] rounded-[5px]  shadow-[0px_2px_4px_0px_#00000040]'><option className='text-[10px]'>Select Categ</option></select>
          <select className='p-[2px] text-[10px] rounded-[5px] font-[600] shadow-[0px_2px_4px_0px_#00000040]'><option className='text-[10px]'>Select Categ</option></select>
        </div>


      </div>
      <button className='bg-[#0029FF] w-[100px] mx-4 p-[7px] rounded-[10px] text-[12px] font-[600] text-white'> + Sub-thread</button>
      <div className=' w-[360px] h-[80px] m-4  bg-slate-100 rounded-t-[10px] 
      shadow-[1px_3px_8px_0px_#00000040]'>
          <p className=' rounded-t-[10px] p-[5px] h-[28px] bg-slate-100 text-[12px] font-[400]'>Summay for Thread A</p>
          <div className='h-[60px] bg-white rounded-[10px] shadow-[1px_3px_8px_0px_#00000040]  '>
            <input className='bg-white w-[140px] p-[5px] rounded-[10px] text-[12px] font-[400]' placeholder='Enter text here' />
          </div>
        </div>




    </div>
  )
}

export default Two
