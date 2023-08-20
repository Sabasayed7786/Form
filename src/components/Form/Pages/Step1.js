
import React from "react";
import { Form, Input, Select } from "antd";
import ReturnFileUpload from "../../ReturnFileUpload/ReturnFileUpload";
import SCorpFileUpload from "../../SCorpFileUpload/SCorpFileUpload";
import ShareholdingFileUpload from "../../ShareholdingFileUpload/ShareholdingFileUpload";



const { Option } = Select;

const Step1 = ({ form,
    handleNext,
    handleReturnLastYearChange,
    returnLastYear,
    handleIncorporated2022Change,
    incorporated2022,
    sCorpFileList,
    handleSCorpFileChange,
    handleOwnershipChangeChange,
    ownershipChange,
    shareholdingFileList,
    handleShareholdingFileChange,
    
    handleReturnFileChange,
    returnFileList }) => {
    


    
  return (
    <>
      <Form.Item
        label="Email"
        name="email"
        rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email address!' }
          ]}
      >
        <Input type="email" placeholder="Enter your email" />
      </Form.Item>
      <Form.Item
        label="Did you file the returns last year?"
        name="returnLastYear"
        rules={[{ required: true, message: "Please Provide Response" }]}
      >
        <Select
          placeholder="File Upload"
          onChange={handleReturnLastYearChange}
        >
          <Option value={true}>Yes</Option>
          <Option value={false}>No</Option>
        </Select>
      </Form.Item>
      {returnLastYear && (
        <>
          <ReturnFileUpload rules={[
    { required: true, message: 'Please upload the return file!' }
  ]}
            fileList={returnFileList}
            onChange={handleReturnFileChange}
          />
          <Form.Item
            label="Was the S-Corp incorporated in 2022?"
            name="incorporated2022"
            
          >
            <Select
              placeholder="Select an option"
              disabled={!returnLastYear}
              onChange={handleIncorporated2022Change}
            >
              <Option value={true}>Yes</Option>
              <Option value={false}>No</Option>
            </Select>
          </Form.Item>
          {incorporated2022 && (
            <SCorpFileUpload
              fileList={sCorpFileList}
              onChange={handleSCorpFileChange}
            />
          )}
        </>
      )}
      <Form.Item
        label="Was there any change in Ownership Structure in 2022?"
        name="ownershipChange"
        rules={[{ required: true, message: "Please Provide Response" }]}
      >
        <Select
          placeholder="Upload Latest Shareholding pattern."
          onChange={handleOwnershipChangeChange}
        >
          <Option value={true}>Yes</Option>
          <Option value={false}>No</Option>
        </Select>
      </Form.Item>
      {ownershipChange && (
        <ShareholdingFileUpload
          fileList={shareholdingFileList}
          onChange={handleShareholdingFileChange}
        />
      )}

      
      

     
    </>
  );
};

export default Step1;
