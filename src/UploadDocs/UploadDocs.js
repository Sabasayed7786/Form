import React from 'react';
import {  Upload, Checkbox } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import "../App.css";

const UploadDocs = ({ fileList, onChange }) => {
    return (
        <div class="checkbox-items">
        <Checkbox value="bankStatements">Bank Statements</Checkbox>
        <Checkbox value="cardStatements">Credit Card Statements</Checkbox>
        <Checkbox value="form10991">Form 10991</Checkbox>
        <Checkbox value="form940941">Form 940 / 941</Checkbox>
        <Checkbox value="einCertificate">EIN Certificate</Checkbox>
        <Checkbox value="irsAcceptanceLetter">IRS Acceptance Letter of S-Corp</Checkbox>
        <Checkbox value="financials">Financials (if Prepared)</Checkbox>
        <Upload.Dragger
          fileList={fileList}
          onChange={onChange}
          multiple
          accept=".pdf,.doc,.docx"
        >
          <p className="ant-upload-drag-icon">
            <UploadOutlined />
          </p>
          <p className="ant-upload-text">
            Drag & drop files here or click to select
          </p>
        </Upload.Dragger>
      </div>
    );
  };
  
  export default UploadDocs;