
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import StyledComponent from './components/Style';
import ParentComponent from './components/Parent';
import ErrorBoundary from './components/ErrorBoundary';
// Lazy load components
const LazyAuth = lazy(() => import('./Auth'));
const LazyCounter = lazy(() => import('./components/CounterComponent'));
const LazyLoading = lazy(() => import('./components/Dashboard'));
const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 4' },
  { id: 3, name: 'Item 3' },
  // Add more items as needed
];
function App() {
  return (
    
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      
        <Route path="/" element={<Home/>}> </Route> 
        {/* <Route path="/Hoc" element={<DashboardtWithLoadingIndicator />}></Route> */}
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

