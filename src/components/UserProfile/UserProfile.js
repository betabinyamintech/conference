import React, { useContext } from "react";
import { Card, Avatar, Button, Typography } from 'antd';
import { LeftSquareTwoTone, CameraTwoTone, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/user";
import ProfileHeader from "./ProfileHeader";
const { Paragraph } = Typography;
const { useState } = React;



function UserProfile() {
    const { userState } = useContext(UserContext)
    const [editableStrEmail, setEditEmail] = useState(userState.email);
    const [editableStrPhone, setEditPhone] = useState(userState.phone);
    const navigate = useNavigate()

    function homePage() {
        navigate("/home")
    }

    return (

        <Card CSSProperties={{ padding: 0 }} style={{ alignItems: 'center', height: 100 + 'vh', backgroundColor: '#ececec', flexDirection: 'row' }}>
            <div className="header" style={{ width: 100 + '%' }}>
                <ProfileHeader />
            </div>
            <div className="arrow">
                <Button type="dashed" shape="circle" size="small" icon={<LeftSquareTwoTone />} onClick={homePage}></Button>
            </div>
            <div className="userContainer">
                <Avatar size={48} style={{ backgroundColor: '##ffffff', }} icon={<UserOutlined />} />
                <Button type="primary" shape="circle" size="small" icon={<CameraTwoTone />}></Button>
                <div className="userDetailes">
                    <div className="email">
                        <Paragraph editable={{ onChange: setEditEmail }}>{editableStrEmail}</Paragraph>
                    </div>
                    <div className="phone">
                        <Paragraph editable={{ onChange: setEditPhone }}>{editableStrPhone}</Paragraph>
                    </div>
                </div>
            </div>
        </Card>

    )
}

export default UserProfile;
