import React, { Suspense } from 'react';
const LazyComponent = React.lazy(() => import('./LazyComponent'));

const LazyLoad = () => {
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default LazyLoad;
