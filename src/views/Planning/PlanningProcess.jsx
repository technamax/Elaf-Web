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
import { Grid, TextField, Chip } from '@mui/material';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';

import PrePlanning from './PrePlanning';
import Dyeing from './Dyeing';
import Schiffli from './Schiffli';
import AdditionalProcess from './AdditionalProcess';
import AddAdditionalServices from './AdditionalServices';
import AdditionalServices from './AdditionalServices';
import { SnackbarProvider, useSnackbar } from 'notistack';
import '../../assets/scss/style.scss';
import Summary from './Summary';
import convert from 'convert-units';

const steps = [
  'Pre Planning',
  'Fabrication',
  'Dyeing/Printing  ',
  'Embroidery ',
  'Schiffli',
  'Additional Process',
  'Additional Services',
  'Summary'
];

export default function PlanningProcess() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [convertAnchorEl, setConvertAnchorEl] = React.useState(null);
  const [lookupDomains, setLookupDomains] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const { data: lookupData, refetch } = useGetLookUpListQuery();
  const [initialValues, setInitialValues] = useState({});
  const [formData, setFormData] = useState({
    lookUpId: '',
    lookUpName: '',
    lookUpDomain: '',
    lookUpCategory: '',
    enabled: '',
    createdOn: new Date().toISOString()
  });
  const [conversionData, setConversionData] = useState({
    fromUnit: 'm',
    toUnit: 'cm',
    inputValue: '',
    outputValue: ''
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleConvertClick = (event) => {
    setConvertAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setConvertAnchorEl(null);
    setConversionData({
      fromUnit: 'm',
      toUnit: 'cm',
      inputValue: '',
      outputValue: ''
    });
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

  useEffect(() => {
    const GetLookUpDomains = async () => {
      try {
        const response = await axios.get(
          `https://gecxc.com:449/api/Common/GetLookUpDomains?appId=${1}`
        );
        console.log('LookupData', response);
        setLookupDomains(response.data.result);
      } catch (error) {
        console.error('Error fetching design options:', error);
      }
      // console.log('LookupData', response);
    };
    GetLookUpDomains();
  }, []);
  const handleSave = async () => {
    if (!formData.lookUpDomain || !formData.lookUpName) {
      enqueueSnackbar('Please fill in all required fields.', {
        variant: 'error',
        autoHideDuration: 5000
      });
      return;
    }

    try {
      const response = await axios.get(
        `https://gecxc.com:449/api/Common/SaveLookUp?lookupDomain=${formData.lookUpDomain}&LookUpName=${formData.lookUpName}&appId=1`
      );
      enqueueSnackbar('Lookup saved successfully!', {
        variant: 'success',
        autoHideDuration: 5000
      });
      setFormData({
        lookUpId: '',
        lookUpName: '',
        lookUpDomain: '',
        lookUpCategory: '',
        enabled: '',
        createdOn: new Date().toISOString()
      });
      refetch();
      return response.data;
    } catch (error) {
      enqueueSnackbar('Error saving data. Please try again.', {
        variant: 'error',
        autoHideDuration: 5000
      });
      throw error;
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleConversionChange = (e) => {
  //   setConversionData({
  //     ...conversionData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleConvert = () => {
  //   const outputValue = convert(conversionData.inputValue)
  //     .from(conversionData.fromUnit)
  //     .to(conversionData.toUnit);
  //   setConversionData({ ...conversionData, outputValue });
  // };
  const handleConversionChange = (e) => {
    const { name, value } = e.target;
    setConversionData((prevData) => {
      const newData = { ...prevData, [name]: value };
      const direction = name === 'inputValue' ? 'L2R' : 'R2L';

      if (direction === 'L2R') {
        newData.outputValue = convert(value)
          .from(newData.fromUnit)
          .to(newData.toUnit);
      } else {
        newData.inputValue = convert(value)
          .from(newData.toUnit)
          .to(newData.fromUnit);
      }

      return newData;
    });
  };

  useEffect(() => {
    const GetLookUpDomains = async () => {
      try {
        const response = await axios.get(
          `https://gecxc.com:449/api/Common/GetLookUpDomains?appId=${1}`
        );
        setLookupDomains(response.data.result);
      } catch (error) {
        console.error('Error fetching design options:', error);
      }
    };
    GetLookUpDomains();
  }, []);

  const open = Boolean(anchorEl);
  const convertOpen = Boolean(convertAnchorEl);
  const id = open ? 'simple-popover' : undefined;
  const convertId = convertOpen ? 'convert-popover' : undefined;

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
            sx={{ marginRight: '8px' }}
          >
            +Lookup
          </Button>
          <Button
            aria-describedby={convertId}
            variant="outlined"
            size="small"
            onClick={handleConvertClick}
          >
            Convertor
          </Button>
          <Popover
            id={convertId}
            open={convertOpen}
            anchorEl={convertAnchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            sx={{
              '.MuiPopover-paper': {
                width: '300px',
                padding: '16px'
              }
            }}
          >
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  select
                  label="From"
                  size="small"
                  name="fromUnit"
                  value={conversionData.fromUnit}
                  onChange={handleConversionChange}
                >
                  {convert()
                    .possibilities('length')
                    .map((unit) => (
                      <MenuItem key={unit} value={unit}>
                        {unit}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  select
                  label="To"
                  size="small"
                  name="toUnit"
                  value={conversionData.toUnit}
                  onChange={handleConversionChange}
                >
                  {convert()
                    .possibilities('length')
                    .map((unit) => (
                      <MenuItem key={unit} value={unit}>
                        {unit}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>
              <Grid item sm={12}>
                <TextField
                  fullWidth
                  label={conversionData.fromUnit}
                  size="small"
                  name="inputValue"
                  value={conversionData.inputValue}
                  onChange={handleConversionChange}
                  type="number"
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  fullWidth
                  label={conversionData.toUnit}
                  size="small"
                  name="outputValue"
                  value={conversionData.outputValue}
                  onChange={handleConversionChange}
                  type="number"
                  // InputProps={{
                  //   readOnly: true
                  // }}
                />
              </Grid>
              {/* <Grid item sm={12} textAlign="right">
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleConvert}
                >
                  Convert
                </Button>
              </Grid> */}
            </Grid>
          </Popover>
          <Popover
            id="mouse-over-popover"
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            sx={{
              '.MuiPopover-paper': {
                width: '300px',
                padding: '16px'
              }
            }}
          >
            <Grid container spacing={3} width="Inherit">
              <Grid item sm={12}>
                <TextField
                  fullWidth
                  select
                  label="Select Lookup"
                  size="small"
                  value={formData.lookUpDomain}
                  name="lookUpDomain"
                  onChange={handleChange}
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
                  value={formData.lookUpName}
                  onChange={handleChange}
                  name="lookUpName"
                  size="small"
                />
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
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                {...labelProps}
                onClick={() => setActiveStep(index)}
                style={{ cursor: 'pointer' }}
              >
                {' '}
                {label}
              </StepLabel>
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
          {/* <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography> */}
          <Summary setActiveStep={setActiveStep} />
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}

          {activeStep === 0 && (
            <PrePlanning
              setInitialValues={setInitialValues}
              initialValues={initialValues}
            />
          )}
          {activeStep === 1 && (
            <Fabrication
              setInitialValues={setInitialValues}
              initialValues={initialValues}
            />
          )}

          {activeStep === 2 && <Dyeing initialValues={initialValues} />}
          {activeStep === 3 && <Embroidery initialValues={initialValues} />}
          {activeStep === 4 && <Schiffli initialValues={initialValues} />}
          {activeStep === 5 && (
            <AdditionalProcess initialValues={initialValues} />
          )}
          {activeStep === 6 && (
            <AdditionalServices initialValues={initialValues} />
          )}
          {activeStep === 7 && (
            <Summary
              setActiveStep={setActiveStep}
              setInitialValues={setInitialValues}
              initialValues={initialValues}
            />
          )}
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
