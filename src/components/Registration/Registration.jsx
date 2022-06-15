import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { bool, func } from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { postUser } from '../../redux/actions/actionCreator';
import Modal from '../Modal/Modal';
import './registration.css';

function Registration({ isRegistration, setModalRegistration }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('No password provided.')
        .min(6, 'Password is too short - should be 8 chars minimum.'),
      confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password')], 'Passwords don\'t match'),
    }),
    onSubmit: (values) => (dispatch(postUser(values))),
  });
  return (
    <Modal isActive={isRegistration} setActive={setModalRegistration}>
      <h2 className="modal-title">Registration form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-div">
          <h3>Name</h3>
          <input className="form-input" value="" id="name" type="text" {...formik.getFieldProps('name')} />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

          <h3>Email address</h3>
          <input className="form-input" value="" id="email_reg" type="email" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <h3>Password</h3>
          <input className="form-input" value="" id="password_reg" type="password" {...formik.getFieldProps('password')} />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}

          <h3>Confirm password</h3>
          <input className="form-input" value="" id="confirmPassword" type="password" {...formik.getFieldProps('confirmPassword')} />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div>{formik.errors.confirmPassword}</div>
          ) : null}
          <br />
        </div>
        <button type="submit" id="oneR" className="modal-button" onClick={() => setModalRegistration(false)}>Submit</button>
        <button type="button" id="twoR" className="modal-button" onClick={() => setModalRegistration(false)}>Close</button>
      </form>
    </Modal>
  );
}

Registration.defaultProps = {
  isRegistration: false,
  setModalRegistration: null,

};
Registration.propTypes = {
  isRegistration: bool,
  setModalRegistration: func,
};

export default memo(Registration);
