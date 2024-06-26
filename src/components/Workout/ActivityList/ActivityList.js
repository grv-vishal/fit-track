import React,{useContext} from 'react';
import { AppContext } from '../../firebase/AppContext';
import loader from './loader.gif';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ActivityList = (props) => {

  const {updateActivity}=useContext(AppContext);

  const {loading, activities, editActivity,setOpenSnackbar, setSnackbarMsg, setEditing} = props;

  const deleteActivity = (i) => {
      // Get key of activity in firebase
     const activityKey = Object.keys(activities)[i];
  
     const emptyActivity = {
          date: null,
          duration: null,
          type: null,
          name: null,
          reps:null,
          sets:null,
          weight:null,
     };

     updateActivity(props.authUser.uid, emptyActivity, activityKey);

     setOpenSnackbar(true);
     setSnackbarMsg('Activity Deleted ');
     setTimeout(() => {
      setOpenSnackbar(false)
     }, 3000)

     setEditing(false);
  }
  return (
    <div>
    { 
      loading === true 
          ? <img src={loader} alt={loader}></img> 
          : ''
   }
  
   {
      activities === 'not set' || activities === null
          ? <p>No activities added yet.</p>
          :
          <div className='flex flex-col justify-center gap-y-2 p-3 shadow-md'>     
            <div className='grid grid-cols-1 [@media(min-width:540px)]:grid-cols-7 gap-2 justify-center items-center font-semibold pb-2 border-b-2 text-[16px]'>
              <div className='grid  grid-cols-5 [@media(min-width:540px)]:grid-cols-6 justify-center items-center col-span-5 [@media(min-width:540px)]:col-span-6 gap-x-1'>
               <div>Name</div>
               <div>Type</div>
               <div>Reps</div>
               <div>Sets</div>
               <div>Weight</div>
               <div className='hidden [@media(min-width:540px)]:grid'>Duration</div>
              </div>     
              <div className='hidden [@media(min-width:540px)]:grid'>Actions</div>
            </div> 
            
              {
                Object.values(activities).map((activity, i) => {
                    let {name, type,reps,sets,weight, duration} = activity;
                    switch(activity.type) {
                        case 1:
                                  type = "Cardio";
                                  break;
                        case 2:
                                  type = "Chest";
                                  break;
                        case 3:
                                  type = "Triceps";
                                  break;
                        case 4:
                                  type = "Back";
                                  break;
                        case 5:
                                  type = "Biceps";
                                  break;
                        case 6:
                                  type = "Leg";
                                  break; 
                        case 7:
                                  type = "Shoulder";
                                  break; 
                        case 8:
                                  type = "Abs";
                                  break;    
                        case 9:
                                  type = "Cycling";
                                  break;
                        case 10:
                                  type="Yoga";
                                  break;                          
                        default:
                                  type = "Not set";
                    };
                    return (
                          <div className='grid grid-cols-1 [@media(min-width:540px)]:grid-cols-7 justify-center items-center pb-2'>
                                <div className='grid grid-cols-5 [@media(min-width:540px)]:grid-cols-6 justify-center items-center col-span-5 [@media(min-width:540px)]:col-span-6 gap-x-1'>
                                  <div>{name}</div>
                                  <div>{type}</div>
                                  <div>{reps}</div>
                                  <div>{sets}</div>
                                  <div>{weight} kg</div>
                                  <div className='hidden [@media(min-width:540px)]:grid'>{duration} min</div>
                                </div>
                                  
                                  <div className='flex justify-center items-center gap-x-2 py-4' >
                                      <DeleteIcon 
                                          onClick={e => deleteActivity(i)}
                                          style={{cursor:"pointer"}}
                                      />
                                      <EditIcon
                                          onClick={e => editActivity(activity, i)}
                                          style={{cursor:"pointer"}}
                                      />
                                  </div>
                          </div>
                    );
                })
              }
          </div>
  }
</div>
  )
}

export default ActivityList
