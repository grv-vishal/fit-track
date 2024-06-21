import React,{useContext,useState} from 'react';
import { AppContext } from '../firebase/AppContext';


import { Button,TextField,Select,FormControl,Slider,Typography,MenuItem } from '@mui/material';

const AddActivity = (props) => {

    const {addActivity}=useContext(AppContext);

    const {authUser, selectedDay, setOpenSnackbar, setSnackbarMsg} = props;
    const uid = authUser.uid;

    // Set query date for updating database
    selectedDay.year = new Date().getFullYear();
    let queryDate = `${selectedDay.day}-${selectedDay.month}-${selectedDay.year}`;


    const defaultActivity = {
        name: '',
        type: 1,
        duration: 60,
        date: queryDate
    }

    const [activity, setActivity] = useState(defaultActivity);

    const handleChange = e => {
        const { name, value } = e.target
        setActivity({
            ...activity, 
            date: queryDate,
            [name]: value});
    }

    const handleSlider = (e,value) => {
        
        setActivity({...activity, duration: value});
    }

    const isValid = activity.name === '';

  
    const handleSubmit = () => {
        if (authUser) {
            addActivity(uid, activity);
            setActivity(defaultActivity);
           
            setOpenSnackbar(true);
            setSnackbarMsg('Activity Added');
            setTimeout(() => {
                setOpenSnackbar(false)
            }, 3000)
        }
    }
  return (
    <form noValidate onSubmit={e => e.preventDefault()} className="shadow-md p-3">
            <FormControl style={{minWidth:'100%'}}>
                <TextField
                    style={{marginTop: '5px'}}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Activity name"
                    value={activity.name}
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
                        value={activity.type}
                        style={{minWidth: '100%'}}
                        name="type"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Cardio</MenuItem>
                        <MenuItem value={2}>Chest</MenuItem>
                        <MenuItem value={3}>Triceps</MenuItem>
                        <MenuItem value={4}>Back</MenuItem>
                        <MenuItem value={5}>Biceps</MenuItem>
                        <MenuItem value={6}>Leg</MenuItem>
                        <MenuItem value={7}>Shoulder</MenuItem>
                        <MenuItem value={8}>Abs</MenuItem>
                        <MenuItem value={9}>Cycling</MenuItem>
                        <MenuItem value={10}>Yoga</MenuItem>
                    </Select>
                </div>
                <Typography id="discrete-slider" gutterBottom>
                    Duration
                </Typography>
                <Slider
                    defaultValue={activity.duration}
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
                onClick={handleSubmit}
                disabled={isValid}
            >
            Add activity
            </Button>
        </form>
  )
}

export default AddActivity
