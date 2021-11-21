import { Button } from "antd";
import React, { useState, useContext } from "react";
import { PlusOutlined, LeftOutlined, RightOutlined, BoldOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Carousel } from 'antd';
import english from '../img/english.jpg';
import wordPress from '../img/wordPress.jpg';
import ProfileHeader from "./UserProfile/ProfileHeader";
import '../components/Home.css';
import { UserContext } from "../context/user";

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



const Home = () => {
  const {userState} = useContext(UserContext)
  return (
    <>
    
      {userState&&<ProfileHeader/>}
      {!userState&&<>
      <Link to="/register"><button >לקוח חדש</button></Link>
      <button>לקוח קיים</button>
      </>}
      <div style={{ height: '20px' }}></div>
      <div>
        <div style={headDiv}>
          <Link to="/bookrequest">
            <Button type="primary" style={{ background: '#00AAAF' }} shape="round" icon={<PlusOutlined />} size={"large"}>
              פגישה חדשה
            </Button></Link>
        </div>
        <div >
          <div >
            {/* <p style={text}>כדאי לדעת</p> */}
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