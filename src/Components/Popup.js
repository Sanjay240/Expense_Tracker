import React from 'react'
import {Dialog, DialogTitle, DialogContent} from '@mui/material';
import Button from './Button';
import { close } from '../Utils/Icons';

function Popup(props) {

    const {title, children, openPopup, setOpenPopup} = props;

  return (
        <Dialog open={openPopup}>
            <DialogTitle style={{display: 'flex'}}>
                <div style={{flexGrow: 1}}>{title}</div>
                <Button 
                    name= {''}
                    icon= {close}
                    bPad= {'.8rem 1.6rem'}
                    bRad= {'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                    onClick={() => setOpenPopup(false)}
                />
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
  )
}

export default Popup


