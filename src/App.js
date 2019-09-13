import React, {Component} from 'react'
import Header from './components/Header'
import AddAppointment from './components/AddAppointment'
class App extends Component {

  createAppointment=()=>{
    
  }

  render(){
    return (
      <div className="container">
        <Header titulo={'Vet Administrator'}/>
        <div className="row">
            <div className="col-md-6">
              <AddAppointment
                createAppointment={this.createAppointment}
              />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
