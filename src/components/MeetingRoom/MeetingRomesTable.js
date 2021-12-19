import { Table, Space, Modal, Select, InputNumber } from "antd";
import { useState, useEffect, useRef } from "react";
import MeetingRoomEdit from "./MeetingRoomEdit";
import React from "react";
import { data } from "./mock";
import "../../App.css";
import { getMeetingRooms } from "../../actions/manage";

const MeetingRoomsTable = () => {
  const [unfilteredData, setUnfilteredData] = useState();
  const [filteredData, setFilteredData] = useState();
  // const [loading, setLoading] = useState(false);
  // const [visible, setVisible] = useState(false);
  const [modalRecord, setModalRecord] = useState(false);
  // const [items, setItems] = useState([
  //   { id: 1, someattr: "a string", anotherattr: "" },
  //   { id: 2, someattr: "another string", anotherattr: "" },
  //   { id: 3, someattr: "a string", anotherattr: "" },
  // ])
  const valueNameFilter = useRef();
  //values of filter by fields

  const [nameFieldFilter, setNameFieldFilter] = useState("cancel");
  const [operatorFilter, setOperatorFilter] = useState("<=");
  const valueFieldFilter = useRef();

  const optionsFieldFilter = [
    { value: "maxOfPeople", label: "מקסימום משתתפים" },
    { value: "value", label: "מחיר בסיס לשעה" },
    { value: "cancel", label: "ללא" },
  ];
  const optionsOperatorFilter = [
    { value: "<=", label: "פחות מ" },
    { value: "=", label: "שווה ל" },
    { value: ">=", label: "יותר מ" },
  ];

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
    // לא למחוק!
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
    const response = await getMeetingRooms();
    setUnfilteredData(response.rooms);
    setFilteredData(data);

    // setUnfilteredData(data)
    // setFilteredData(data)
  }

  useEffect(() => {
    getAllMeetingRooms();
  }, []);

  // async function f2() {
  //   const response = await getMeetingRooms()
  //   const arr2 = response.rooms
  // עדכון מערך המכיל אוביקטים
  //   console.log("items: ", items)
  //   setItems(
  //     items.map((item) => {
  //       return item.id == "1" ? { id: 4, someattr: "Chani Amar", anotherattr: "" } : item;
  //     })
  //   );

  //   let a = [...arr2];//העתקה עמוקה
  //   setUnfilteredData([...a]);
  // }

  function filterByName() {
    _filter();
  }
  function handleFilterByField() {
    _filter();
  }
  function _filter() {
    const _valueFieldFilter = valueFieldFilter.current.value;
    const _valueNameFilter = valueNameFilter.current.value;

    if (_valueFieldFilter)
      switch (nameFieldFilter) {
        case "maxOfPeople": {
          switch (operatorFilter) {
            case ">=": {
              const result = unfilteredData.filter(
                (room) =>
                  room.name.includes(_valueNameFilter) &&
                  room.maxOfPeople >= _valueFieldFilter
              );
              setFilteredData(result);

              break;
            }
            case "=": {
              const result = unfilteredData.filter(
                (room) =>
                  room.name.includes(_valueNameFilter) &&
                  room.maxOfPeople == _valueFieldFilter
              );

              setFilteredData(result);
              console.log("result", result);
              break;
            }
            case "<=": {
              const result = unfilteredData.filter(
                (room) =>
                  room.name.includes(_valueNameFilter) &&
                  room.maxOfPeople <= _valueFieldFilter
              );
              setFilteredData(result);
              break;
            }
            // default:
          }
          break;
        }

        case "value": {
          switch (operatorFilter) {
            case ">=": {
              const result = unfilteredData.filter(
                (room) =>
                  room.name.includes(_valueNameFilter) &&
                  room.value >= _valueFieldFilter
              );
              setFilteredData(result);
              break;
            }
            case "=": {
              const result = unfilteredData.filter(
                (room) =>
                  room.name.includes(_valueNameFilter) &&
                  room.value == _valueFieldFilter
              );
              setFilteredData(result);
              console.log("result", result);
              break;
            }
            case "<=": {
              const result = unfilteredData.filter(
                (room) =>
                  room.name.includes(_valueNameFilter) &&
                  room.value <= _valueFieldFilter
              );
              setFilteredData(result);

              break;
            }
            // default:
          }
          break;
        }
        // default:
      }
    else {
      const result = unfilteredData.filter((room) =>
        room.name.includes(_valueNameFilter)
      );
      setFilteredData(result);
    }
  }

  const updateRecord = (updatedRecord) => {
    setUnfilteredData((previousData) => {
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
    //setLoading(true);
    setTimeout(() => {
      //setLoading(false);
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
      <div style={{ direction: "rtl" }}>
        <label>סנן לפי שם חדר</label>
        <input ref={valueNameFilter} onChange={() => filterByName()}></input>
      </div>
      <div style={{ direction: "rtl" }}>
        <label>סנן לפי שם שדה</label>
        <Select
          value={nameFieldFilter}
          onChange={(e) => setNameFieldFilter(e)}
          style={{ width: 170 }}
          options={optionsFieldFilter}
        ></Select>
        <Select
          value={operatorFilter}
          onChange={(e) => setOperatorFilter(e)}
          style={{ width: 120 }}
          options={optionsOperatorFilter}
        ></Select>
        <InputNumber
          type="number"
          ref={valueFieldFilter}
          onChange={() => handleFilterByField()}
        ></InputNumber>
      </div>

      <Table
        style={{ direction: "rtl" }}
        columns={columns}
        dataSource={filteredData}
      />
    </>
  );
};

export default MeetingRoomsTable;
