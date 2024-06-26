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
        reps: activity.reps,
        sets: activity.sets,
        weight: activity.weight,
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

    const handleSlider = (e,value) => {
        setNewActivity({...newActivity, duration: value});
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
                        <MenuItem value={1}>Cardio</MenuItem>
                        <MenuItem value={2}>Chest</MenuItem>
                        <MenuItem value={3}>Triceps</MenuItem>
                        <MenuItem value={4}>Back</MenuItem>
                        <MenuItem value={5}>Biceps</MenuItem>
                        <MenuItem value={6}>Leg</MenuItem>
                        <MenuItem value={7}>Shoulder</MenuItem>
                        <MenuItem value={8}>Cycling</MenuItem>
                        <MenuItem value={9}>Yoga</MenuItem>
                    </Select>
                </div>
                <div className='flex justify-evenly items-center gap-x-2 w-full my-[20px]'>
                    <div className=''>
                    <Typography id="discrete-slider" gutterBottom>
                       Reps
                    </Typography>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="reps"
                    value={activity.reps}
                    onChange={handleChange}
                    className='w-[90px] [400px]:w-[100px] h-[50px]'
                    >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={40}>40</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={60}>60</MenuItem>
                        <MenuItem value={70}>70</MenuItem>
                        <MenuItem value={80}>80</MenuItem>
                        <MenuItem value={90}>90</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                    </div>

                    <div>
                    <Typography id="discrete-slider" gutterBottom>
                       Sets
                    </Typography>
                    <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     name="sets"
                     value={activity.sets}
                     onChange={handleChange}
                     className='w-[90px] [400px]:w-[100px] h-[50px]'
                    >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                    </Select>
                    </div>

                    <div>
                      <Typography id="discrete-slider" gutterBottom>
                        Weight(kg)
                      </Typography>
                      <div className='border-[1px] rounded-md border-gray-400 '>
                        <input 
                        name="weight"
                        type="number"
                        value={activity.weight}
                        onChange={handleChange}
                        defaultValue={activity.weight}
                        className='w-[90px] [400px]:w-[100px] h-[50px] pl-3 py-2'
                      />
                      </div>
                    </div>

                </div>
                <Typography id="discrete-slider" gutterBottom>
                    Duration(min)
                </Typography>
                <Slider
                    defaultValue={parseInt(newActivity.duration)}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={5}
                    marks
                    min={10}
                    max={180}
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
