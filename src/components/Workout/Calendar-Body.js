import React from 'react';

const CalendarBody = (props) => {

    const {
        firstDayOfMonth,
        daysInMonth,
        currentDay,
        currentMonth,
        currentMonthNum,
        selectedDay,
        activeDays,
        setSelectedDay,
        actualMonth,
        weekdays
    } = props;


    const blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blanks.push(<div key={i}></div>);
    }

    const shortenWeekdays = (day) => {
        // Map full day names to their short versions
        const shortNames = {
            Sunday: 'Sun',
            Monday: 'Mon',
            Tuesday: 'Tue',
            Wednesday: 'Wed',
            Thursday: 'Thu',
            Friday: 'Fri',
            Saturday: 'Sat',
        };
        return shortNames[day];
    };

    const monthDays = [];
    for (let d = 1; d <= daysInMonth(); d++) {
        let currDay = '';
        let selectDay = '';
        let activeDay = '';

        // Check if day is today
        if (currentDay() === d && currentMonth() === actualMonth()) currDay = 'bg-black text-white';
        console.log(currentDay());
        console.log(actualMonth());
        

        // Check if day is selected day
        if (selectedDay.day === d && currentMonthNum() === selectedDay.month) selectDay = 'text-white bg-blueLight-sky3 shadow-md';

        // Check if day found in this month active days
        const formattedDate = `${d}-${currentMonthNum()}`;
        if (activeDays.indexOf(formattedDate) !== -1) activeDay = 'bg-green-300 text-white rounded-full shadow-md';

        monthDays.push(
            <div
                key={d}
                className={`py-1 cursor-pointer ${currDay} ${selectDay} ${activeDay}`} 
                onClick={() => setSelectedDay(d)}
            >
                {d}
            </div>
        ); 
    }

    const totalSlots = [...blanks, ...monthDays];

    return (
        <div className="grid grid-cols-7 gap-1 md:gap-y-4 justify-center items-center shadow-md p-5 mx-4 mb-2">
            {weekdays.map((day, i) => (
                <div key={i} className="sm:font-bold font-semibold text-sm text-center ">
                    <span className="hidden sm:inline">{day}</span>
                    <span className="sm:hidden">{shortenWeekdays(day)}</span>
                </div>
            ))}
            
            {totalSlots.map((slot, i) => (
                <div key={i} className="text-center hover:bg-gray-100 sm:text-xl">{slot}</div>
            ))}
        </div>
    );
};
export default CalendarBody;
