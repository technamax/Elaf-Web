import React from 'react';

const SSRSReport = () => {
  // Replace with your correct server, path, and parameters
  const reportUrl =
    'http://vmi2038742:82/ReportServer/Pages/ReportViewer.aspx?%2FElafReports%2FCollectionRegistrationReport&rs:embed=true';
  //'http://vmi2038742:82/ReportServer/Pages/ReportViewer.aspx?%2FElafReports%2FDrillDownCollectionReport&rs:embed=true';

  //const reportUrl = 'http://vmi2038742:82/Reports/report/ElafReports/PreplanningReport&rs:embed=true';
  //vmi2038742:82/Reports/report/ElafReports/CollectionRegistrationReport
  http: return (
    <div style={{ height: '100vh', width: '100%' }}>
      <h1>Report Viewer</h1>

      <iframe
        src={reportUrl}
        style={{ height: '100%', width: '100%', border: 'none' }}
        title="SSRS Report"
      ></iframe>
    </div>
  );
};

export default SSRSReport;
