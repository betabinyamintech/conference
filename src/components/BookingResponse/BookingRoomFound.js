import { Modal, Button } from "antd";
import React,{ useState } from "react";

const BookingRoomFound =({requestAccepted})=>{
    
const [isModalVisible,setIsModalVisible]=useState(true)

const confirm=()=>{

}
const cancel=()=>{
    
}


    return(
        <>
            <Modal title='מצאנו חדר בדיוק בשבילך!' visible={isModalVisible} onOk={confirm} onCancel={cancel}>
                <div>{requestAccepted.room.roomName} - חדר עד {requestAccepted.room.maximumParticipants}</div>
                <div>ליום שני {requestAccepted.bookingDetails.date.day}, {requestAccepted.bookingDetails.date} לשעה {requestAccepted.bookingDetails.hourStart} - {requestAccepted.bookingDetails.hourEnd}</div>
                <div>
                    <span>לשמור לך אותו תמורת {requestAccepted.room.pricePerHour} אסימונים?</span>
                </div>
            </Modal>

             {/* <Modal
          visible={isModalVisible}
          title="מצאנו חדר בדיוק בשבילך!"
          
          footer={[
            <Button key="back" onClick={cancel}>
              ביטול
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              ברור
            </Button>,
            <Button
              key="link"
              href="https://google.com"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Search on Google
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal> */}

        </>
    )
}

export default BookingRoomFound;