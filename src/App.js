import React, { Component } from "react";
import Header from "./components/Header";
import AddAppointment from "./components/AddAppointment";
class App extends Component {
  state = {
    appointments: []
  };

  createAppointment = newAppointment => {
    console.log(newAppointment);
    const appointments = [...this.state.appointments, newAppointment];
    console.log(appointments);
    this.setState({
      appointments
    });
  };

  render() {
    return (
      <div className="container">
        <Header titulo={"Vet Administrator"} />
        <div className="row">
          <div className="col-md-6">
            <AddAppointment createAppointment={this.createAppointment} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
