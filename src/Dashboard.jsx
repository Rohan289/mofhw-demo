import React from 'react';
import Home from './Home.jsx';
import { Card, Col, Row } from 'antd';
import '../App.scss';
import 'antd/dist/antd.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            showCovidState: false
        }
    }
    render() {
        return(
            <>
            <Row>
                <Col lg={8} xs={24} sm={24}>
            <article className='article-card-blue'>
            <Row>
          <Col span={24}>
            <h6 className='h6-card'>{'Active'}</h6>
          </Col>
          <Col span={24}>
            <h6 className='h6-card'>{'480290'}</h6>
          </Col>
          </Row>
          </article>
          </Col>
          <Col lg={8} xs={24} sm={24}>
          <article className='article-card-green'>
            <Row>
          <Col span={24}>
            <h6 className='h6-card'>{'Discharged'}</h6>
          </Col>
          <Col span={24}>
            <h6 className='h6-card'>{'480290'}</h6>
          </Col>
          </Row>
          </article>
            </Col>
            <Col lg={8} xs={24} sm={24}>
          <article className='article-card-red'>
            <Row>
          <Col lg={24} xs={12}>
            <h6 className='h6-card'>{'Deaths'}</h6>
          </Col>
          <Col span={24}>
            <h6 className='h6-card'>{'480290'}</h6>
          </Col>
          </Row>
          </article>
            </Col>
            <Col lg={24} xs={24} sm={24}>
          <article className='article-card-total-vaccination'>
            <Row>
          <Col>
            <h6 style={{color : "white", textAlign : "center"}} className='h6-card'>{'Total Vaccination 1,42,46,81,736'}</h6>
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