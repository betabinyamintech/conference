import { Tabs  } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState,useEffect } from 'react'

export const BookingMenu = () => {
  //כאן נשאב את כל ההזמנות של היוזר הספציפי הזה
  const allBookings=useEffect(()=>{

  },[])

    const { TabPane } = Tabs; 
  
    
  return (
    
      <Tabs defaultActiveKey="1" >
        <TabPane tab="הסטוריית הזמנות" key="1">
          {book}
        </TabPane>
        <TabPane tab="חדרים מוזמנים" key="2">
          Content of Tab Pane 2
        </TabPane>
        
      </Tabs>
    

  )
}