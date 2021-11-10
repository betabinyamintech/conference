import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react'

export const BookingMenu = () => {

  const [clickedMenu, setclickedMenu] = useState("nextBooking")

  const Clicked = () => {
    // setclickedMenu( e.key );
    alert("clicked") 
  };
  return (
    <Menu  mode="horizontal" >
      <Menu.Item key="history" onClick={() => { Clicked() }}>
        הסטוריית הזמנות
      </Menu.Item>
      <Menu.Item key="nextBooking" onClick={() => { Clicked() }} >
        חדרים מוזמנים
      </Menu.Item>
    </Menu>

  )
}