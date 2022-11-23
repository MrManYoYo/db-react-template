import React, { useEffect, useState } from 'react';

export const ErrorBoundaryTest = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    if (!status) throw new Error('Status Error!')
  }, [status]);
  
  return (
    <div>
      {status}
      <button onClick={() => setStatus(false)}>Emit Error</button>
    </div>
  );
}

export default ErrorBoundaryTest;
