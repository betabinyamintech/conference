import React from "react";
import { Modal, Button } from "antd";
import { Link } from "react-router-dom";
import { Route } from "workbox-routing";


const ResendCode = ({ }) => {

    const myuser = {
        name: "שירה",
        phone: "0527185555"
    }


    const getCode = () => {
        console.log("i get the code")
    }
    const notGetCode = () => {
        //לא קיבל קוד

    }


    return (
        <>
            <Modal visible width="10cm" onCancel={notGetCode} centered
                title="אוי א ברוך!!"
                footer={[
                    <Link to='/smsWrong'>
                        <Button type='text' key="submit" onClick={getCode} >
                            קיבלתי את הקוד
                        </Button></Link>,
                    <span >|</span>,
                    <Link to="/smsWrong">
                        <Button type='text' key="submit" onClick={getCode} >
                        עדיין לא קורה כלום
                        </Button>
                    </Link>,


                ]}
            >
                <br />
                <div>
                    <span>מיד נשלח את הקוד מחדש לטלפון {myuser.phone}</span>
                </div>
                <br />
            </Modal>

        </>
    )
}
export default ResendCode;