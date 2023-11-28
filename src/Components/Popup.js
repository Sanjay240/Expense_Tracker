import React from 'react'
import {Dialog, DialogTitle, DialogContent} from '@mui/material';

function Popup(props) {

    const {title, children, openPopup, setOpenPopup} = props;

  return (
    <Dialog open={openPopup}>
        <DialogTitle>
            <div>title of popup</div>
        </DialogTitle>
        <DialogContent>
            <div>content of popup</div>
        </DialogContent>
    </Dialog>
  )
}

export default Popup
