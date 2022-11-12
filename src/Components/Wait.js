import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';


const Wait = () => {
     return (
          <div className='absolute flex flex-col gap-4 items-center justify-center min-w-full min-h-screen bg-[#1E1E1E] place-content-center'>
               <h1 className="text-xl text-white">Please wait...</h1>
               <CircularProgress disableShrink/>
          </div>

     )
}

export default Wait
