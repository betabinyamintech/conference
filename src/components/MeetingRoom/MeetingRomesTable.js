import { Table, Tag, Space, Button, Modal } from "antd";
import { set } from "mongoose";
import { useState } from "react";
import reactDom from "react-dom";
import MeetingRoomEdit from "./MeetingRoomEdit";
import { data } from "./mock";
import ModalEditMeetingRooms from "./ModalEditMeetingRooms";

const MeetingRoomsTable = () => {
  const [currentData, setCurrentData] = useState(data);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [modalRecord, setModalRecord] = useState(false);

  const columns = [
    {
      title: "שם החדר",
      dataIndex: "roomName",
      key: "roomName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "מקסימום משתתפים",
      dataIndex: "maximumParticipants",
      key: "maximumParticipants",
    },
    {
      title: "מחיר בסיס לשעה",
      dataIndex: "pricePerHour",
      key: "pricePerHour",
    },
    {
      title: "תוכניות",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
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
            Edit {record.name}
          </a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
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
      <Table columns={columns} dataSource={currentData} />
    </>
  );
};

export default MeetingRoomsTable;
