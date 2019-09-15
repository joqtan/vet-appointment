import React, { Component } from "react";
import Header from "./components/Header";
import AddAppointment from "./components/AddAppointment";
import AppointmentsList from "./components/AppointmentsList";
class App extends Component {
  state = {
    appointments: []
  };

  componentDidMount() {
    const appointmentsLS = localStorage.getItem("appointments");
    if (appointmentsLS) {
      this.setState({
        appointments: JSON.parse(appointmentsLS)
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      "appointments",
      JSON.stringify(this.state.appointments)
    );
  }

  createAppointment = newAppointment => {
    const appointments = [...this.state.appointments, newAppointment];
    this.setState({
      appointments
    });
  };

  deleteAppointment = id => {
    const currentAppointments = [...this.state.appointments];
    const appointments = currentAppointments.filter(
      appointment => appointment.id !== id
    );
    this.setState({
      appointments
    });
  };

  render() {
    return (
      <div className="container">
        <Header title={"Vet Administrator"} />
        <div className="row">
          <div className="col-md-6">
            <AddAppointment createAppointment={this.createAppointment} />
          </div>
          <div className="col-md-6">
            <AppointmentsList
              appointments={this.state.appointments}
              deleteAppointment={this.deleteAppointment}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
