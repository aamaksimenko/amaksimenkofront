import React, { memo } from 'react';
import * as PropTypes from 'prop-types';
import './index.css';

function Modal({ active, setActive, children }) {
  return (
  /* eslint-disable */
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
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
  children: PropTypes.object.isRequired,
};
 /* eslint-enable */
export default memo(Modal);
