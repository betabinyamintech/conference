import React from 'react';
import { Card, Avatar } from 'antd';
import { ArrowLeftOutlined, CameraFilled, UserOutlined } from '@ant-design/icons';

import { user } from '../TimeSelection/mock';


function UserProfile() {


    return (

        <Card style={{ height: 600, width: 350, display: 'grid', backgroundColor: '#ececec' }}>

            <div className="arrow">
                <ArrowLeftOutlined />
            </div>
            <Card style={{ textAlign: 'center', backgroundColor: '#ececec' }}>
            <div className="avatar">
                <Avatar style={{ backgroundColor: '##ffffff', }} icon={<UserOutlined />} />
                <CameraFilled />
            </div>
            
            <div className="userDet">
                <div id="email">
                    {user.Email}
                </div>
                <div id="phone">
                    {user.Phone}
                </div>
            </div>
            </Card>
            
        </Card>

    )
}
export default UserProfile;