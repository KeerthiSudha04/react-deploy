
import React from 'react';
import withLoadingIndicator from '../HOC/Hoc'
const Dashboard = () => {
  return (
    <div>
      <h1>This content is displayed from wrapped component </h1>
     
    </div>
  );
};


const DashboardtWithLoadingIndicator = withLoadingIndicator(Dashboard);

export default DashboardtWithLoadingIndicator;