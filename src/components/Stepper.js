import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const STEPS_TOTAL = 4;

export default function ProgressMobileStepper({
  activeStep,
  handleNext,
  handleBack,
  handlePersonalInfoFormSubmit,
  handleEducationDetailsFormSubmit,
  handleTravelHistoryFormSubmit,
}) {
  const theme = useTheme();

  // Save activeStep to sessionStorage whenever it changes
  React.useEffect(() => {
    sessionStorage.setItem('activeStep', activeStep.toString());
  }, [activeStep]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <MobileStepper
        variant="progress"
        steps={STEPS_TOTAL}
        position="static"
        activeStep={activeStep}
        sx={{ backgroundColor: 'black', border: '2px solid white',borderRadius: '20px', maxWidth: 400, flexGrow: 1, '& .MuiMobileStepper-progress': {
            backgroundColor: 'white',
          }, }}
        nextButton={
          <Button
            size="small"
            onClick={
              activeStep === 0
                ? handlePersonalInfoFormSubmit
                : activeStep === STEPS_TOTAL - 1
                ? handleTravelHistoryFormSubmit
                : handleEducationDetailsFormSubmit
            }
            style={{color: 'orange', fontFamily: "Raleway, sans-serif"}}
            disabled={activeStep === STEPS_TOTAL - 1}
          >
            {activeStep === STEPS_TOTAL - 1 ? 'Finish' : 'Next'}
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} style={{color: 'orange', fontFamily: "Raleway, sans-serif"}}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
        
      />
    </div>
  );
}
