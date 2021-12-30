import React, { Fragment } from 'react';
import '../public/App.scss';
import axios from 'axios';
import Table from './Table.js';
import HeatMap from './HeatMap.jsx';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
      // <Table tableData={this.state.covidStateData}
      //   headingColumns={['Name of State', 'Total Active Cases', 'New Active Cases', 'Cumulative Discharged', 'New Discharged Cases', 'Cumulative Deaths','New Death Cases']}
      //   title="COVID Data State Wise"
      //   />
      <Loader
        style={{display : "flex",flexDirection : "row", justifyContent : "center"}}
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={300000} //3 secs
      />
      ) : <>
      <Loader
        style={{display : "flex",flexDirection : "row", justifyContent : "center"}}
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={300000} //3 secs
      />
    );

     </>}
      <HeatMap covidData={this.state.covidStateData} />
      
    </Fragment>
  );
}
}

export default Home;
