import React, { Component } from "react";
import PropTypes from "prop-types";
class Appointment extends Component {
  deleteAppointment = () => {
    this.props.deleteAppointment(this.props.info.id);
  };
  render() {
    const { pet, owner, date, time, symptoms } = this.props.info;
    return (
      <div className="media mt-3">
        <div className="media-body">
          <h3 className="mt-0">{pet}</h3>

          <p className="card-text">
            <span>Owner name: </span>
            {owner}
          </p>

          <p className="card-text">
            <span>Date: </span>
            {date}
          </p>

          <p className="card-text">
            <span>Time: </span>
            {time}
          </p>

          <p className="card-text">
            <span>Symptoms: </span>
          </p>

          <p className="card-text">{symptoms}</p>

          <button className="btn btn-danger" onClick={this.deleteAppointment}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

Appointment.propTypes = {
  info: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    pet: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    symptoms: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }),
  deleteAppointment: PropTypes.func.isRequired
};
export default Appointment;
