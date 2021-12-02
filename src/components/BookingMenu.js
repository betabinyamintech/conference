import { Tabs } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState, useEffect, useContext } from 'react'
import { BookByDate } from './BookByDate';
import Item from 'antd/lib/list/Item';
import { getUserBookings, getRooms } from '../actions/booking';
import { UserContext } from '../context/user';
import "../components/BookingMenu.css";
var moment = require('moment');
var os = require('os')



const { TabPane } = Tabs;

export const BookingMenu = () => {

  const [meetings, setMeetings] = useState({})
  const { userState } = useContext(UserContext);

  useEffect(() => {

    async function book() {
      console.log("userState of bookingMenu", userState)
      const allUserBooking = await getUserBookings({ user: userState._id })
      const now = moment()
      console.log("now", now)
      // let nowToCompare = now.getTime()

      const compareDateLast = (value) => {
        let meeting = new moment(value.meetingDate)
        return moment(now).isAfter(meeting);

      }
      const compareDateNext = (value) => {
        let meeting = new moment(value.meetingDate)
        return moment(now).isBefore(meeting);

      }
      console.log("going to setMeetings")
      setMeetings({
        lastMeetings: allUserBooking.filter(compareDateLast),
        nextMeetings: allUserBooking.filter(compareDateNext)
      })
    }
    book()
  }, [])





  if (!meetings) return <div>לא הזמנת פגישות עדיין</div>
  const { lastMeetings, nextMeetings } = meetings
  console.log("meetings", meetings)
  return (

    <>

      <Tabs defaultActiveKey="1"  >
        <TabPane tab="הסטוריית הזמנות" key="1" className="tab" >
          {lastMeetings && lastMeetings.map(meeting =>
            <BookByDate flag={0} book={meeting} />
          )}
        </TabPane>
        <TabPane tab="חדרים מוזמנים" key="2"  >

          {nextMeetings && nextMeetings.map(meeting =>
            <BookByDate flag={1} book={meeting} />
          )}

        </TabPane>

      </Tabs>

    </>



  )
}





