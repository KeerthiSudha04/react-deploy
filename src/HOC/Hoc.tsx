// import React, { ComponentType, useState, useEffect } from 'react';

// // Define the higher-order component function
// const withLoadingIndicator = <P extends object>(WrappedComponent: ComponentType<P>): ComponentType<P> => {
//   // Return a new component with loading indicator functionality
//   const WithLoadingIndicator: React.FC<P> = (props) => {
//     const [isLoading, setIsLoading] = useState<boolean>(false);

//     useEffect(() => {
//       setIsLoading(true);
//       // Simulate some asynchronous operation
//       const timer = setTimeout(() => {
//         setIsLoading(false);
//       }, 2000);

//       return () => clearTimeout(timer);
//     }, []);

//     return (
//       <div style={{textAlign:'center'}}>
//         {isLoading ? <p>Loading...</p> : <WrappedComponent {...props} />}
//         This is my example for Higher order component
//       </div>
//     );
//   };

//   // Set a display name for the wrapped component
//   //WithLoadingIndicator.displayName = `WithLoadingIndicator(${WrappedComponent.displayName || WrappedComponent.name})`;

//   return WithLoadingIndicator;
// };

// export default withLoadingIndicator;
import React, { ComponentType, useState, useEffect } from 'react';

const withLoadingIndicator = (WrappedComponent:any) => {
  const WithLoadingIndicator = (props:any) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, []);

    return (
      <div style={{ textAlign: 'center' }}>
       
        {isLoading ? <p>Loading...</p> : <WrappedComponent {...props} />}
        
      </div>
    );
  };

  return WithLoadingIndicator;
};

export default withLoadingIndicator;
