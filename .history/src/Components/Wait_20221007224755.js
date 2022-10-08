import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {BiLoaderAlt} from 'react-icons/bi';

const Wait = () => {
     return (
          <div className='absolute flex justify-center min-w-full min-h-screen bg-red-600'>
               <div>
                    <CircularProgress disableShrink/>
               </div>
          </div>

     )
}

export default Wait
