import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {BiLoaderAlt} from 'react-icons/bi';

const Wait = () => {
     return (
          <div className='absolute justify-center min-w-full min-h-screen bg-red-600 grig place-content-center'>

               <h1>Please wait...</h1>
               <CircularProgress disableShrink/>

          </div>

     )
}

export default Wait
