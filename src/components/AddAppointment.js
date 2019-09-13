import React, { Component } from "react";

class AddAppointment extends Component {
  //refs
  petNameRef = React.createRef();
  ownerNameRef = React.createRef();
  dateRef = React.createRef();
  timeRef = React.createRef();
  symptomsRef = React.createRef();
  state = {};
  createNewAppointment = e => {
    e.preventDefault();
    console.log(this.petNameRef.current.value);
    console.log(this.ownerNameRef.current.value);
    console.log(this.dateRef.current.value);
    console.log(this.timeRef.current.value);
    console.log(this.symptomsRef.current.value);
    this.props.createAppointment();
  };
  render() {
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Add appointment here</h2>
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
              <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
              <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                <input
                  ref={this.dateRef}
                  type="date"
                  className="form-control"
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
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
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddAppointment;
