import { Button, Modal } from "antd";
import { useState } from "react";

const ModalEditMeetingRooms = ({ openModal }) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  // state = {
  //   loading: false,
  //   visible: false,
  // };

  let showModal = () => {
    setVisible(true);
    // this.setState({
    //   visible: true,
    // });
  };

  let handleOk = () => {
    // this.setState({ loading: true });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
      // this.setState({ loading: false, visible: false });
    }, 3000);
  };

  let handleCancel = () => {
    // this.setState({ visible: false });
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        visible={openModal}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default ModalEditMeetingRooms;
