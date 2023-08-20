import React, { useState } from "react";
import { Button,Form,message } from "antd";
import Step1 from "./Pages/Step1";
import Step2 from "./Pages/Step2";
import "./FileUploadForm.css";



const FileUploadForm = ({onSubmit}) => {
  const [form] = Form.useForm();
  const [returnLastYear, setReturnLastYear] = useState(false);
  const [incorporated2022, setIncorporated2022] = useState(false);
  const [returnFileList, setReturnFileList] = useState([]);
  const [sCorpFileList, setSCorpFileList] = useState([]);
  const [ownershipChange, setOwnershipChange] = useState(false);
  const [shareholdingFileList, setShareholdingFileList] = useState([]);
  const [transactionOptions, setTransactionOptions] = useState([]);
  const [transactionFiles, setTransactionFiles] = useState([]);
  const [documentFiles, setDocumentFiles] = useState([]);
  const [checklistOptions, setChecklistOptions] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Data, setStep1Data] = useState({});
  const [step2Data, setStep2Data] = useState({});
  

  const OnFinish = (values) => {
    // Check if all required fields are provided
    const isStep1Complete =
      values.email &&
      ((values.returnLastYear && values.incorporated2022) || !values.returnLastYear) &&
      ((values.ownershipChange && (values.shareholdingFileList?.length > 0)) || !values.ownershipChange);

    const isStep2Complete =
      (values.transactionFiles?.length > 0) &&
      (values.documentFiles?.length > 0);

      if (isStep1Complete) {
        console.log("Step 1 is complete. Checking for Step 2...");
      
        if (!isStep2Complete) {
          console.log("Some Step 2 data is missing. Submitting the form without files...");
          
          // Display a message to the user
          message.warning("Some Step 2 data is missing. The form will be submitted without files.");
      
          // Reset form fields (excluding files)
          form.resetFields([
            "transactionFiles",
            "documentFiles",
          ]);
      
          // Save form data and call the onSubmit function for Step 1
          const formData = {
            step1Data,
            step2Data: {}, // Step 2 data is missing, so provide an empty object
          };
          onSubmit(formData);
      
          // Reset form data and step
          setStep1Data({});
          setStep2Data({});
        } else {
          // Display success message and reset form
          message.success("Form submitted successfully!");
          form.resetFields();
          setCurrentStep(1); // Reset to the first step
      
          // Save form data and call the onSubmit function
          const formData = {
            step1Data,
            step2Data,
          };
          onSubmit(formData);
      
          // Reset form data and step
          setStep1Data({});
          setStep2Data({});
        }
      
    } else {
      const missingFields = [];
      if (!values.email) missingFields.push("Email");
      if (!isStep1Complete) missingFields.push("Step 1 data");
      if (!isStep2Complete) missingFields.push("Step 2 data");

      const missingFieldsMessage = `Missing required fields: ${missingFields.join(", ")}`;
      message.error(missingFieldsMessage);
    }
  };


  const handleReturnLastYearChange = (value) => {
    setReturnLastYear(value);
    if (!value) {
      setIncorporated2022(false);
      setReturnFileList([]);
      setSCorpFileList([]);
      form.setFieldsValue({
        incorporated2022: false,
      });
    }
  };

  const handleIncorporated2022Change = (value) => {
    setIncorporated2022(value);
    if (!value) {
      setSCorpFileList([]);
    }
  };

  const handleReturnFileChange = ({ fileList }) => {
    setReturnFileList(fileList);
  };

  const handleSCorpFileChange = ({ fileList }) => {
    setSCorpFileList(fileList);
  };

  const handleOwnershipChangeChange = (value) => {
    setOwnershipChange(value);
    if (!value) {
      setShareholdingFileList([]);
    }
  };

  const handleShareholdingFileChange = ({ fileList }) => {
    setShareholdingFileList(fileList);
  };

  // const handleTransactionFilesChange = ({ fileList }) => {
  //   setTransactionFiles(fileList);
  // };

  // const handleDocumentFilesChange = ({ fileList }) => {
  //   setDocumentFiles(fileList);
  // };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };
  // const handleFinish = (values) => {
  //   console.log('Form values:', values);
  //   // You can handle the submission or API call here
  // };
  
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    form.submit(); // Manually submit the form
  };


  const handleSaveStep1 = (values) => {
    setStep1Data(values); // Save step 1 form data in state
  };

  const handleSaveStep2 = (values) => {
    setStep2Data(values); // Save step 2 form data in state
  };

  return (
    <div className="form-container">
    <Form form={form} name="file_upload_form" onFinish={OnFinish} layout="vertical">
      
    {currentStep === 1 && <Step1 form={form}
          handleReturnLastYearChange={handleReturnLastYearChange}
          returnLastYear={returnLastYear}
          handleIncorporated2022Change={handleIncorporated2022Change}
          incorporated2022={incorporated2022}
          sCorpFileList={sCorpFileList}
          handleSCorpFileChange={handleSCorpFileChange}
          handleOwnershipChangeChange={handleOwnershipChangeChange}
          ownershipChange={ownershipChange}
          shareholdingFileList={shareholdingFileList}
          handleShareholdingFileChange={handleShareholdingFileChange}
          setTransactionOptions={setTransactionOptions} 
          handleReturnFileChange={handleReturnFileChange}
          returnFileList={returnFileList}
          onSave={handleSaveStep1}/>}
    {currentStep === 2 && (
        <Step2
          transactionFiles={transactionFiles}
          handleTransactionFilesChange={setTransactionFiles}
          documentFiles={documentFiles}
          handleDocumentFilesChange={setDocumentFiles}
          onSave={handleSaveStep2}
        />
      )}
      {/* Render navigation buttons */}
      <div className="button-container">
      {currentStep > 1 && (
  <Button style={{ marginRight: 8 }} onClick={handlePrevious}>
    Previous
  </Button>
)}
{currentStep === 1 && (
  <Button style={{ marginRight: 8 }} onClick={handleFormSubmit}>
    Save
  </Button>
)}
{currentStep < 2 && (
  <Button type="primary" onClick={handleNext}>
    Next
  </Button>
)}
{currentStep === 2 && (
  <Button type="primary"  htmlType="submit">
    Submit
  </Button>
)}
</div>
  </Form>
  </div>
  );
};

export default FileUploadForm;
