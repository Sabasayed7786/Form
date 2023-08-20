import React from 'react';
import { Form, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const SCorpFileUpload = ({ fileList, onChange }) => {
  return (
    <Form.Item label="Please Upload the Incorporation Documents:" name="sCorpFile" valuePropName="fileList" getValueFromEvent={onChange}>
      <Upload name="file" action="/upload" fileList={fileList}>
        <Button icon={<UploadOutlined />}>Click to Upload S-Corp File</Button>
      </Upload>
    </Form.Item>
  );
};

export default SCorpFileUpload;