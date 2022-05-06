import React from 'react'
import './Homepage.css'
import workSVG from './assets/01.svg';
import { Button, Input,Divider } from 'antd';
import userSVG from './assets/Group 211.svg';
import googleSVG from './assets/search (3) 1.svg';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  let navigate = useNavigate();
  
    return (
        <div className="App" >
        <div className="landing-head">
        <h1>DR CFO</h1>
        <h2>Connecting Better</h2>
      </div>
      <div className="landing-body">
        <div className="form-side" >
          <div className="form-side-inner-div">
            <div className="form-side-inner-div-header">
              <h1>Welcome!</h1>
              <p>Sign In by entering the information below</p>
            </div>
            <div className="form-inputs-box">
              <Input
                size="large"
                style={{ width: '100%' }}
                placeholder="Enter Phone Number"
                prefix={<img style={{ height: '16px', marginRight: '20px' }}
                src={userSVG} />} />
            </div>
            <div className="form-buttons-box">
                <div className="form-buttons-innerbox">
                  <Button onClick={() => {
                    navigate("/dashboard")
                }} className="form-button" style={{backgroundColor:'#1472E5',height:'48px'}} type="primary" block>Log in</Button>
                <Divider>or</Divider>
                <Button onClick={() => {
                  navigate("/dashboard")
              }} className="form-button" style={{height:'48px'}} block>Log in with   <img style={{marginLeft:'10px'}} src={googleSVG} /></Button>
                </div>
            </div>
          </div>
        </div>
        <div className="vector-side">
          <img style={{height: "100%",
          width: "100%"}} src={ workSVG}/>
        </div>
      </div>
    </div>
    )
}

export default Homepage
