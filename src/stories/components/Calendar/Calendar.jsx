import React, { useEffect, useState } from 'react';
import styles from "./Calendar.module.css";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [days, setDays] = useState([]);

    useEffect(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

       
        const totalDays = new Date(year, month + 1, 0).getDate();
       
        const firstDay = new Date(year, month, 1).getDay();

       
        const adjustedFirstDay = firstDay === 0 ? 7: firstDay;

        
        const daysArray = Array.from({ length: adjustedFirstDay - 1 }, () => null)
            .concat(Array.from({ length: totalDays }, (_, i) => i + 1));

        setDays(daysArray);
    }, [currentDate]);

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    const today = new Date();

    const daysOfWeek = ["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"];

    return (
        <div className={styles.calendar}>
            <div className={styles.header}>
                <button onClick={prevMonth}>Föregående</button>
                <h2>{currentDate.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
                <button onClick={nextMonth}>Nästa</button>
            </div>
            
            {/* Veckodagar */}
            <div className={styles.weekdays}>
                {daysOfWeek.map((day) => (
                    <div key={day} className={styles.weekday}>{day}</div>
                ))}
            </div>

            <div className={styles.dates}>
                {days.map((day, index) => (
                   <div 
                   key={index} 
                   className={`${styles.calendarDay} ${day === today.getDate() && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear() ? styles.currentDate : ''}`}
               >
                   {day || ""}
               </div>
               
                ))}
            </div>
        </div>
    );
};

export default Calendar;

