import React from 'react';
import BookingForm from './BookingForm';

const Booking = (props) => {
  return (
  <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForme={props.SubmitForme}/>
  );
}

export default Booking;
