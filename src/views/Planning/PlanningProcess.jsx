/* eslint-disable prettier/prettier */
import * as React from 'react';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import { useEffect, useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Fabrication from 'views/Planning/Fabrication';
import Embroidery from './Embroidery';
import { Grid, TextField } from '@mui/material';
import PrePlanning from './PrePlanning';
import Dyeing from './Dyeing';
import Schiffli from './Schiffli';
import AdditionalProcess from './AdditionalProcess';
import AddAdditionalServices from './AdditionalServices';
import AdditionalServices from './AdditionalServices';
// import { color } from '@mui/system';
const steps = [
  'Pre Planning',
  'Fabrication',
  'Dyeing/Printing  ',
  'Embroidery ',
  'Schiffli',
  'Additional Process',
  'Additional Services'
];

export default function PlanningProcess() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [lookupDomains, setLookupDomains] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleSave = async () => {
    console.log(formData);
    try {
      const response = await axios.get(
        `https://gecxc.com:4041/api/Common/SaveLookUp?lookupDomain=${formData.lookUpDomain}&LookUpName=${formData.lookUpName}&appId=1`
      );
      console.log('Form data saved:', response.data);
      enqueueSnackbar('Lookup saved successfully!', {
        variant: 'success',
        autoHideDuration: 5000
      });

      // Clear form fields
      setFormData({
        lookUpId: '',
        lookUpName: '',
        lookUpDomain: '',
        lookUpCategory: '',
        enabled: '',
        createdOn: new Date().toISOString()
      });

      // Fetch the updated lookup domains
      // fetchPrePlanningLookUp();
      return response.data;
    } catch (error) {
      console.error('Error saving data:', error);
      throw error;
    }
  };

  useEffect(() => {
    const GetLookUpDomains = async () => {
      try {
        const response = await axios.get(
          `https://gecxc.com:4041/api/Common/GetLookUpDomains?appId=${1}`
        );
        console.log('LookupData', response);
        setLookupDomains(response.data.result);
      } catch (error) {
        console.error('Error fetching design options:', error);
      }
      console.log('LookupData', response);
    };
    GetLookUpDomains();
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={1} width="Inherit">
        <Grid item sm={6}>
          <Typography variant="h2" gutterBottom>
            Planning Process
          </Typography>
          {/* <TextField fullWidth size="small"></TextField> */}
        </Grid>
        <Grid item sm={6} textAlign="right">
          <Button
            aria-describedby={id}
            variant="outlined"
            size="small"
            onClick={handleClick}
          >
            +Lookup
          </Button>
          <Popover
            id="mouse-over-popover"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            sx={{
              '.MuiPopover-paper': {
                width: '300px', // Adjust the width as needed
                padding: '16px' // Add some padding
              }
            }}
          >
            <Grid container spacing={3} width="Inherit">
              <Grid item sm={12}>
                <TextField
                  fullWidth
                  id="outlined-select-currency"
                  select
                  label="Select Design"
                  size="small"
                >
                  {lookupDomains.map((domain) => (
                    <MenuItem
                      key={domain.lookUpDomain}
                      value={domain.lookUpDomain}
                    >
                      {domain.lookUpDomain}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item sm={12}>
                <TextField
                  fullWidth
                  label="Add Lookup Description"
                  size="small"
                ></TextField>
              </Grid>
              <Grid item sm={3} textAlign="right">
                <Button variant="contained" size="small" onClick={handleSave}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </Popover>
        </Grid>
      </Grid>

      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {/* if need buttons on top of page */}
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        {isStepOptional(activeStep) && (
          <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
            Skip
          </Button>
        )}

        <Button onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
      {/*//////////////////////////////////////////////////////////////////////////////////////////*/}
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

          {activeStep === 0 && <PrePlanning />}
          {activeStep === 1 && <Fabrication />}

          {activeStep === 2 && <Dyeing />}
          {activeStep === 3 && <Embroidery />}
          {activeStep === 4 && <Schiffli />}
          {activeStep === 5 && <AdditionalProcess />}
          {activeStep === 6 && <AdditionalServices />}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
