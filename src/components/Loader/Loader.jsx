import React, { memo } from 'react';

import './index.css';

// Bootstrap classNames
function Loader() {
  return (
    <div className="upper-spinner">
      <div className="spinner-border visible" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default memo(Loader);
