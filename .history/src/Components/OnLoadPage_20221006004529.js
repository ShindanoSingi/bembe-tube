import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

export default function OnLoadPage() {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);

     return (
          <div className='onload'>
               <Button onClick={handleOpen}>Please wait...</Button>
               <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}>
                    <Fade>
                         <Box className='style'>
                              Please wait...
                         </Box>
                    </Fade>
               </Modal>
          </div>
     );
}
