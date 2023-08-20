import React, { useState } from "react";
import { Button, Modal, List } from "antd";
import FileUploadForm from "./FileUploadForm"; // Import the existing form component

const FormListPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [submittedForms, setSubmittedForms] = useState([]); // Array to store submitted forms

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleFormSubmit = (formData) => {
    // Save the submitted form data
    setSubmittedForms([...submittedForms, formData]);
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Create New Form
      </Button>
      <Modal
        title="Create Form"
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
        width={800}
      >
        <FileUploadForm onSubmit={handleFormSubmit} />
      </Modal>
      <List
        header={<div>Submitted Forms</div>}
        bordered
        dataSource={submittedForms}
        renderItem={(item) => (
          <List.Item>
            <div>{/* Render the form data as list items here */}</div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default FormListPage;


