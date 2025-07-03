import WebApp from '@twa-dev/sdk';
import user from './api/User';
import { useEffect } from 'react';

const App = () => {
  const [trigger, { data }] = user.LoginUser();
  console.log(WebApp.initDataUnsafe.user?.first_name);

  useEffect(()=>{
    trigger({init:WebApp.initData});
  },[trigger]);

  return (
    <div>
      <p className='text-white'>This was a mini app</p>
    </div>
  );
};

export default App;