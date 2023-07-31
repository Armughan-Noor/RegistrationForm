import React, { useState } from "react";
import PrimarySearchAppBar from "./components/NavBar";
import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationDetailsForm from "./components/EducationDetailsForm";
import TravelHistoryForm from "./components/TravelHistoryForm";
import ProgressMobileStepper from "./components/Stepper";

export default function HomePage() {
  const [activeStep, setActiveStep] = useState(
    parseInt(sessionStorage.getItem("activeStep") || "0")
  );

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlePersonalInfoFormSubmit = () => {
    setActiveStep(1);
  };

  const handleEducationDetailsFormSubmit = () => {
    setActiveStep(2);
  };

  const handleTravelHistoryFormSubmit = () => {
    setActiveStep(3);
  };

  // Save activeStep to sessionStorage whenever it changes
  React.useEffect(() => {
    sessionStorage.setItem("activeStep", activeStep.toString());
  }, [activeStep]);

  return (
    <>
      <div style={{ width: "100vw" }}>
        <PrimarySearchAppBar />
      </div>

      <div
        style={{
          width: "100vw",
          height: "100vh",
          margin: "0px",
          padding: "100px 0px 0px 0px",
          backgroundColor: "white",
          border: "2px solid white",
        }}
      >
        <ProgressMobileStepper
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
          handlePersonalInfoFormSubmit={handlePersonalInfoFormSubmit}
          handleEducationDetailsFormSubmit={handleEducationDetailsFormSubmit}
          handleTravelHistoryFormSubmit={handleTravelHistoryFormSubmit}
        />
        {activeStep === 0 && (
          <PersonalInfoForm onFormSubmit={handlePersonalInfoFormSubmit} />
        )}
        {activeStep === 1 && (
          <EducationDetailsForm
            onFormSubmit={handleEducationDetailsFormSubmit}
          />
        )}
        {activeStep === 2 && (
          <TravelHistoryForm onFormSubmit={handleTravelHistoryFormSubmit} />
        )}
      </div>
    </>
  );
}
