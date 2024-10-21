import React from 'react';
import { Chip } from '@mui/material';

const statusColors = {
  Draft: '#CCCCCC', // Gray
  'In Process': '#FFD700', // golden
  Completed: '#008000', // Green
  Inspected: '#1e88e5', // Blue
  Approved: '#00FF00', // Light Green
  Rejected: '#FF0000', // Red
  Pending: '#f7672c ', // Yellow
  Received: '#33CCCC', // Teal
  Issued: '#FF9900', // Orange
  Cancelled: '#666666', // Dark Gray
  null: '#FFFFFF',
  primaryDark: '#1e88e5',
  green: '#008000',
  darkgreen: ' #006600',
  lightgreen: '#66cc66',
  navyblue: '#000080',
  red: '#800000',
  olive: '#808000',
  pastelgreen: '#66cc99'
  // White (null-status)
};

const StatusChip = ({ status, label }) => {
  if (!status) return null; // Handle null or undefined status

  const chipColor = statusColors[status] || '#FFFFFF'; // Default to white if status not found

  return (
    <Chip
      label={label}
      sx={{
        backgroundColor: chipColor,
        color: chipColor === '#FFFFFF' ? 'black' : 'white' // Make sure text is visible on light backgrounds
      }}
    />
  );
};

export default StatusChip;
