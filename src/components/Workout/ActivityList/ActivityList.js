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
            <div className='grid grid-cols-4 justify-center font-semibold pb-2 border-b-2 text-[16px]'>
              <div>Name</div>
              <div>Type</div>
              <div>Duration</div>
              <div>Actions</div>
            </div> 
            
              {
                Object.values(activities).map((activity, i) => {
                    let {name, type, duration} = activity;
                    switch(activity.type) {
                        case 1:
                                  type = "Lifting weights";
                                  break;
                        case 2:
                                  type = "Running";
                                  break;
                        case 3:
                                  type = "Cycling";
                                  break;
                        default:
                                  type = "Not set";
                    };
                    return (
                          <div className='grid grid-cols-4 justify-center items-center pb-2'>
                                  <div>{name}</div>
                                  <div>{type}</div>
                                  <div>{duration}</div>
                                  <div >
                                      <DeleteIcon 
                                          onClick={e => deleteActivity(i)}
                                      />
                                      <EditIcon
                                          onClick={e => editActivity(activity, i)}
                                          style={{marginLeft:"20px"}}
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
