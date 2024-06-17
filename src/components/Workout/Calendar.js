import React,{useState,useEffect,useCallback} from 'react'
import moment from 'moment';
import { database } from '../firebase/FirebaseConfig';
import { ref,query, orderByChild, equalTo, onValue } from 'firebase/database';

import Snackbar from '@mui/material/Snackbar';


import CalendarBody from './Calendar-Body';
import CalendarHead from './Calendar-head';

import AddActivity from './AddActivity';
import EditActivity from './EditActivity';
import ActivityList from './ActivityList/ActivityList';

const Calendar = (props) => {

  const authUser=props.authData;

  let defaultSelectedDay = {
    day: moment().format("D"),
    month: moment().month()
};

/*** HOOKS ***/
const [dateObject, setdateObject] = useState(moment());
const [showMonthTable, setShowMonthTable] = useState(false);
const [selectedDay, setSelected] = useState(defaultSelectedDay);
// Later add hook for active days from database


/*** CALENDAR HEAD ***/
const allMonths = moment.months();
const currentMonth = () => dateObject.format("MMMM");
const currentYear = () => dateObject.format("YYYY");

const setMonth = month => {
    let monthNo = allMonths.indexOf(month);
    let newDateObject = Object.assign({}, dateObject);
    newDateObject = moment(dateObject).set("month", monthNo);
    setdateObject(newDateObject);
    setShowMonthTable(false);
}

const toggleMonthSelect = () => setShowMonthTable(!showMonthTable);

/*** CALENDAR BODY ***/
const setSelectedDay = day => {
    setSelected({
            day,
            month: currentMonthNum()
    });
     // Later refresh data
};

const currentMonthNum = () => dateObject.month();
const daysInMonth = () => dateObject.daysInMonth();
const currentDay = () => dateObject.format("D");
const actualMonth = () => moment().format("MMMM");

const firstDayOfMonth = () => moment(dateObject).startOf("month").format("d");

/*** ADDING AN ACTIVITY ***/
const [openSnackbar, setOpenSnackbar] = useState(false);
const [snackbarMsg, setSnackbarMsg] = useState(null);


/*** ACTIVITY LIST ***/
const [activities, setActivities] = useState(true);
const [loading, setLoading] = useState([]);
const [activeDays, setActiveDays] = useState([]);


const retrieveActiveDays = useCallback(() => {
    let refData = ref(database, `Users/${authUser.uid}/activities`);
    onValue(refData, snapshot => {
      let data = snapshot.val();
      if (data) {
        const values = Object.values(data);
        // Store all active day/month combinations in array for calendar
        const arr = values.map(obj => {
          if (obj.date) {
            return obj.date.length === 8
              ? obj.date.slice(0, 3)
              : obj.date.slice(0, 4)
          } else {
            return '';
          }
        }).filter(date => date !== '');
        console.log(arr);
        setActiveDays(arr);
      } else {
        setActiveDays([]);
      }
    });
  }, [authUser.uid]);

const retrieveData = useCallback(() => {
    let queryDate = `${selectedDay.day}-${selectedDay.month}-${selectedDay.year}`;

    let refData = ref(database, `Users/${authUser.uid}/activities`);
    let queryRef = query(refData, orderByChild('date'), equalTo(queryDate));
    onValue(queryRef, snapshot => {
      let data = snapshot.val();
      setActivities(data ? data : {});
      setLoading(false);
    });

    // Update active days
    retrieveActiveDays();
  }, [authUser.uid, selectedDay, retrieveActiveDays]);


useEffect(() => {
    retrieveData();
}, [retrieveData]);

/*** EDIT AN ACTIVITY ***/
const [editing, setEditing] = useState(false);
const [activity, setActivity] = useState(null);
const [activityKey, setActivityKey] = useState(null);

const editActivity = (activity, i) => {
    setActivityKey(Object.keys(activities)[i]);
    setEditing(true);
    setActivity(activity);
}


  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-2 my-4">
                    <CalendarHead
                        allMonths={allMonths}
                        currentMonth={currentMonth}
                        currentYear={currentYear}
                        setMonth={setMonth}
                        showMonthTable={showMonthTable}
                        toggleMonthSelect={toggleMonthSelect}
                    />
                    <CalendarBody 
                        firstDayOfMonth={firstDayOfMonth}
                        daysInMonth={daysInMonth}
                        currentDay={currentDay}
                        currentMonth={currentMonth}
                        currentMonthNum={currentMonthNum}
                        actualMonth={actualMonth}
                        setSelectedDay={setSelectedDay}
                        selectedDay={selectedDay}
                        weekdays={moment.weekdays()} 
                        activeDays={activeDays}
                    />
            </div>
            <div className=" flex flex-col justify-center gap-y-2 mx-4 my-4">
                    { editing
                        ?
                            <>
                                <h3 className="text-xl font-bold pl-3 py-2 shadow-md ">Edit Activity on {selectedDay.day}-{selectedDay.month + 1} </h3>
                                <EditActivity 
                                    activity={activity}
                                    activityKey={activityKey}
                                    selectedDay={selectedDay} 
                                    authUser={authUser}
                                    setEditing={setEditing}
                                    setOpenSnackbar={setOpenSnackbar}
                                    setSnackbarMsg={setSnackbarMsg}
                                />
                            </>
                        :
                            <>
                                <h3 className="text-xl font-semibold pl-3 py-2 shadow-md">Add Activity on {selectedDay.day}-{selectedDay.month + 1} </h3>
                                <AddActivity 
                                    selectedDay={selectedDay} 
                                    authUser={authUser}
                                    setOpenSnackbar={setOpenSnackbar}
                                    setSnackbarMsg={setSnackbarMsg}
                                />
                            </>
                    }
            </div>
            <div className='flex flex-col justify-center gap-y-3 md:col-span-2 m-3 p-4 '>  
                <h3 className="text-xl font-semibold pl-3 py-2 shadow-md">Activities on {selectedDay.day}-{selectedDay.month + 1}</h3>
                <ActivityList
                    loading={loading}
                    activities={activities}
                    authUser={authUser}
                    setOpenSnackbar={setOpenSnackbar}
                    setSnackbarMsg={setSnackbarMsg}
                    editActivity={editActivity}
                    setEditing={setEditing}
                />
            </div>
            <Snackbar 
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                open={openSnackbar} 
                message={snackbarMsg}
            />
        </div>
  )
}

export default Calendar
