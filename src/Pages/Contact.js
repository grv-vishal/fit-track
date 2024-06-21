import React,{useContext,useState} from 'react'
import { AppContext } from '../components/firebase/AppContext';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent,DialogActions,DialogContentText } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {

  const{openContact,setOpenContact}=useContext(AppContext);

  const initialData ={
    firstName:'',
    lastName:'', 
    email: '',
    message:'',
  }

  const [state, setState] = useState(initialData);
    
    const isInvalid = state.email === '' || state.firstName=== '' || state.lastName=== '' || state.message==='';

    const handleChange = e => {
      const {name, value} = e.target;
       setState({...state, [name]: value});
    }


    const handleSubmit = () => {
      setState(initialData);
      setOpenContact(false);
       
    };
    

  return (
    <div>
      <Dialog open={openContact} onClose={()=>setOpenContact(false)} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title" className='text-blueLight-azure text-center'>Feedback & Queries</DialogTitle>
          <DialogContent>
            <DialogContentText>
             <p className="text-black p-2">Got an issue? Want to send feedback? Let us know.</p>
            </DialogContentText>
            <div className='flex gap-2'>
            <TextField
             
              margin="dense"
              id="name"
              label="First Name"
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
              fullWidth
            />
            <TextField
             
              margin="dense"
              id="name"
              label="Last Name"
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
              fullWidth
            />
            </div>
            <TextField
             
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              fullWidth
            />
            <div className='flex flex-col gap-2 mt-2'>
            <label for="message" className='px-2'>Your Message</label>
            <textarea 
            placeholder='Write your message here...'
            margin="dense"
            id='message'
            type='text'
            name="message"
            value={state.message}
            onChange={handleChange}
            fullWidth
            className='h-[80px] p-2'
            />
            </div>  
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>setOpenContact(false)} color="primary">
               Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={isInvalid} type="submit" color="primary">
               Submit
            </Button>
          </DialogActions>
        </Dialog>
      
    </div>
  )
}

export default Contact
