import React, { useState } from 'react';
import { Form, Checkbox, Upload,Input,Button,Alert } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import UploadDocs from '../../../UploadDocs/UploadDocs';
import { CreditCardOutlined } from "@ant-design/icons";
import "../../../App.css";

const Step2 = ({ form, handlePrevious, handleFinish,
    transactionFiles,
    handleTransactionFilesChange,
    documentFiles,
    handleDocumentFilesChange,
    setTransactionOptions, }) => {
        const [couponCode, setCouponCode] = useState("");
  const [validCoupon, setValidCoupon] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(false);
  const [couponError, setCouponError] = useState("");

  const handleCouponChange = (event) => {
    const enteredCoupon = event.target.value;
    setCouponCode(enteredCoupon);

    // Check if the entered coupon code is valid
    const isValidCoupon = enteredCoupon === "AUG2022";
    setValidCoupon(isValidCoupon);

    if (!isValidCoupon && enteredCoupon !== "") {
      setCouponError("Invalid coupon code");
    } else {
      setCouponError("");
    }
  };

  const handleApplyCoupon = () => {
    if (validCoupon) {
      setAppliedCoupon(true);
      console.log("Coupon applied successfully:", couponCode);
    } else {
      setCouponError("Invalid coupon code");
    }
  };




  return (
    <>
    <Form.Item label="Was there any following transaction in 2022" name="transactions2022"
     >
        <Checkbox.Group onChange={setTransactionOptions} >
            <div class="checkbox-items">
          <Checkbox value="capitalInfusion">Capital Infusion</Checkbox>
          <Checkbox value="capitalWithdrawal">Capital Withdrawal</Checkbox>
          <Checkbox value="retailPartyTransaction">
            Retail Party Transaction
          </Checkbox>
          </div>
        </Checkbox.Group>
      </Form.Item >
      <Form.Item label="Upload documents for the same:">
        <Upload.Dragger
          fileList={transactionFiles}
          onChange={handleTransactionFilesChange}
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
      </Form.Item>

      <Form.Item label="Please upload the following documents:" 
      >
        <UploadDocs 
         fileList={documentFiles} onChange={handleDocumentFilesChange} />
      </Form.Item>

      

      <Form.Item label="Plesea complete the payment. We will prepare the draft tax return within 48 hours! " >

      </Form.Item>
      <Form.Item  name="selectPayment">
  <Checkbox style={{ display: 'flex', alignItems: 'center' }}>
    <CreditCardOutlined style={{ marginRight: 8 }} />
    Payment Amount
    <span style={{ marginLeft: 'auto', paddingLeft: 100 }}>
      ($349.00)
    </span>
  </Checkbox>
</Form.Item>

<Form.Item label="Coupon Code">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Input
            value={couponCode}
            onChange={handleCouponChange}
            placeholder="Enter coupon code"
            style={{ marginRight: 8 }}
          />
          <Button type="primary" onClick={handleApplyCoupon}>
            Apply
          </Button>
        </div>
        {couponError && <Alert style={{ marginTop: 8 }} message={couponError} type="error" />}
        {appliedCoupon && (
          <Alert
            style={{ marginTop: 8 }}
            message="Coupon applied successfully!"
            type="success"
          />
        )}
      </Form.Item>
      
    </>
  );
};

export default Step2;
