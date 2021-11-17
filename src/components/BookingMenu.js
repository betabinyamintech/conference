import { Tabs } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState, useEffect, useContext } from 'react'
import { BookByDate } from './BookByDate';
import Item from 'antd/lib/list/Item';
import { getUserBookings } from '../actions/booking';
import { UserContext } from '../context/user'; 









export const BookingMenu = () => {
  
  const [lastMeetings, setLastMeetings] = useState(null)
  const [nextMeetings, setNextMeetings] = useState(null)
  

  
  useEffect(() => {
      
  async function book(){
    
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
    // let a=allUserBooking.filter(compareDateLast)
    // let n=Json.parse(a)
    // console.log('a',a)
    setLastMeetings(prevLastmeetings =>allUserBooking.filter(compareDateLast))  
    setNextMeetings(prevLastmeetings =>allUserBooking.filter(compareDateNext)) 
    console.log("lastMeetings",lastMeetings)
    console.log("nextMeetings",nextMeetings)
    
  }
  book()
  },[])




  const { TabPane } = Tabs;
  const { userState } = useContext(UserContext)
  return (

    <>
    
      <Tabs defaultActiveKey="1"  >
        <TabPane tab="הסטוריית הזמנות" key="1"  >
          <p>data:{nextMeetings}</p>
                    {/* {lll[0].map(Item => {
            <BookByDate flag={0} book={Item} />
          })} */}

        </TabPane>
        <TabPane tab="חדרים מוזמנים" key="2"  >
          {/* {booksOfUser[1].map(Item => */}
          {/* <p>{booksOfUser[1]}</p>
            // <BookByDate flag={1} book={Item} /> */}
          {/* )} */}


        </TabPane>

      </Tabs>

    </>


  )
}





{/* // const booksExample = [
  //   { */}
  //     day: "שני",
  //     longdate: "7 בספטמבר 2020",
  //     start: "9:00",
  //     end: "10:00",
  //     name: "שופר",
  //     paticipants: 6,
  //     value: 15


  //   },
  //   {
  //     day: "שני",
  //     longdate: "7 בספטמבר 2020",
  //     start: "9:00",
  //     end: "10:00",
  //     name: "שופר",
  //     paticipants: 6,
  //     value: 15
  //   }, {
  //     day: "שלישי",
  //     longdate: "8 בספטמבר 2020",
  //     start: "9:00",
  //     end: "10:00",
  //     name: "חליל",
  //     paticipants: 90,
  //     value: 30
  //   }, {
  //     day: "רביעי",
  //     longdate: "9 בספטמבר 2020",
  //     start: "9:00",
  //     end: "10:00",
  //     name: "מחול",
  //     paticipants: 7,
  //     value: 45
  //   }
  // ]