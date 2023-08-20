import React from 'react';
import { Form, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const ReturnFileUpload = ({ fileList, onChange }) => {
  return (
    <Form.Item label="Upload Return File" name="returnFile" valuePropName="fileList" getValueFromEvent={onChange}>
      <Upload name="file" action="/upload" fileList={fileList}>
        <Button icon={<UploadOutlined />}>Click to Upload Return File</Button>
      </Upload>
    </Form.Item>
  );
};

export default ReturnFileUpload;