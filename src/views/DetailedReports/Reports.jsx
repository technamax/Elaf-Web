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
  POSummary,
  OGPNumber,
  PO,
  GRN,
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
          'http://100.42.177.77:86/api/Reports/GetReportsByAppId?appId=1'
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
    const iframe = iframeRef.current;
    if (paramRejectionId > 0) {
      const iframe = iframeRef.current;
      if (iframe && selectedReportUrl) {
        const newUrl = `${selectedReportUrl}&paramRejectionId=${paramRejectionId || ''}`;
        iframe.src = newUrl;
      }
      return;
    }
    if (iframe && selectedReportUrl) {
      const paramMap = {
        ParamIssuanceId:
          ogpView?.paramIssuanceId ||
          DyeingIssuance?.paramIssuanceId ||
          receiving?.paramIssuanceId,
        ParamOGP: ogpView?.ogpNumber,
        ParamIGPNumber: OGPNumber || igpReport?.ParamIGPNumber,
        ParamInspectionId: inspection?.ParamInspectionId,
        paramRejectionId: paramRejectionId > 0 ? paramRejectionId : undefined,
        ParamPoIdName: PO?.ParamPoIdName,
        ParamGRNInspectionId: GRN?.ParamInspectionId,
        DsPoList: POSummary?.dsPoList
      };

      // Construct the URL with the available parameters
      const queryParams = Object.entries(paramMap)
        .filter(([key, value]) => value !== undefined && value !== '') // Exclude undefined or empty parameters
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');

      const newUrl = `${selectedReportUrl}${queryParams ? '&' + queryParams : ''}`;

      // Set the iframe source
      console.log('Generated iframe URL:', newUrl);
      iframe.src = newUrl;
    }
  }, [
    selectedReportUrl,
    ogpView,
    OGPNumber,
    DyeingIssuance,
    receiving,
    inspection,
    igpReport,
    paramRejectionId,
    PO,
    GRN
  ]);

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

// useEffect(() => {
//   if (ogpView) {
//     const iframe = iframeRef.current;
//     if (iframe && selectedReportUrl) {
//       const newUrl = `${selectedReportUrl}&ParamIssuanceId=${ogpView?.paramIssuanceId || ''}&ParamOGP=${ogpView?.ogpNumber || ''}`;
//       iframe.src = newUrl;
//     }
//   }
//   if (OGPNumber) {
//     const iframe = iframeRef.current;
//     if (iframe && selectedReportUrl) {
//       const newUrl = `${selectedReportUrl}&ParamIGPNumber=${OGPNumber || ''}`;
//       iframe.src = newUrl;
//     }
//   }
//   if (DyeingIssuance) {
//     const iframe = iframeRef.current;
//     if (iframe && selectedReportUrl) {
//       const newUrl = `${selectedReportUrl}&ParamIssuanceId=${DyeingIssuance?.paramIssuanceId || ''}`;
//       iframe.src = newUrl;
//     }
//   }
//   if (receiving) {
//     const iframe = iframeRef.current;
//     if (iframe && selectedReportUrl) {
//       const newUrl = `${selectedReportUrl}&ParamIssuanceId=${receiving?.paramIssuanceId || ''}`;
//       iframe.src = newUrl;
//       console.log('Generated iframe URL1:', newUrl);
//     }
//   }
//   if (inspection) {
//     const iframe = iframeRef.current;
//     if (iframe && selectedReportUrl) {
//       const newUrl = `${selectedReportUrl}&ParamInspectionId=${inspection?.ParamInspectionId || ''}`;
//       iframe.src = newUrl;
//       console.log('Generated iframe URL1:', newUrl);
//     }
//   }
//   if (igpReport) {
//     const iframe = iframeRef.current;
//     if (iframe && selectedReportUrl) {
//       const newUrl = `${selectedReportUrl}&ParamIGPNumber=${igpReport?.ParamIGPNumber || ''}`;
//       iframe.src = newUrl;
//     }
//   }
//   if (paramRejectionId > 0) {
//     const iframe = iframeRef.current;
//     if (iframe && selectedReportUrl) {
//       const newUrl = `${selectedReportUrl}&paramRejectionId=${paramRejectionId || ''}`;
//       iframe.src = newUrl;
//     }
//   }
//   if (PO) {
//     const iframe = iframeRef.current;
//     if (iframe && selectedReportUrl) {
//       const newUrl = `${selectedReportUrl}&ParamPoIdName=${PO?.ParamPoIdName || ''}`;
//       iframe.src = newUrl;
//     }
//   }
//   if (GRN) {
//     const iframe = iframeRef.current;
//     if (iframe && selectedReportUrl) {
//       const newUrl = `${selectedReportUrl}&ParamInspectionId=${GRN?.ParamInspectionId || ''}`;
//       iframe.src = newUrl;
//     }
//   }
// }, [selectedReportUrl, paramIssuanceId, OGPNumber, ogpNumber]);
