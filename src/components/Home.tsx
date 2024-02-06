

import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <div>
        <Link to="/Hoc" className="btn btn-primary">
          Navigate to Loader Component
        </Link>
      </div>
      <br />
      <div>
        <Link to="/Redux" className="btn btn-primary">
          Navigate to Redux Component
        </Link>
      </div>
      <br />
      <div>
        <Link to="/Auth" className="btn btn-primary">
          Navigate to Authentication Component
        </Link>
      </div>
      <br />
      <div>
        <Link to="/Styling" className="btn btn-primary">
          Navigate to Styled Component
        </Link>
      </div>
      <br />
      <div>
        <Link to="/Optimize" className="btn btn-primary">
          Navigate to Optimize Component
        </Link>
      </div>
      <br />
    </div>
  );
};

export default Home;

