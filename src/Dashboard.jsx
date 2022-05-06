import { Row ,Col, Button } from 'antd'
import React,{useState} from 'react'
import doctorImage from './assets/Rectangle 70.svg';
import userImage from './assets/Group.svg';
import searchIcon from './assets/searchTag.svg';
import dashboardIcon from './assets/dashboardIcon.svg';
import clincIcon from './assets/clinicIcon.svg';
import patientIcon from './assets/patientsIcon.svg';
import analyticsIcon from './assets/analyticsIcon.svg';
import legalIcon from './assets/legalIcon.svg';
import logoutIcon from './assets/logoutIcon.svg';
import noOfPatientIcon from './assets/NoOfPatientIcon.svg';
import todaysRevenue from './assets/todaysRevenueIcon.svg';
import monthlyRevenueIcon from './assets/monthlyRevenue.svg';
import todayNoShow from './assets/todayNoShowIcon.svg';
import requestUserIcon from './assets/requestUserIcon.svg'
import crossIcon from './assets/crossIcon.svg';
import tickIcon from './assets/tickIcon.svg';
import rightArrowIcon from './assets/rightArrowIcon.svg';
import './Dashboard.css'
import Input from 'antd/lib/input/Input';


function Dashboard() {
    const [activeButton, setActiveButton] = useState("dashboard");

    const activeButtonStyle = {
        color: "#194AF5",
  background: "#e6ebff"
    }
    const iconImgStyle={height: "20px",
    width: "20px",
        marginRight: "20px"
    }

    const activeIconImgStyle = {
        height: "20px",
    width: "20px",
        marginRight: "20px",
        color:"#194AF5" 
    }
    
    const divIconImgStyle={ height: "30px",
        width: "30px"
    }
    
    const rightArrowStyle={height: "10px",
    marginLeft: "10px",
    marginBottom: "3px"}

    return (
        <div>
            <Row className="body-Row">
                <Col className="sidebar" span={5}>
                    <div style={{width:'90%',height:'100%',margin:'auto'}}>
                    <div className="sidebar-head">
                        <img style={{paddingTop: '20px'}} src={doctorImage} />
                        <div className="name-box"><h1> Dr. Krishnanand  </h1></div>
                        <p>Manage profile</p>
                    </div>
                    <div className="sidebar-buttons">
                        <Button style={activeButton === "dashboard"? activeButtonStyle:{}} onClick={()=>{
                            setActiveButton("dashboard");
                            }} type="text" className="sideBar-button" ><img  style={activeButton === "dashboard"? activeIconImgStyle :iconImgStyle} src={ dashboardIcon}/> Dashboard</Button>
                        <Button style={activeButton === "clinic"? activeButtonStyle:{}} onClick={()=>{
                            setActiveButton("clinic");
                        }} type="text" className="sideBar-button" > <img style={activeButton === "dashboard"? activeIconImgStyle :iconImgStyle} src={ clincIcon}/> Clinic</Button>
                        <Button style={activeButton === "patient"? activeButtonStyle:{}} onClick={()=>{
                            setActiveButton("patient");
                        }} type="text" className="sideBar-button" ><img style={activeButton === "dashboard"? activeIconImgStyle :iconImgStyle} src={ patientIcon}/> Patients</Button>
                        <Button style={activeButton === "analytics"? activeButtonStyle:{}} onClick={()=>{
                            setActiveButton("analytics");
                        }} type="text" className="sideBar-button" ><img style={activeButton === "dashboard"? activeIconImgStyle :iconImgStyle} src={ analyticsIcon}/> Analytics</Button>
                        <Button style={activeButton === "legal"? activeButtonStyle:{}} onClick={()=>{
                            setActiveButton("legal");
                        }} type="text" className="sideBar-button" ><img style={activeButton === "dashboard"? activeIconImgStyle :iconImgStyle} src={ legalIcon}/> Legal</Button>
                    </div>
                    <div className="sidebar-user">
                        <img src={userImage} />
                        <Button className="sidebar-user-button" >Create appointment</Button>
                    </div>
                    <div className="sidebar-logout">
                            <Button type="text" className="sideBar-button sidebar-logout-button" >
                            <img style={iconImgStyle} src={ logoutIcon}/> Log out</Button>
                    </div>
                    </div>
                </Col>
                <Col span={19}>
                    <div className="detail-part">
                        <Row className="search-box">
                            <Col span={16}>
                                <Input  size="large"  placeholder="Search patient name, date, etc." prefix={<img style={{ height: "16px",
                                marginRight: "20px"}} src={searchIcon} />} />
                            </Col>
                        </Row>
                        <Row className="detail-boxes-div" gutter={16}>
                            <Col  className="detail-boxes " span={6}>
                                <div className="detail-inner-box"
                                    style={{ backgroundColor: "#7A6EFE", height: '100%', width: '90%', marginLeft: '3%' }}>
                                    <div className="detail-icon-box">
                                        <div style={{backgroundColor:'#9188FF'}} className="iconSpace">
                                            <img style={divIconImgStyle} src={noOfPatientIcon} />
                                        </div>
                                    </div>
                                <div className="detail-detail-box">
                                    <div className="detail-header"><h1>No. of patients</h1></div>
                                    <div className="detail-number"><h1>224</h1></div>
                                </div>
                              </div>
                            </Col>
                            <Col className="detail-boxes " span={6}>
                                <div className="detail-inner-box"
                                    style={{ backgroundColor: "#FF5363", height: '100%', width: '90%' }} >
                                    <div className="detail-icon-box">
                                        <div style={{backgroundColor:'#FF717F'}} className="iconSpace">
                                            <img style={divIconImgStyle} src={todaysRevenue} />
                                        </div>
                                    </div>
                                    <div className="detail-detail-box">
                                        <div className="detail-header"><h1>Today’s Revenue</h1></div>
                                        <div className="detail-number"><h1>224</h1></div>
                                    </div>
                              </div>
                            </Col>
                            <Col  className="detail-boxes " span={6}>
                                <div className="detail-inner-box"
                                    style={{ backgroundColor: "#FFA901", height: '100%', width: '90%' }}>
                                    <div className="detail-icon-box">
                                    <div style={{backgroundColor:'#FFB72D'}} className="iconSpace">
                                        <img style={divIconImgStyle} src={monthlyRevenueIcon} />
                                    </div>
                                    </div>
                                <div className="detail-detail-box">
                                    <div className="detail-header"><h1>Monthly Revenue</h1></div>
                                    <div className="detail-number"><h1>224</h1></div>
                                </div>
                              </div>
                            </Col>
                            <Col  className="detail-boxes " span={6}>
                                <div className="detail-inner-box"
                                    style={{ backgroundColor: "#24A8FA", height: '100%', width: '100%' }}>
                                    <div className="detail-icon-box">
                                    <div style={{backgroundColor:'#4BB8F9'}} className="iconSpace">
                                        <img style={divIconImgStyle} src={todayNoShow} />
                                    </div>
                                </div>
                                <div className="detail-detail-box">
                                    <div className="detail-header"><h1>Today’s No-show</h1></div>
                                    <div className="detail-number"><h1>3</h1></div>
                                </div>
                              </div>
                            </Col>
                        </Row>
                        <Row className="patient-info-div">
                            <Col className="request-box" span={8}>
                                <div className="request-inner-box">
                                    <div className="request-inner-box-header">
                                    <div className="request-inner-box-header-leftbox" ><h1>Requests (46)</h1></div>
                                    <div className="request-inner-box-header-rightbox" ><h2>View All <img style={rightArrowStyle} src={rightArrowIcon} /> </h2></div>
                                    </div>
                                    <div className="request-inner-box-body">
                                        <div className="request-detail-box">
                                            <div className="request-detail-box-detail">
                                                <div className="patient-request-iconbox">
                                                <img style={{width:'34px',height:'34px'}} src={requestUserIcon} />
                                                </div>
                                                <div className="patient-request-detail-box">
                                                    <div className="patient-name">Akash Mandal</div>
                                                    <div className="patient-detail">45 Male - 10:30 AM </div>
                                                </div>
                                            </div>
                                            <div className="request-detail-button-box">
                                                <Button type="text" className="wrong-button">
                                                    <img style={{height:'12px',width:'12px'}} src={crossIcon} />
                                                </Button>
                                                <Button type="text" className="right-button">
                                                    <img style={{height:'12px',width:'12px'}} src={tickIcon} />
                                                </Button>
                                            </div>
                                        </div>
                                    
                                        <div className="request-detail-box">
                                            <div className="request-detail-box-detail">
                                                <div className="patient-request-iconbox">
                                                <img style={{width:'34px',height:'34px'}} src={requestUserIcon} />
                                                </div>
                                                <div className="patient-request-detail-box">
                                                    <div className="patient-name">Akash Mandal</div>
                                                    <div className="patient-detail">45 Male - 10:30 AM </div>
                                                </div>
                                            </div>
                                            <div className="request-detail-button-box">
                                                <Button type="text" className="wrong-button">
                                                    <img style={{height:'12px',width:'12px'}} src={crossIcon} />
                                                </Button>
                                                <Button type="text" className="right-button">
                                                    <img style={{height:'12px',width:'12px'}} src={tickIcon} />
                                                </Button>
                                            </div>
                                        </div>
                                    
                                        <div className="request-detail-box">
                                            <div className="request-detail-box-detail">
                                                <div className="patient-request-iconbox">
                                                <img style={{width:'34px',height:'34px'}} src={requestUserIcon} />
                                                </div>
                                                <div className="patient-request-detail-box">
                                                    <div className="patient-name">Akash Mandal</div>
                                                    <div className="patient-detail">45 Male - 10:30 AM </div>
                                                </div>
                                            </div>
                                            <div className="request-detail-button-box">
                                                <Button type="text" className="wrong-button">
                                                    <img style={{height:'12px',width:'12px'}} src={crossIcon} />
                                                </Button>
                                                <Button type="text" className="right-button">
                                                    <img style={{height:'12px',width:'12px'}} src={tickIcon} />
                                                </Button>
                                            </div>
                                        </div>
                                    
                                        <div className="request-detail-box">
                                            <div className="request-detail-box-detail">
                                                <div className="patient-request-iconbox">
                                                <img style={{width:'34px',height:'34px'}} src={requestUserIcon} />
                                                </div>
                                                <div className="patient-request-detail-box">
                                                    <div className="patient-name">Akash Mandal</div>
                                                    <div className="patient-detail">45 Male - 10:30 AM </div>
                                                </div>
                                            </div>
                                            <div className="request-detail-button-box">
                                                <Button type="text" className="wrong-button">
                                                    <img style={{height:'12px',width:'12px'}} src={crossIcon} />
                                                </Button>
                                                <Button type="text" className="right-button">
                                                    <img style={{height:'12px',width:'12px'}} src={tickIcon} />
                                                </Button>
                                            </div>
                                        </div>
                                    
                                        <div className="request-detail-box">
                                            <div className="request-detail-box-detail">
                                                <div className="patient-request-iconbox">
                                                <img style={{width:'34px',height:'34px'}} src={requestUserIcon} />
                                                </div>
                                                <div className="patient-request-detail-box">
                                                    <div className="patient-name">Akash Mandal</div>
                                                    <div className="patient-detail">45 Male - 10:30 AM </div>
                                                </div>
                                            </div>
                                            <div className="request-detail-button-box">
                                                <Button type="text" className="wrong-button">
                                                    <img style={{height:'12px',width:'12px'}} src={crossIcon} />
                                                </Button>
                                                <Button type="text" className="right-button">
                                                    <img style={{height:'12px',width:'12px'}} src={tickIcon} />
                                                </Button>
                                            </div>
                                        </div>
                                    
                                        <div className="request-detail-box">
                                            <div className="request-detail-box-detail">
                                                <div className="patient-request-iconbox">
                                                <img style={{width:'34px',height:'34px'}} src={requestUserIcon} />
                                                </div>
                                                <div className="patient-request-detail-box">
                                                    <div className="patient-name">Akash Mandal</div>
                                                    <div className="patient-detail">45 Male - 10:30 AM </div>
                                                </div>
                                            </div>
                                            <div className="request-detail-button-box">
                                                <Button type="text" className="wrong-button">
                                                    <img style={{height:'12px',width:'12px'}} src={crossIcon} />
                                                </Button>
                                                <Button type="text" className="right-button">
                                                    <img style={{height:'12px',width:'12px'}} src={tickIcon} />
                                                </Button>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </Col>
                            <Col className="today-appointment-box" span={16}>
                                <div className="request-inner-box-header">
                                    <div className="request-inner-box-header-leftbox" ><h1>Today Appointments (16)</h1></div>
                                    <div className="request-inner-box-header-rightbox" ><h2>View All <img style={rightArrowStyle} src={rightArrowIcon} /></h2></div>
                                </div>
                                <div className="request-inner-box-body">
                                    <div className="request-detail-box">
                                        <div className="appointment-detail-box-detail">
                                            <div className="appointment-iconbox">
                                            <img style={{width:'34px',height:'34px'}} src={requestUserIcon} />
                                            </div>
                                            <div className="appointment-detail-box">
                                                <div className="patient-name">Akash Mandal</div>
                                                <div className="patient-detail">45 Male - 10:30 AM </div>
                                            </div>
                                            <div className="appointment-type-box">
                                                <div className="appointment-time">10:30 AM</div>
                                                <div className="appointment-button-box">
                                                <Button style={{backgroundColor: '#ffdbb5'}} className="appointment-button-type-button" type="text">Walk in</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appointment-detail-button-box">
                                                <Button type="text" className="diagnose-sec-button">Diagnose</Button>
                                        </div>
                                    </div>
                                
                                    <div className="request-detail-box">
                                        <div className="appointment-detail-box-detail">
                                            <div className="appointment-iconbox">
                                            <img style={{width:'34px',height:'34px'}} src={requestUserIcon} />
                                            </div>
                                            <div className="appointment-detail-box">
                                                <div className="patient-name">Akash Mandal</div>
                                                <div className="patient-detail">45 Male - 10:30 AM </div>
                                            </div>
                                            <div className="appointment-type-box">
                                                <div className="appointment-time">10:30 AM</div>
                                                <div className="appointment-button-box">
                                                <Button style={{backgroundColor: '#C8FFF4'}} className="appointment-button-type-button" type="text">Appointment</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appointment-detail-button-box">
                                                <Button type="text" className="diagnose-tert-button">Diagnose</Button>
                                        </div>
                                    </div>
                                
                                    <div className="request-detail-box">
                                        <div className="appointment-detail-box-detail">
                                            <div className="appointment-iconbox">
                                            <img style={{width:'34px',height:'34px'}} src={requestUserIcon} />
                                            </div>
                                            <div className="appointment-detail-box">
                                                <div className="patient-name">Akash Mandal</div>
                                                <div className="patient-detail">45 Male - 10:30 AM </div>
                                            </div>
                                            <div className="appointment-type-box">
                                                <div className="appointment-time">10:30 AM</div>
                                                <div className="appointment-button-box">
                                                <Button style={{backgroundColor: '#ffdbb5'}} className="appointment-button-type-button" type="text">Walk in</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appointment-detail-button-box">
                                                <Button type="text" className="diagnose-tert-button">Diagnose</Button>
                                        </div>
                                    </div>
                                
                                    <div className="request-detail-box">
                                        <div className="appointment-detail-box-detail">
                                            <div className="appointment-iconbox">
                                            <img style={{width:'34px',height:'34px'}} src={requestUserIcon} />
                                            </div>
                                            <div className="appointment-detail-box">
                                                <div className="patient-name">Akash Mandal</div>
                                                <div className="patient-detail">45 Male - 10:30 AM </div>
                                            </div>
                                            <div className="appointment-type-box">
                                                <div className="appointment-time">10:30 AM</div>
                                                <div className="appointment-button-box">
                                                <Button style={{backgroundColor: '#C8FFF4'}} className="appointment-button-type-button" type="text">Appointment</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appointment-detail-button-box">
                                                <Button type="text" className="diagnose-pri-button">Diagnose</Button>
                                        </div>
                                    </div>
                                
                                    <div className="request-detail-box">
                                        <div className="appointment-detail-box-detail">
                                            <div className="appointment-iconbox">
                                            <img style={{width:'34px',height:'34px'}} src={requestUserIcon} />
                                            </div>
                                            <div className="appointment-detail-box">
                                                <div className="patient-name">Akash Mandal</div>
                                                <div className="patient-detail">45 Male - 10:30 AM </div>
                                            </div>
                                            <div className="appointment-type-box">
                                                <div className="appointment-time">10:30 AM</div>
                                                <div className="appointment-button-box">
                                                <Button style={{backgroundColor: '#ffdbb5'}} className="appointment-button-type-button" type="text">Walk in</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appointment-detail-button-box">
                                                <Button type="text" className="diagnose-pri-button">Diagnose</Button>
                                        </div>
                                    </div>
                                
                                    <div className="request-detail-box">
                                        <div className="appointment-detail-box-detail">
                                            <div className="appointment-iconbox">
                                            <img style={{width:'34px',height:'34px'}} src={requestUserIcon} />
                                            </div>
                                            <div className="appointment-detail-box">
                                                <div className="patient-name">Akash Mandal</div>
                                                <div className="patient-detail">45 Male - 10:30 AM </div>
                                            </div>
                                            <div className="appointment-type-box">
                                                <div className="appointment-time">10:30 AM</div>
                                                <div className="appointment-button-box">
                                                <Button style={{backgroundColor: '#C8FFF4'}} className="appointment-button-type-button" type="text">Appointment</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appointment-detail-button-box">
                                                <Button type="text" className="diagnose-pri-button">Diagnose</Button>
                                        </div>
                                    </div>
                                
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard
