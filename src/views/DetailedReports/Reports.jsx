import React, { useEffect, useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const SSRSReport = () => {
  const [reports, setReports] = useState([]);
  const [selectedReportUrl, setSelectedReportUrl] = useState('');
  const [selectedReport, setSelectedReport] = useState('');

  // Fetch reports data from the API
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch(
          'http://100.42.177.77:83/api/Reports/GetReportsByAppId?appId=1'
        );
        const data = await response.json();
        setReports(data.result);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchReports();
  }, []);

  // Handle report selection
  const handleReportChange = (event) => {
    const reportId = event.target.value;
    const selectedReportData = reports.find(
      (report) => report.reportId === reportId
    );
    setSelectedReport(reportId);
    setSelectedReportUrl(
      selectedReportData ? selectedReportData.reportUrl : ''
    );
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <h1>Report Viewer</h1>
      <FormControl fullWidth>
        <InputLabel id="report-select-label">Select Report</InputLabel>
        <Select
          labelId="report-select-label"
          value={selectedReport}
          onChange={handleReportChange}
          label="Select Report"
        >
          {reports.map((report) => (
            <MenuItem key={report.reportId} value={report.reportId}>
              {report.reportName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedReportUrl && (
        <iframe
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
    </div>
  );
};

export default SSRSReport;
