import React,{useContext,useState} from 'react';
import { AppContext } from '../firebase/AppContext';


import { Button,TextField,Select,FormControl,Slider,Typography,MenuItem } from '@mui/material';

const EditActivity = (props) => {

    const{ updateActivity }=useContext(AppContext);

    const {authUser,activity, activityKey, setEditing, setOpenSnackbar, setSnackbarMsg} = props;
    const uid = authUser.uid;

    // Set default activity object
    const defaultActivity = {
        name: activity.name,
        type: activity.type,
        duration: activity.duration,
        date: activity.date
    }

    const [newActivity, setNewActivity] = useState(defaultActivity);

    const handleChange = e => {
        const { name, value } = e.target
        setNewActivity({
            ...newActivity, 
            [name]: value});
    }

    const handleSlider = e => {
        const duration = e.target.getAttribute('aria-valuenow');
        setNewActivity({...newActivity, duration: duration});
    }

    const isValid = newActivity.name === '';

   
    const handleSubmit = action => {
        if (authUser) {
            updateActivity(uid, newActivity, activityKey);
            setEditing(false);
            
            setOpenSnackbar(true);
            setSnackbarMsg('Activity Updated');
            setTimeout(() => {
                setOpenSnackbar(false)
            }, 3000)
        };
    }

  return (
    <form noValidate onSubmit={e => e.preventDefault()}>
            <FormControl style={{minWidth:'100%'}}>
                <TextField
                    style={{marginTop: '5px'}}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={newActivity.name}
                    label="Activity name"
                    name="name"
                    onChange={handleChange}
                />
                <div style={{marginTop: '20px', marginBottom: '30px'}}>
                    <Typography id="discrete-slider" gutterBottom>
                        Type
                    </Typography>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={newActivity.type}
                        style={{minWidth: '100%'}}
                        name="type"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Lifting Weights</MenuItem>
                        <MenuItem value={2}>Running</MenuItem>
                        <MenuItem value={3}>Cycling</MenuItem>
                    </Select>
                </div>
                <Typography id="discrete-slider" gutterBottom>
                    Duration
                </Typography>
                <Slider
                    defaultValue={parseInt(newActivity.duration)}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={120}
                    name="duration"
                    onChange={handleSlider}
                    style={{marginBottom: '20px'}}
                />
            </FormControl>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => handleSubmit('add')}
                disabled={isValid}
            >
            Save activity
            </Button>
        </form>
  )
}

export default EditActivity
