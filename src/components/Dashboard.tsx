// Dashboard.tsx
import React from 'react';
import withLoadingIndicator from '../HOC/Hoc'
const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Dashboard content */}
    </div>
  );
};


const DashboardtWithLoadingIndicator = withLoadingIndicator(Dashboard);

export default DashboardtWithLoadingIndicator;