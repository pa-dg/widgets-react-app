import { useState } from "react";


const DateTime = () => {
  const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "long",
      day: "numeric",
    };

  const today = new Date().toLocaleDateString('en-ca', options)
  console.log(today.split(","))
  
  return (
    <div className="datetime-widget">
      <p>{today}</p>
    </div>
  )
}

export default DateTime;