import { Tabs } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react'
import { BookByDate } from './BookByDate';
import Item from 'antd/lib/list/Item';

export const BookingMenu = () => {
  // כאן נשאב את כל ההזמנות של היוזר הספציפי הזה
  // const allBookings=useEffect(()=>{

  // },[])
  const { TabPane } = Tabs;
  const booksExample = [
    {
      day: "שני",
      longdate: "7 בספטמבר 2020",
      start: "9:00",
      end: "10:00",
      name: "שופר",
      paticipants: 6,
      value: 15


    },
    {
      day: "שני",
      longdate: "7 בספטמבר 2020",
      start: "9:00",
      end: "10:00",
      name: "שופר",
      paticipants: 6,
      value: 15
    }, {
      day: "שלישי",
      longdate: "8 בספטמבר 2020",
      start: "9:00",
      end: "10:00",
      name: "חליל",
      paticipants: 90,
      value: 30
    }, {
      day: "רביעי",
      longdate: "9 בספטמבר 2020",
      start: "9:00",
      end: "10:00",
      name: "מחול",
      paticipants: 7,
      value: 45
    }
  ]


  return (


    <Tabs defaultActiveKey="1"  >
      <TabPane tab="הסטוריית הזמנות" key="1"  >
        {booksExample.map(Item =>
          <BookByDate flag={0} book={Item} />
        )}

      </TabPane>
      <TabPane tab="חדרים מוזמנים" key="2"  >
        {booksExample.map(Item =>
          <BookByDate flag={1} book={Item} />
        )}


      </TabPane>

    </Tabs>

  )
}

