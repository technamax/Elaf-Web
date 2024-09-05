// src/components/ReportViewer.jsx
import React from 'react';

const ReportViewer = () => {
  const serviceUrl = 'http://VMI2038742:82/ReportServer'; // Your Report Server URL
  const reportPath =
    'http://vmi2038742:82/Reports/report/ElafReports/OGPReport'; // Your report path on SSRS

  return (
    <div>
      <ReportViewerComponent
        id="reportViewer"
        reportServiceUrl={serviceUrl}
        reportPath={reportPath}
        processingMode="Remote"
        toolbarSettings={{ items: ['Export', 'Print'] }}
      />
    </div>
  );
};

export default ReportViewer;
