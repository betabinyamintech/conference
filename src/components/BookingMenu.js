import { Tabs } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState, useEffect, useContext } from 'react'
import { BookByDate } from './BookByDate';
import Item from 'antd/lib/list/Item';
import { getUserBookings } from '../actions/booking';
import { UserContext } from '../context/user';

const { TabPane } = Tabs;

export const BookingMenu = () => {

  const [meetings, setMeetings] = useState({})

  useEffect(() => {

    async function book() {
      console.log("userState", userState)
      const allUserBooking = await getUserBookings({ user: userState._id })
      console.log("booking are", allUserBooking)
      const now = new Date()
      let nowToCompare = now.getTime()

      const compareDateLast = (value) => {
        let meeting = new Date(value.meetingDate)
        let meetingToCompare = meeting.getTime()
        return meetingToCompare < nowToCompare

      }
      const compareDateNext = (value) => {
        let meeting = new Date(value.meetingDate)
        let meetingToCompare = meeting.getTime()
        return meetingToCompare > nowToCompare

      }

      setMeetings({
        lastMeetings: allUserBooking.filter(compareDateLast),
        nextMeetings: allUserBooking.filter(compareDateNext)
      })
    }
    book()
  }, [])

  const { userState } = useContext(UserContext)



  if (!meetings) return <div>Loading...</div>
  const { lastMeetings, nextMeetings } = meetings
  console.log("meetings", meetings)
  return (

    <>

      <Tabs defaultActiveKey="1"  >
        <TabPane tab="הסטוריית הזמנות" key="1"  >
          {lastMeetings && lastMeetings.map(meeting =>
            <BookByDate flag={0} book={meeting} />
          )}
        </TabPane>
        <TabPane tab="חדרים מוזמנים" key="2"  >

          <BookByDate flag={1} book={Item} />

        </TabPane>

      </Tabs>

    </>



  )
}





