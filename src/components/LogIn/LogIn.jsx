import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bool, func } from 'prop-types';
import { useFormik } from 'formik';

import { postLogIn } from '../../redux/actions/actionCreator';
import Modal from '../Modal/Modal';
import InfoBlock from '../InfoBlock/InfoBlock';
import { initialValuesLogIn, validationSchemaLogIn } from '../constants';

import './login.css';

function LogIn({ isLogIn, setModalLogIn }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const statusLogIn = useSelector((state) => state.userReducer);

  const submitLogIn = useCallback((values) => {
    dispatch(postLogIn(values));
    setModalLogIn(false);
    navigate('/user_page');
  }, [dispatch]);

  const formik = useFormik({
    initialValues: initialValuesLogIn,
    validationSchema: validationSchemaLogIn,
    onSubmit: submitLogIn,
  });

  return (
    <Modal isActive={isLogIn} setActive={setModalLogIn}>
      <h2 className="modal-title">Sign in</h2>

      <form onSubmit={formik.handleSubmit}>
        <div className="form-div">
          <h3>Email address</h3>
          <input
            className="form-input"
            id="email_log"
            type="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <h3>Password</h3>
          <input
            className="form-input"
            id="password_log"
            type="password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          <br />
        </div>
        <button type="submit" id="SubmitButton" className="modal-button">Submit</button>
        <button
          type="button"
          id="CloseButton"
          className="modal-button"
          onClick={() => setModalLogIn(false)}
        >
          Close
        </button>
      </form>

      {statusLogIn.error
        ? <InfoBlock severity="error" text={statusLogIn.error} />
        : null}
    </Modal>
  );
}
LogIn.defaultProps = {
  isLogIn: false,
  setModalLogIn: null,
};

LogIn.propTypes = {
  isLogIn: bool,
  setModalLogIn: func,
};

export default memo(LogIn);
