import React from "react";
import { Modal, Button } from "antd";
import { PhoneOutlined  } from '@ant-design/icons';


const SmsWrong = ({ }) => {

    const myuser = {
        name: "שירה",
        phone: "0527185555"
    }

    const getCode = () => {
        //קיבל קוד
        // setBookingCurrentResponse(null)

    }
    const notGetCode = () => {
        //לא קיבל קוד
        // setBookingCurrentResponse(null)
    }


    return (
        <>
            <Modal visible width="10cm" centered
                visible title="ממש מתנצלים, אבל משהו השתבש!"
                footer={
                    <Button block type='primary' key="submit" onClick={getCode}>
                        <PhoneOutlined />
                    </Button>
                }
            >
                <br />
                <div>
                    <span> נודה לכם אם תשתפו אותנו בבעיה כדי שנוכל לעזור</span>
                </div>
                <br />
            </Modal>

        </>
    )
}
export default SmsWrong;