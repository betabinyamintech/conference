
import React, { useState } from 'react';
import { Modal, Button, Input, Alert, Spin } from 'antd';
import { SecurityScanTwoTone, CloseCircleTwoTone, RedditCircleFilled } from '@ant-design/icons';
import { resetUserPass } from '../actions/auth'
import { Link, useNavigate } from 'react-router-dom';
import { Register } from './Authentication/Register';
import '../components/RessetPassword.css'



export const ResetPassword = ({ email, setShowModalReset }) => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [inputVal, setInputVal] = useState(email)
    const [logError, setLogError] = useState(false)
    const [spin, setSpin] = useState(logError.value)
    console.log("email", email)
    let validateE = ""
    let register = false
    const navigate = useNavigate()
    // const showModal = () => {
    //     setIsModalVisible(true);
    // };
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    // const handleOk = () => {
    //     setIsModalVisible(false);
    // };

    const handleCancel = () => {
        setIsModalVisible(false)
    };
    // const handleChange = () => {

    // }
    const reset = async () => {
        setSpin(currentState => !currentState)
        if (inputVal == "") {
            setLogError({ value: 1, message: "נא למלא את שדות החובה" })
            return
        }
        validateE = validateEmail(inputVal)
        if (!validateE) {
            setLogError({ value: 2, message: "כתובת המייל אינה תקינה" })
            return
        }

        const response = await resetUserPass(inputVal)
        if (response == -1)
            setLogError({ value: 3, message: "אינך רשום במערכת" })

    }
    const goRegister = () => {
        setShowModalReset(false)
        navigate('/register')
    }

    return (
        <div>

            <Modal
                title="שחזור סיסמא"
                visible={isModalVisible}
                footer={null}
                bodyStyle={{ alignItems: 'center' }}
                maskClosable

            >

                <h3 >הכנס כתובת מייל</h3>
                {logError.value && <Alert className='alert' type="error"
                    message={logError.message} showIcon></Alert>}
                {/* אני פה או להעביר לפורם -נראה לי עדיף */}
                <Input value={inputVal} onChange={(e) => { setInputVal(e.target.value) }} />
                <Button loading={spin, { delay: 0.4 }} type="primary" onClick={reset}> "שחזור סיסמא"</Button>
                {logError.value == 3 && <Button type="text" onClick={goRegister} style={{ float: 'left' }} >הרשמה</Button>}


            </Modal>




        </div>

    )
}