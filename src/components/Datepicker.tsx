import React from 'react'

import ReactHorizontalDatePicker from 'react-horizontal-strip-datepicker'
import DatePicker from "react-horizontal-datepicker";
import 'react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css'

const Datepicker = () => {
  const onSelectedDay = (d) => {
    console.log(d)
  }

  return (
    <ReactHorizontalDatePicker
      selectedDay={onSelectedDay}
      enableScroll={true}
      enableDays={50}
      enableDaysBefore={50}
    />
  )
}

export default Datepicker