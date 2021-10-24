import React from "react";

import { Button, Modal } from "antd";

class Works extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>How it works</h2>
            <p>
              Perspiciatis vero similique, ut ducimus modi ipsam autem tempora
            </p>
          </div>
          <div className="contentHolder">
            <Button size="large" onClick={this.showModal}>
              <i className="fas fa-play"></i>
            </Button>
          </div>
          <Modal
            title="VS Code Extension"
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
            destroyOnClose={true}
          >
            <iframe
              title="VS Code Extension"
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/WX7c-hiZzD8"
            ></iframe>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Works;
