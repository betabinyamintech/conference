import React, { useContext } from "react";
import {Card, Avatar} from 'antd';
import {ArrowLeftOutlined, CameraFilled, UserOutlined} from '@ant-design/icons';
import { UserContext } from "../../context/user";
import ProfileHeader from "./ProfileHeader";

function UserProfile() {
    const {userState} = useContext(UserContext)
    console.log(userState);

    return (
        <Card CSSProperties={{padding: 0 }} style={{alignItems: 'center', height: 100 + 'vh', backgroundColor: '#ececec', flexDirection: 'row'}}>
            <div className="header" style={{width: 100 + '%'}}>
                <ProfileHeader/>
            </div>
            <div className="arrow">
                <ArrowLeftOutlined/>
            </div>
            <div className="userContainer">
                <Avatar size={48} style={{backgroundColor: '##ffffff',}} icon={<UserOutlined/>}/>
                <CameraFilled/>
                <div className="userDetailes">
                    <div className="email">
                        {userState.email}
                    </div>
                    <div className="phone">
                        {userState.phone}
                    </div>
                </div>
            </div>
        </Card>

    )
}

export default UserProfile;
