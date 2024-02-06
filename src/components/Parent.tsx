import React, { useState, memo } from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = memo(({ name }) => {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return <h3>Hello{name && ', '}{name}!</h3>;
});

const Optimize: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <>
      <label>
        Name{': '}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br/>
      <label>
        Address{': '}
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  );
};

export default Optimize;



// without Optimization
// import React, { useState } from 'react';

// interface GreetingProps {
//   name: string;
// }

// const Greeting: React.FC<GreetingProps> = ({ name }) => {
//   console.log("Greeting was rendered at", new Date().toLocaleTimeString());
//   return <h3>Hello{name && ', '}{name}!</h3>;
// };

// const Optimize: React.FC = () => {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');

//   return (
//     <>
//       <label>
//         Name{': '}
//         <input value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <br/>
//       <label>
//         Address{': '}
//         <input value={address} onChange={(e) => setAddress(e.target.value)} />
//       </label>
//       <Greeting name={name} />
//     </>
//   );
// };

// export default Optimize;
