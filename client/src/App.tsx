import React from 'react';
import BaseApi from './Baseapi';

const App = () => {
  const {} = BaseApi.useCheckQuery(undefined);
  return (
    <div>
      <p className=''>This was a mini app</p>
    </div>
  );
};

export default App;