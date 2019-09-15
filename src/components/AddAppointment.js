import React, { Component } from "react";
import uuid from "uuid";
import PropTypes from "prop-types";

class AddAppointment extends Component {
  //refs
  petNameRef = React.createRef();
  ownerNameRef = React.createRef();
  dateRef = React.createRef();
  timeRef = React.createRef();
  symptomsRef = React.createRef();
  state = {
    error: false
  };
  createNewAppointment = e => {
    e.preventDefault();

    const pet = this.petNameRef.current.value,
      owner = this.ownerNameRef.current.value,
      date = this.dateRef.current.value,
      time = this.timeRef.current.value,
      symptoms = this.symptomsRef.current.value;
    if (
      pet === "" ||
      owner === "" ||
      date === "" ||
      time === "" ||
      symptoms === ""
    ) {
      this.setState({
        error: true
      });
    } else {
      const newAppointment = {
        id: uuid(),
        pet,
        owner,
        date,
        time,
        symptoms
      };

      //Se envia newAppointment para actualizar el state
      this.props.createAppointment(newAppointment);
      //Reinicio del form
      e.currentTarget.reset();
      this.setState({
        error: false
      });
    }
  };
  render() {
    const errorExist = this.state.error;
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h1 className="card-title text-center mb-5">Add appointment here</h1>
          <form onSubmit={this.createNewAppointment}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Pet name
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  ref={this.petNameRef}
                  type="text"
                  className="form-control"
                  placeholder="Pet name"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Owner name
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  ref={this.ownerNameRef}
                  type="text"
                  className="form-control"
                  placeholder="Pet owner name"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Date
              </label>
              <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                <input
                  ref={this.dateRef}
                  type="date"
                  className="form-control"
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">
                Time
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  ref={this.timeRef}
                  type="time"
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Symptoms
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  ref={this.symptomsRef}
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div className="col-sm-3">
                <button type="submit" className="btn btn-success w-100">
                  Add ✔
                </button>
              </div>
            </div>
          </form>
          {errorExist ? (
            <div className="alert alert-danger text-center">
              All fields are required
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

AddAppointment.propTypes = {
  createAppointment: PropTypes.func.isRequired
};
export default AddAppointment;
