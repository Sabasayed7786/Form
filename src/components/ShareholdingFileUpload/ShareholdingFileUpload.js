import React from 'react';
import { Form, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const ShareholdingFileUpload = ({ fileList, onChange }) => {
  return (
    <Form.Item label="Upload Shareholding Pattern File" name="shareholdingFile" valuePropName="fileList" getValueFromEvent={onChange}>
      <Upload name="file" action="/upload" fileList={fileList}>
        <Button icon={<UploadOutlined />}>Click to Upload Shareholding Pattern File</Button>
      </Upload>
    </Form.Item>
  );
};

export default ShareholdingFileUpload;
