import React, { Component } from "react";
import Appointment from "./Appointment";
import PropTypes from "prop-types";
class AppointmentsList extends Component {
  render() {
    const appointments = this.props.appointments;
    const message =
      Object.keys(appointments).length === 0
        ? "No appointments yet"
        : "Manage your appointments here";
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">{message}</h2>
          <div className="appointment-list">
            {Object.keys(this.props.appointments).map(appointment=>(
                <Appointment
                    key={appointment}
                    info={this.props.appointments[appointment]}
                    deleteAppointment={this.props.deleteAppointment}
                />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

AppointmentsList.propTypes={
    appointments : PropTypes.array.isRequired,
    deleteAppointment : PropTypes.func.isRequired 
}
export default AppointmentsList;
