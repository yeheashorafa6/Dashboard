"use client";
import React, { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function BigCalender() {
  const [view, setView] = useState(Views.WORK_WEEK);
  const handleView = (selectedView) => {
    setView(selectedView);
  };
  // console.log(calendarEvents);

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();

  const minTime = new Date(currentYear, currentMonth, currentDate, 8, 0); // الساعة 8:00 صباحًا
  const maxTime = new Date(currentYear, currentMonth, currentDate, 17, 0); // الساعة 5:00 مساءً
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleView}
      min={minTime}
      max={maxTime}
    />
  );
}

export default BigCalender;
