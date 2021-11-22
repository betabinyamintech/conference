
import React, { useContext } from "react";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Bt_logo from '../../img/binyamintech-logo.png';
import { UserContext } from "../../context/user";
import '../../App.css'

export default function ProfileHeader() {

    const { userState } = useContext(UserContext)

    return (


        <div>

           
                <div className="profileHeader">
                    {/* style={{ display: 'flex', backgroundColor: 'white', justifyContent: 'space-between' }} */}
                    <div className="img">
                        <img alt="example" src={Bt_logo} style={{ margin: 8 }} />
                    </div>
                    {(userState ?
                    <div className="details" style={{ display: 'flex' }}>
                        <div className="fullName" style={{ marginRight: 10 + 'px' }}>
                            <h4>{"שלום" + ', ' + userState.name}</h4>
                            <div className="bitCoins">
                                <h6>יתרה 100 אסימונים</h6>
                            </div>
                        </div>
                        <div className="avatar" style={{ margin: 8 }}>
                            <Avatar icon={<UserOutlined />} />
                        </div>

                    </div>: <div>שלום אורח</div>)}

                </div> 

        </div>

    )
}

// export default ProfileHeader;