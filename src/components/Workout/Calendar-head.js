import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
 

const CalendarHead = (props) => {
    const { allMonths, setMonth, toggleMonthSelect, currentMonth, currentYear, showMonthTable } = props;

    const renderMonths = allMonths.map((month, index) => (
        <div
            className="cursor-pointer p-2 text-center hover:bg-gray-100"
            key={index}
            onClick={() => setMonth(month)}
        >
            {month}
        </div>
    ));

    return (
        <div className="w-full mx-auto">
            <div className="grid grid-cols-8 gap-2 items-center font-bold sm:text-xl">
                <div
                    className="p-4 flex items-center cursor-pointer col-start-3 col-span-1 w-full hover:bg-gray-100"
                    onClick={() => toggleMonthSelect()}
                >
                    {currentMonth()}
                    <ArrowDropDownIcon className="inline-block ml-2" />
                </div>
                <div className="col-span-1 col-end-7 text-center">{currentYear()}</div>
            </div>
            {showMonthTable && (
                <div className="font-bold text-center p-2 bg-gray-100">Select a month</div>
            )}
            {showMonthTable && (
                <div className="grid grid-cols-3 gap-2 justify-center items-center">
                    {renderMonths}
                </div>
            )}
        </div>
    );
};

export default CalendarHead;
