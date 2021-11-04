import React from "react";
import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Bt_logo  from '../../img/binyamintech-logo.png';
import  { user }  from '../TimeSelection/mock';
const { Meta } = Card;


function ProfileHeader() {
    
    return (

        <Card style={{ height: 100, width: 350, display: 'flex' }} cover={
            <img alt="example" style={{ height: 50, width: 160, marginTop: 25 }} src={Bt_logo} />}
        >
            <div style={{ width: 500, display: 'flex' }}>
                <Meta style={{textAlign: 'right'}} title={user.firstName+' '+ user.lastName} description="יתרה 100 אסימונים" />
                <Avatar icon={<UserOutlined />} />
            </div>
        </Card>

    )
}
export default ProfileHeader;