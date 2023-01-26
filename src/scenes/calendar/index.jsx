import { useState } from "react";

import FullCalendar, { FormDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timegridPlugin from "@fullcalendar/timegrid";
import Interaction from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import Header from "../../components/Header";

import { tokens } from "../../theme";



const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [currentEvents, setCurrentEvents] = useState([])

    const handleDateClick = (selected) => {
        const title = prompt("Pease enter a new title for event")
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                 
            })
        }
    }


    return (
      <></>
  )
};

export default Calendar;
