import React, { useState } from "react";
import "../Calendar.css"; // You'll need to create a CSS file for styling

const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getCurrentMonthData = (year, month) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  return { firstDay, lastDay };
};

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const { firstDay, lastDay } = getCurrentMonthData(currentYear, currentMonth);

  const getDayClassName = (day) => {
    if (day === 1) return "current-month-day";
    if (day <= 7) return "previous-month-day";
    if (day > lastDay.getDate()) return "next-month-day";
    return "current-month-day";
  };

  const changeMonth = (increment) => {
    let newMonth = currentMonth + increment;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  return (
    <div className="calendar">
      <div className="header">
        <div className="month-year">
          {`${months[currentMonth]} ${currentYear}`}
        </div>
        <div className="month-buttons">
          <button onClick={() => changeMonth(-1)}>‹</button>
          <button onClick={() => changeMonth(1)}>›</button>
        </div>
      </div>
      <div className="days-of-week">
        {daysOfWeek.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
      <div className="dates">
        {Array.from({ length: firstDay.getDay() }, (_, index) => (
          <div
            key={`prev-${index}`}
            className={`date-box previous-month-day`}
          >
            {lastDay.getDate() - firstDay.getDay() + index + 1}
          </div>
        ))}
        {Array.from({ length: lastDay.getDate() }, (_, index) => (
          <div
            key={`current-${index}`}
            className={`date-box current-month-day`}
          >
            {index + 1}
          </div>
        ))}
        {Array.from({ length: 42 - lastDay.getDate() - firstDay.getDay() }, (_, index) => (
          <div
            key={`next-${index}`}
            className={`date-box next-month-day`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
