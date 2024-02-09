

import React from 'react';
import { Link } from 'react-router-dom';
/* styles.css */



const Home: React.FC = () => {
  return (

      <div style={{textAlign:'center', paddingTop: '100px' }}>
      <h1><b>Welcome to My Home Page!</b></h1>
      <h2>This is the landing page of My website.</h2>
      <nav style={{ marginTop: '20px'}}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link to="/Hoc" style={{ textDecoration: 'none', color: 'blue' }}>Loader</Link>
          </li>
          <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link to="/Redux" style={{ textDecoration: 'none', color: 'blue' }}>Redux</Link>
          </li>
          <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link to="/Auth" style={{ textDecoration: 'none', color: 'blue' }}>Authentication</Link>
          </li>
          <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link to="/Styling" style={{ textDecoration: 'none', color: 'blue' }}>Styled Component</Link>
          </li>
          <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link to="/Optimize" style={{ textDecoration: 'none', color: 'blue' }}>Optimization</Link>
          </li>
        </ul>
      </nav>
    </div>
    
    
  );
};

export default Home;

