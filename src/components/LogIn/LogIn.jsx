/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import * as PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { postLogIn } from '../../redux/actions/actionCreator';
import Modal from '../Modal/Modal';
import './login.css';

function LogIn({ modalActiveIn, setModalActiveIn }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('No password provided.')
        .min(6, 'Password is too short - should be 8 chars minimum.'),
    }),
    onSubmit: (values) => {
      const post = {
        user: {
          email: values.email,
          password: values.password,
        },
      };
      dispatch(postLogIn(post));
    },
  });
  return (
    <Modal active={modalActiveIn} setActive={setModalActiveIn}>
      <h2 className="modal-title">Sign in</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-div">
          <h3>Email address</h3>
          <input className="form-input" id="email_log" type="email" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <h3>Password</h3>
          <input className="form-input" id="password_log" type="password" {...formik.getFieldProps('password')} />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          <br />
        </div>
        <button type="submit" id="oneL" className="modal-button" onClick={() => setModalActiveIn(false)}>Submit</button>
        <button type="button" id="twoL" className="modal-button" onClick={() => setModalActiveIn(false)}>Close</button>
      </form>
    </Modal>
  );
}

LogIn.propTypes = {
  modalActiveIn: PropTypes.bool.isRequired,
  setModalActiveIn: PropTypes.func.isRequired,
};

export default memo(LogIn);
