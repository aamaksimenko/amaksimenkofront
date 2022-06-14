import React, { memo } from 'react';
import {
  bool, func, instanceOf,
} from 'prop-types';

import './index.css';

function Modal({ isActive, setActive, children }) {
  return (

    <div className={isActive ? 'modal active' : 'modal'} onClick={() => setActive(true)} aria-hidden="true">
      <div className="modal__content" onClick={(event) => event.stopPropagation()} aria-hidden="true">
        {children}
      </div>
    </div>
  );
}

Modal.defaultProps = {
  isActive: false,
  setActive: null,
  children: null,
};
Modal.propTypes = {
  isActive: bool,
  setActive: func,
  children: instanceOf(Array),
};

export default memo(Modal);
