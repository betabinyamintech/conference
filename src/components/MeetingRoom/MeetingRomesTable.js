import { Table, Tag, Space, Button, Modal ,Alert} from "antd";
import { useState ,useEffect} from "react";
import reactDom from "react-dom";
import MeetingRoomEdit from "./MeetingRoomEdit";
// import { data } from "./mock";
import ModalEditMeetingRooms from "./ModalEditMeetingRooms";
import {  getMeetingRooms} from '../../actions/manage';
import React  from 'react';


const MeetingRoomsTable = () => {
  // const [currentData, setCurrentData] = useState(data);
  const [currentData, setCurrentData] = useState([{},{}]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [modalRecord, setModalRecord] = useState(false);
  const [items, setItems] = useState ([
    {id: 1, someattr: "a string", anotherattr: ""},
    {id: 2, someattr: "another string", anotherattr: ""},
    {id: 3, someattr: "a string", anotherattr: ""},
  ])

 


  const columns = [
    {
      title: "שם החדר",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "מקסימום משתתפים",
      dataIndex: "maxOfPeople",
      key: "maxOfPeople",
    },
    {
      title: "מחיר בסיס לשעה",
      dataIndex: "value",
      key: "value",
    },
    // {
    //   title: "תוכניות",
    //   key: "tags",
    //   dataIndex: "tags",
    //   render: (tags) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? "geekblue" : "green";
    //         if (tag === "loser") {
    //           color = "volcano";
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
      title: "עריכה",
      key: "edit",
      render: (text, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              showModal(record);
            }}
          >
            Edit 
          </a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  async function getAllMeetingRooms() {

   const response = await getMeetingRooms()
  setCurrentData(response.rooms)
  
  // console.log(response.rooms)
  // const arr2=response.rooms
  // console.log("arr2 ",arr2)
  
  // const arr= [...arr2]
  // console.log("arr ",arr)
  // // setCurrentData("xgfxj")
  //  console.log("currentData ",currentData)
  //  const result = response.rooms.filter(room => room.name.includes('ח') );
  //  console.log(result)
  }

  useEffect(() => { getAllMeetingRooms(); }, [])

 
  async function f2(){
    const response = await getMeetingRooms()
    const arr2=response.rooms

    const newState = Object.assign({},  [
      {
        key: "1",
        name: "חליל",
        maximumParticipants: 25,
        pricePerHour: 160,
       
      },
      {
        key: "2",
        name: "נבל",
        maximumParticipants: 6,
        pricePerHour: 80,
       
      }]
      );
console.log(newState)


console.log("items: ",items)
setItems (
  items.map((item) => {
    return item.id === "1"?  {id: 4, someattr: "Chani Amar", anotherattr: ""}: item;
  })
); 
console.log("items: ",items)

    // newState.items.forEach(element => {
    //   // element.name= "I like it a lot";
    //   console.log(element)
    // });
    // setCurrentData(newState);

    
    let a = [...arr2];//העתקה עמוקה
    setCurrentData([...a]);

    console.log("response ",response,"response.rooms ",response.rooms,"arr2 ",arr2," a ",a,"currentData ",currentData)
    //  console.log("response ",response)
    // console.log("currentData ",currentData)
    // console.log(response.rooms)
    
    // console.log("arr2 ",arr2)
    
    // // const arr= [...arr2]
    // console.log("arr ",arr)
    // setCurrentData(arr)
    //  console.log("currentData ",currentData)
    //  const result = response.rooms.filter(room => room.name.includes('ח') );
    //  console.log(result)
  }

  const updateRecord = (updatedRecord) => {
    setCurrentData((previousData) => {
      console.log("previousData: ", previousData);
      // return previousData
      //   .filter((record) => record != updatedRecord.key)
      //   .push(updatedRecord);
    });
    setModalRecord(false);
  };
  let showModal = (record) => {
    setModalRecord(record);
  };

  let handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  let handleCancel = () => {
    setModalRecord([]);
  };

  return (
    <>
      {modalRecord && (
        <Modal
          visible={modalRecord}
          title={modalRecord.roomName}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[]}
        >
          <MeetingRoomEdit data={modalRecord} updateRecord={updateRecord} />
        </Modal>
      )}
      <button onClick={() => { f2(); }}></button>
      {/* <Table columns={columns} dataSource={currentData} /> */}
    </>
  );
};

export default MeetingRoomsTable;
