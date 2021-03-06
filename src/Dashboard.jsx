import React from 'react';
import Home from './Home.jsx';
import { Card, Col, Row } from 'antd';
import '../public/App.scss';
import 'antd/dist/antd.css';
import axios from 'axios';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            showCovidState: false,
            dashboardData : null
        }
    }
    componentDidMount() {
        axios.get(`${process.env.BACKEND_BASE_URL}/get_national_covid_details`).then(response => {
            this.setState({
              dashboardData : response.data
            })
    })
}

    render() {
        const {dashboardData} = this.state;
        return(
            <>
            <Row>
                <Col lg={8} xs={24} sm={24}>
            <article className='article-card-blue'>
            <Row>
          <Col lg={24} xs={8}>
            <h6 className='h6-card'>{'Active'}</h6>
          </Col>
          <Col lg={24} xs={16}>
          <div style={{display : "flex",flexDirection : "row"}}>
            <h6 className='h6-card'>{`${dashboardData ? dashboardData.current_active  : ''}`}</h6>
            &nbsp;
            <h6 style={{color : "red",fontWeight : "bold",display : "flex"}} className='h6-card'>
              {`${dashboardData ? ` (${dashboardData.new_active}) ` : ''}`}
              <i style={{color : "red", display : "flex",flexDirection : "column", justifyContent : "center", fontSize : "32px"}} class="fa fa-arrow-up" aria-hidden="true"></i>
              </h6>
            </div>
          </Col>
          </Row>
          </article>
          </Col>
          <Col lg={8} xs={24} sm={24}>
          <article className='article-card-green'>
            <Row>
          <Col lg={24} xs={8}>
            <h6 className='h6-card'>{'Discharged'}</h6>
          </Col>
          <Col lg={24} xs={16}>
          <div style={{display : "flex",flexDirection : "row"}}>
            <h6 className='h6-card'>{`${dashboardData ? dashboardData.current_discharged : ''}`}</h6>
            &nbsp;
            <h6 style={{color : "green",fontWeight : "bold",display : "flex"}} className='h6-card'>
              {`${dashboardData ? ` (${dashboardData.new_discharged}) ` : ''}`}
              <i style={{color : "green", display : "flex",flexDirection : "column", justifyContent : "center", fontSize : "32px"}} class="fa fa-arrow-up" aria-hidden="true"></i>
              </h6>
            </div>
          </Col>
          </Row>
          </article>
            </Col>
            <Col lg={8} xs={24} sm={24}>
          <article className='article-card-red'>
            <Row>
          <Col lg={24} xs={8}>
            <h6 className='h6-card'>{'Deaths'}</h6>
          </Col>
          <Col lg={24} xs={16}>
          <div style={{display : "flex",flexDirection : "row"}}>
            <h6 className='h6-card'>{`${dashboardData ? dashboardData.current_death : ''}`}</h6>
            &nbsp;
            <h6 style={{color : "red",fontWeight : "bold",display : "flex"}} className='h6-card'>{`${dashboardData ? ` (${dashboardData.new_death}) ` : ''}`}
            <i style={{color : "red", display : "flex",flexDirection : "column", justifyContent : "center", fontSize : "32px"}} class="fa fa-arrow-up" aria-hidden="true"></i>
            </h6>
            </div>
          </Col>
          </Row>
          </article>
            </Col>
            <Col lg={24} xs={24} sm={24}>
          <article className='article-card-total-vaccination'>
            <Row>
          <Col>
          <div style={{display : "flex",flexDirection : "row"}}>
            <h6 style={{color : "white"}} className='h6-card'>{`Total Vaccination ${dashboardData ? `${dashboardData.total_vaccination}` : ''}`}</h6>
            &nbsp;
            <h6 className='h6-card-yellow'>{`${dashboardData ? `(${dashboardData.new_vaccination})` : ''}`}</h6>
            </div>
          </Col>
          </Row>
          </article>
            </Col>
            </Row>
          <Home />
            </>
        )
    }
}
export default Dashboard;