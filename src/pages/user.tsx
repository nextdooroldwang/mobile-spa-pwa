import dsBridge from 'dsBridge';
import { useState } from 'react';
import { Link } from 'umi';

const User = () => {
  const [dsState, setDsState] = useState('null');

  return (
    <div>
      <div
        onClick={() => {
          const str = dsBridge.call('token.getToken', '123');
          setDsState(str);
        }}
      >
        --mma-dsBridge-ynn-
      </div>
      {dsState}

      <Link to="/chat">csr to chat</Link>
    </div>
  );
};

export default User;
