import React, { useEffect, useState } from 'react';
import styles from "./Calendar.module.css";
import ArrowIcon from './ArrowIcon';
import ArrowIconLeft from './ArrowIconLeft';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [days, setDays] = useState([]);
    const [selectedDay, setSelectedDay] = useState(null);  // För att spåra den valda dagen

    useEffect(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const totalDays = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        const adjustedFirstDay = firstDay === 0 ? 7 : firstDay;

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

    
    const appointments = {
        "2024-09-13": "möte kl 12:00",
        "2024-09-27": "Träning kl 07:00",
        "2024-09-28": "tandläkare kl 15:30",
    };

    const formatDate = (year, month, day) => {
        const formattedMonth = String(month + 1).padStart(2, '0');  // Formatera månaden till två siffror tex 09  september istääket för 9
        const formattedDay = String(day).padStart(2, '0');    // Formatera dagen till två siffror 2024-09-28 
        return `${year}-${formattedMonth}-${formattedDay}`;
    };

    
    const handleDayClick = (day) => {
        const selectedDate = formatDate(currentDate.getFullYear(), currentDate.getMonth(), day);
        const info = appointments[selectedDate] || "";

       
        if (selectedDay && selectedDay.day === day) {
            setSelectedDay(null);
        } else if (info) {
           
            setSelectedDay({ date: selectedDate, info, day });
        } else {
           
            setSelectedDay(null);
        }
    };

    return (
        <div className={styles.calendar}>
            <div className={styles.header}>
                <button className={styles.prevButton} onClick={prevMonth}>
                    <ArrowIconLeft/>
                </button>
                <h2>{currentDate.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
                <button className={styles.nextButton} onClick={nextMonth}>
                    <ArrowIcon />
                </button>
            </div>

            {/* det här är Veckodagar */}
            <div className={styles.weekdays}>
                {daysOfWeek.map((day) => (
                    <div key={day} className={styles.weekday}>{day}</div>
                ))}
            </div>

            {/* det här är Datum */}
            <div className={styles.dates}>
                {days.map((day, index) => {
                    const selectedDate = formatDate(currentDate.getFullYear(), currentDate.getMonth(), day);
                    const hasAppointment = appointments[selectedDate];

                    return (
                        <div key={index} 
                            className={`${styles.calendarDay} ${day === today.getDate() && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear() ? styles.currentDate : ''}`}
                            onClick={() => day && handleDayClick(day)} 
                        >
                            {day || ""}
                           
                            {hasAppointment && <div className={styles.Dot}></div>}
                          
                            {selectedDay && selectedDay.day === day && (
                                <div className={styles.popup}>
                                    <p>{selectedDay.info}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Calendar;

