import { Button } from "antd";
import React, { useState, useContext } from "react";
import { PlusOutlin, PlusOutlined } from '@ant-design/icons';



const Home = () => {


    return (
        <>
        <div>
        <Button type="primary" shape="round" icon={<PlusOutlined />} size={"large"}>
          פגישה חדשה
        </Button>
        <p>home</p>
        </div>
        </>
    )
}

export default Home;