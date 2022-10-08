import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {BiLoaderAlt} from 'react-icons/bi';

const Wait = () => {
     return (
          <div className='absolute flex flex-col items-center justify-center min-w-full min-h-screen bg-red-600 place-content-center'>

               <h1 className="text-xl">Please wait...</h1>
               <CircularProgress disableShrink/>

          </div>

     )
}

export default Wait
