import React, { memo } from 'react';
import classNames from 'classnames/bind';
import {
  bool,
  func,
  node,
} from 'prop-types';

import './index.css';

function Modal({ isActive, setActive, children }) {
  return (
    <div
      className={classNames({
        modal: true,
        active: isActive,
      })}
      onClick={() => setActive(true)}
      aria-hidden="true"
    >
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
  children: node,
};

export default memo(Modal);
