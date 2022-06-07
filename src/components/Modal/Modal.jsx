import React, { memo } from 'react';
import * as PropTypes from 'prop-types';
import './index.css';

function Modal({ active, setActive, children }) {
  return (
    /* eslint-disable */
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        {active}
        {setActive}
        {children}  
      </div>
    </div>
    /* eslint-enable */
  );
}

Modal.propTypes = {
  active: PropTypes.string.isRequired,
  setActive: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default memo(Modal);
