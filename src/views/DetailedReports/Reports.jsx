import React, { useEffect, useState, useRef } from 'react';
import {
  MenuItem,
  Select,
  Typography,
  Grid,
  TextField,
  Card,
  CardHeader
} from '@mui/material';

const SSRSReport = ({
  rId,
  DyeingIssuance,
  ogpView,
  receiving,
  inspection,
  igpReport,
  paramIssuanceId,
  OGPNumber,
  ogpNumber,
  paramRejectionId,
  issuanceOgp
}) => {
  const [reports, setReports] = useState([]);
  const [selectedReportUrl, setSelectedReportUrl] = useState('');
  const [selectedReport, setSelectedReport] = useState('');
  const [selectedReportDesc, setSelectedReportDesc] = useState('');
  const iframeRef = useRef(null);

  // Fetch reports data from the API
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch(
          'http://100.42.177.77:83/api/Reports/GetReportsByAppId?appId=1'
        );
        const data = await response.json();
        setReports(data.result);

        // If rId is passed, auto-select the report
        if (rId) {
          const report = data.result.find((report) => report.reportId === rId);
          if (report) {
            setSelectedReport(rId);
            setSelectedReportUrl(report.reportUrl);
            setSelectedReportDesc(report.reportDesc);
          }
        }
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchReports();
  }, [rId]);

  // Handle report selection by the user
  const handleReportChange = (event) => {
    const reportId = event.target.value;
    const selectedReportData = reports.find(
      (report) => report.reportId === reportId
    );
    setSelectedReport(reportId);
    setSelectedReportUrl(
      selectedReportData ? selectedReportData.reportUrl : ''
    );
    setSelectedReportDesc(
      selectedReportData ? selectedReportData.reportDesc : ''
    );
  };

  useEffect(() => {
    if (ogpView) {
      const iframe = iframeRef.current;
      if (iframe && selectedReportUrl) {
        const newUrl = `${selectedReportUrl}&ParamIssuanceId=${ogpView?.paramIssuanceId || ''}&ParamOGP=${ogpView?.ogpNumber || ''}`;
        iframe.src = newUrl;
      }
    }
    if (OGPNumber) {
      const iframe = iframeRef.current;
      if (iframe && selectedReportUrl) {
        const newUrl = `${selectedReportUrl}&ParamIGPNumber=${OGPNumber || ''}`;
        iframe.src = newUrl;
      }
    }
    if (DyeingIssuance) {
      const iframe = iframeRef.current;
      if (iframe && selectedReportUrl) {
        const newUrl = `${selectedReportUrl}&ParamIssuanceId=${DyeingIssuance?.paramIssuanceId || ''}`;
        iframe.src = newUrl;
      }
    }
    if (receiving) {
      const iframe = iframeRef.current;
      if (iframe && selectedReportUrl) {
        const newUrl = `${selectedReportUrl}&ParamIssuanceId=${receiving?.paramIssuanceId || ''}`;
        iframe.src = newUrl;
      }
    }
    if (inspection) {
      const iframe = iframeRef.current;
      if (iframe && selectedReportUrl) {
        const newUrl = `${selectedReportUrl}&ParamInspectionId=${inspection?.ParamInspectionId || ''}`;
        iframe.src = newUrl;
      }
    }
    if (igpReport) {
      const iframe = iframeRef.current;
      if (iframe && selectedReportUrl) {
        const newUrl = `${selectedReportUrl}&ParamIGPNumber=${igpReport?.ParamIGPNumber || ''}`;
        iframe.src = newUrl;
      }
    }
    if (paramRejectionId > 0) {
      const iframe = iframeRef.current;
      if (iframe && selectedReportUrl) {
        const newUrl = `${selectedReportUrl}&paramRejectionId=${paramRejectionId || ''}`;
        iframe.src = newUrl;
      }
    }
  }, [selectedReportUrl, paramIssuanceId, OGPNumber, ogpNumber]);

  return (
    <Card variant="outlined">
      <CardHeader
        className="css-4rfrnx-MuiCardHeader-root"
        // avatar={<VisibilityOutlinedIcon />}
        title="View Reports "
        titleTypographyProps={{ style: { color: 'white' } }}
      ></CardHeader>{' '}
      <Grid
        container
        spacing={2}
        width="Inherit"
        sx={{ paddingY: 2, paddingX: 2 }}
      >
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            select
            label="Select Report"
            name="selectedReport"
            value={rId || selectedReport}
            onChange={handleReportChange}
            size="small"
            InputLabelProps={{
              sx: {
                color: 'black'
              }
            }}
          >
            {reports.map((report) => (
              <MenuItem key={report.reportId} value={report.reportId}>
                {report.reportName}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Report Description"
            name="selectedReportDesc"
            value={selectedReportDesc}
            InputProps={{
              readOnly: true
            }}
            size="small"
            InputLabelProps={{
              sx: {
                color: 'black'
              }
            }}
          />
        </Grid>
      </Grid>
      {selectedReportUrl && (
        <iframe
          ref={iframeRef}
          src={selectedReportUrl}
          style={{
            height: '80vh',
            width: '100%',
            border: 'none',
            marginTop: '20px'
          }}
          title="SSRS Report"
        ></iframe>
      )}
    </Card>
  );
};

export default SSRSReport;
