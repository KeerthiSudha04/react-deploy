
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import StyledComponent from './components/Style';
import ParentComponent from './components/Parent';
import DashboardtWithLoadingIndicator from './components/Dashboard';
import Auth from './Auth';
// Lazy load components
const LazyAuth = lazy(() => import('./Auth'));
const LazyCounter = lazy(() => import('./components/CounterComponent'));
const LazyLoading = lazy(() => import('./components/Dashboard'));

function App() {
  return (
    
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      
        <Route path="/" element={<Home/>}> </Route> 
        {/* <Route path="/Hoc2" element={<DashboardtWithLoadingIndicator />}></Route> */}
        <Route path="/Hoc" element={<LazyLoading /> } />
        <Route path="/Redux" element={<LazyCounter/>} />
        <Route path="/Auth" element={<LazyAuth/>} />
        <Route path="/Styling" element={<StyledComponent/>}> </Route> 
        <Route path="/Optimize" element={<ParentComponent/> } ></Route>
         
      </Routes>
      </Suspense>
    </BrowserRouter>
   
    
  );
}

export default App;

