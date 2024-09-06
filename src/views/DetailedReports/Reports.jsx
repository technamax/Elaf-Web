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

const SSRSReport = ({ rId, paramIssuanceId }) => {
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
    if (paramIssuanceId) {
      const iframe = iframeRef.current;
      if (iframe && selectedReportUrl) {
        const newUrl = `${selectedReportUrl}&ParamIssuanceId=${paramIssuanceId || ''}`;
        iframe.src = newUrl;
      }
    }
  }, [selectedReportUrl, paramIssuanceId]);

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
