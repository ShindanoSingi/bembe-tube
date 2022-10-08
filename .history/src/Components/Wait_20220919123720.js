import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { BiLoaderAlt } from 'react-icons/bi';

const Wait = () => {
  return (
    <div className='bg-red-600 flex justify-center mt-[50%]'>
      <div>
        <CircularProgress disableShrink />
      </div>
    </div>

  )
}

export default Wait

