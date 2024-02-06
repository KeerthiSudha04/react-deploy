import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import CounterComponent from "./components/CounterComponent";
// import DashboardtWithLoadingIndicator from "./components/Dashboard";
// import Auth from "./Auth";
import React, { Suspense, lazy } from 'react';
const LazyAuth = React.lazy(() => import('./Auth'));
const LazyCounter = React.lazy(() => import('./components/CounterComponent'));
const LazyLoading  = React.lazy(() => import('./components/Dashboard'));
function Router() {
  
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home/></Suspense>}> </Route> */}
          {/* <Route path="/Hoc" element={<DashboardtWithLoadingIndicator />}></Route> */}
          <Route path="/Hoc" element={<Suspense fallback={<div>Loading...</div>}><LazyLoading /></Suspense>}></Route>
          <Route path="/Redux" element={<Suspense fallback={<div>Loading...</div>}><LazyCounter/></Suspense>}></Route>
          <Route path="/Auth" element={<Suspense fallback={<div>Loading...</div>}><LazyAuth/></Suspense>}> </Route>
        </Routes>
      
    </BrowserRouter>
  );
}

export default Router;


