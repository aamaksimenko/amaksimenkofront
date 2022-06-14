import React, { memo } from 'react';
import * as PropTypes from 'prop-types';
import './index.css';

function Modal({ active, setActive, children }) {
  return (

    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)} aria-hidden="true">
      <div className="modal__content" onClick={(e) => e.stopPropagation()} aria-hidden="true">
        {active}
        {setActive}
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default memo(Modal);
