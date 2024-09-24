import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const localizer = momentLocalizer(moment);

const AppointmentBooking = () => {
  const { name } = useParams();
  const [events, setEvents] = useState([]);
  const [message, setMessage] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:8000/appointments/');
        const formattedEvents = response.data.map(appointment => ({
          id: appointment.id,
          title: `${appointment.client} with ${appointment.stylist} - ${appointment.style}`,
          start: new Date(appointment.start_time),
          end: new Date(appointment.end_time),
          client: appointment.client,
          stylist: appointment.stylist,
          style: appointment.style,
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const handleSelectSlot = async ({ start, end }) => {
    const client = window.prompt('Enter client name:');
    const stylist = window.prompt('Enter stylist name:');
    const style = decodeURIComponent(name);

    if (client && stylist) {
      const newAppointment = {
        start_time: start.toISOString(),
        end_time: end.toISOString(),
        client,
        stylist,
        style,
      };

      try {
        const response = await axios.post('http://localhost:8000/appointments/', newAppointment);
        const savedAppointment = response.data;
        setEvents(prevEvents => [...prevEvents, {
          id: savedAppointment.id,
          title: `${savedAppointment.client} with ${savedAppointment.stylist} - ${savedAppointment.style}`,
          start: new Date(savedAppointment.start_time),
          end: new Date(savedAppointment.end_time),
        }]);
        setMessage({ type: 'success', text: 'Appointment booked successfully!' });
      } catch (error) {
        console.error('Error saving appointment:', error);
        setMessage({ type: 'error', text: 'Failed to book appointment. Please try again.' });
      }
    }
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Book an Appointment for {decodeURIComponent(name)}</h2>
      {message && (
        <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
          {message.text}
        </div>
      )}
      <div className="card">
        <div className="card-body">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            min={new Date(0, 0, 0, 8, 0, 0)}
            max={new Date(0, 0, 0, 18, 0, 0)}
            step={60}
            timeslots={1}
            selectable
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
            defaultView="week"
            views={['week', 'day']}
          />
        </div>
      </div>
      {selectedEvent && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Appointment Details</h5>
                <button type="button" className="close" onClick={closeEventDetails}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p><strong>Client:</strong> {selectedEvent.client}</p>
                <p><strong>Stylist:</strong> {selectedEvent.stylist}</p>
                <p><strong>Style:</strong> {selectedEvent.style}</p>
                <p><strong>Start:</strong> {selectedEvent.start.toLocaleString()}</p>
                <p><strong>End:</strong> {selectedEvent.end.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentBooking;
