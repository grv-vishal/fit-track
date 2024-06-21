import React,{useState} from 'react'
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/FirebaseConfig';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent,DialogActions,DialogContentText } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';


const ForgetPassword = ({open,setOpen}) => {

    const[openAlert,setOpenAlert]=useState(false);
    const [state, setState] = useState({email: '', error: null});
    
    const isInvalid = state.email === '';

    const handleChange = e => {
      const {name, value} = e.target;
       setState({...state, [name]: value});
    }


    const handleSubmit = () => {
      sendPasswordResetEmail(auth,state.email)
        .then(() => {
          setState({email: '', error: null });
          setOpen(false);
          setOpenAlert(true);
       })
       .catch(error => {
         setState({ error });
      });
    };
    

    ///snackbar function
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };
    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

    

  return (
    <div>
      <Dialog open={open} onClose={()=>setOpen(false)} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Reset my password</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To reset your password, please enter your email address here. We will send you instructions on how to reset your password shortly after.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              fullWidth
            />
              {state.error && <p style={{color:'red'}}>There is no user record corressponding to this identifier. The user may have been deleted.</p>}
          
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>setOpen(false)} color="primary">
               Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={isInvalid} type="submit" color="primary">
               Reset password
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar 
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={openAlert} 
          autoHideDuration={5000} 
          onClose={handleClose}
          message="Password reset link succesfully sent"
          action={action}
        /> 
    </div>
  )
}

export default ForgetPassword
