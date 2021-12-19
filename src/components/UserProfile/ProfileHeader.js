import React, { useContext } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Bt_logo from "../../img/binyamintech-logo.png";
import { UserContext } from "../../context/user";
import "../../App.css";
import "./ProfileHeader.css";

export default function ProfileHeader() {
  const { userState } = useContext(UserContext);

  return (
    <div>
      <div className="profileHeader">
        <div className="img">
          <img alt="example" src={Bt_logo} />
        </div>
        {userState ? (
          <div className="details">
            <div className="fullName">
              <h4>
                {"שלום,"} {userState.name}
              </h4>
              {userState.subscription && (
                <div className="bitCoins">
                  <h6>יתרתך {userState.subscription.balance} קרדיטים</h6>
                </div>
              )}
            </div>
            <div className="avatar">
              <Avatar icon={<UserOutlined />} />
            </div>
          </div>
        ) : (
          <div>שלום אורח</div>
        )}
      </div>
    </div>
  );
}
