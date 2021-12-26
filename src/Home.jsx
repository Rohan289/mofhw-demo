import React, { Fragment } from 'react';
import '../App.scss';
import axios from 'axios';
import Table from './Table.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      covidStateData : []
    }
  }
  componentDidMount() {
    axios.get(`${process.env.BACKEND_BASE_URL}/list_covid_state_wise`).then(response => {
      this.setState({
        covidStateData : response.data
      })
    })
  }

  render() {
  return (
    <Fragment>
      {this.state.covidStateData && this.state.covidStateData.length > 0 ? (
      <Table tableData={this.state.covidStateData}
        headingColumns={['Name of State', 'Total active case', 'Active case changes', 'Cumulative Discharged', 'Discharged case changes', 'Cumulative Deaths','Death case changes']}
        title="COVID Data State Wise"
        />
      ) : <><p>Loading!!!</p></>}
    
      
    </Fragment>
  );
}
}

export default Home;
