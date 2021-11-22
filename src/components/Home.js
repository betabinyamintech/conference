import { Button } from "antd";
import React, { useState, useContext } from "react";
import { PlusOutlined, LeftOutlined, RightOutlined, BoldOutlined } from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom";
import { Carousel, Tabs, Modal } from 'antd';
import english from '../img/english.jpg';
import wordPress from '../img/wordPress.jpg';
import ProfileHeader from "./UserProfile/ProfileHeader";
import '../components/Home.css';
import { UserContext } from "../context/user";
import { render } from "@testing-library/react";



const { TabPane } = Tabs;

function onChange(a, b, c) {
}
const contentStyle = {
  //height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#00aaaf'
};

const headDiv = {
  height: '2cm',
  textAlign: 'center',
  background: '#F9F9F9',
  lineHeight: '80px',

}

const middleDiv = {
  height: '2cm',
  textAlign: 'center',
  background: '#F9F9F9',
  lineHeight: '80px',

}
const ModalLogin = () => {
  
return <Modal centered visible="true" maskClosable >
        <Tabs defaultActiveKey="1"  >
            <TabPane tab="כניסה עם sms" key="1"  >
                
            </TabPane>
            <TabPane tab="כניסה עם סיסמא" key="2"  >
            
            </TabPane>
        </Tabs>
      </Modal>
}



const Home = () => {
  const {userState} = useContext(UserContext)
  const navigate = useNavigate()
  const [showModalLogin, setShowModalLogin] = useState(false)
  const NewBookingButton= ()=>{
    console.log("in newBookingButton", showModalLogin)
    if(userState){
      navigate("/bookrequest")
    }
    else{
      setShowModalLogin(true)
      console.log("after ", showModalLogin)
    }
    
  }
  return (
    <>
      {userState&&<ProfileHeader/>}
      {/* {!userState&&<>
      <Link to="/register"><button >לקוח חדש</button></Link>
      <button>לקוח קיים</button>
      </>}
      {!userState&&<>
      <Link to="/register"><button > לקוח חדש</button></Link>
      <button onClick={()=>(setShowModalLogin(true))}> לקוח קיים</button>
      </>} */}
      {showModalLogin&&<ModalLogin/>}
      <div style={{ height: '20px' }}></div>
      <div>
        <div style={headDiv}>
            <Button type="primary" style={{ background: '#00AAAF' }}
              shape="round" icon={<PlusOutlined />} size={"large"}
              onClick={()=>{NewBookingButton()}}>
              פגישה חדשה
            </Button>
        </div>
        <div >
          <div >
            <p>כדאי לדעת</p>
            <Carousel afterChange={onChange} arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
              <div>
                <h3 style={contentStyle}>
                  <img alt="example" src={english} style={{ width: '100%' }} /></h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img alt="example" src={wordPress} style={{ width: '100%' }} /></h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img alt="example" src={english} style={{ width: '100%' }} /></h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img alt="example" src={wordPress} style={{ width: '100%' }} /></h3>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}









export default Home;