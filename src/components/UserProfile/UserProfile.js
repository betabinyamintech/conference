import React from 'react';
import {Card, Avatar} from 'antd';
import {ArrowLeftOutlined, CameraFilled, UserOutlined} from '@ant-design/icons';
import {user} from '../TimeSelection/mock';
import ProfileHeader from "./ProfileHeader";

function UserProfile() {


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
                        {user.Email}
                    </div>
                    <div className="phone">
                        {user.Phone}
                    </div>
                </div>
            </div>
        </Card>

    )
}

export default UserProfile;
