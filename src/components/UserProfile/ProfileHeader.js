import React, { useContext } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Bt_logo from "../../img/binyamintech-logo.png";
import { UserContext } from "../../context/user";
import "../../App.css";
import "./ProfileHeader.css";

export default function ProfileHeader() {
  const { userState } = useContext(UserContext);
  console.log(userState);

  return (
    <div>
      <div className="profileHeader">
        <div className="img">
          <img alt="example" src={Bt_logo} />
        </div>
        {userState ? (
          <div className="details">
            <div className="head">
              <div className="fullName">
                <h4
                  style={{
                    width: "90px",
                    textAlign: "center",
                    justifySelf: "center",
                    // border: "1px solid red",
                  }}
                >
                  {"שלום,"} {userState.name}
                </h4>
                <br />
              </div>
              <div className="avatar">
                <Avatar icon={<UserOutlined />} />
              </div>
            </div>
            <div className="content">
              <div className="bitCoins">
                <h4 style={{ textAlign: "center" }}>קרדיטים</h4>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>{userState.purchasedBalance}</div>
                  <div>:נרכש</div>
                </div>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>{userState.currentMonthBalance}</div>
                  <div>:חודש נוכחי</div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>{userState.nextMonthBalance}</div>
                  <div>:חודש הבא</div>
                </div>
                {/* <h6>יתרתך {userState.subscription.balance} קרדיטים</h6> */}
              </div>
            </div>
          </div>
        ) : (
          <div>שלום אורח</div>
        )}
      </div>
    </div>
  );
}
